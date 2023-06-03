import Email from '@/components/Email';
import { announceDiscordWebhook } from '@/utils/discord';
import { Accounts, XataClient } from '@/xata';
import { headers } from 'next/headers';
import { NextRequest } from 'next/server';
import { Resend } from 'resend';
import Stripe from 'stripe';

const xata = new XataClient();
const resend = new Resend(process.env.RESEND_SECRET as string);

export async function POST(request: NextRequest) {
	const stripe = new Stripe(process.env.STRIPE_SECRET!, {
		apiVersion: '2022-11-15',
	});
	const payload = await request.text();
	const headersList = headers();
	const sig = headersList.get('stripe-signature') as string;
	const signingSecret = process.env.WEBHOOK_SECRET as string;
	let event: Stripe.Event;
	try {
		event = stripe.webhooks.constructEvent(payload, sig, signingSecret);
	} catch (error) {
		return new Response(`Webhook error: ${error}`, {
			status: 400,
		});
	}

	if (event.type === 'checkout.session.completed') {
		const eventData = event.data.object as any;
		const account_id = eventData.client_reference_id;
		const account_details = (await xata.db.accounts.read(account_id)) as Accounts;

		await xata.db.sold.create({
			stripe_id: eventData.id,
			acc: account_details.id,
		});

		resend.sendEmail({
			from: 'onboarding@resend.dev',
			to: eventData.customer_details.email,
			subject: 'Your order has been completed!',
			react: Email({ account: account_details }),
		});

		return new Response('OK', {
			status: 200,
		});
	} else {
		return new Response('Event type not handled', {
			status: 400,
		});
	}
}
