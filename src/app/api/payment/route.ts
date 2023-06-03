import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(request: Request) {
	const stripe = new Stripe(process.env.STRIPE_SECRET!, {
		apiVersion: '2022-11-15',
	});

	const data = await request.json();
	const price = data.price;
	console.log(data);
	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				price_data: {
					currency: 'usd',
					product_data: {
						name: `🚀 EUW | Unranked League Of Legends 30 Level | 35k+`,
						description: '🚀 EUW | Unranked League Of Legends 30 Level | 35k+',
					},
					unit_amount_decimal: price,
				},
				quantity: 1,
			},
		],
		client_reference_id: data.prod_id,
		mode: 'payment',
		success_url: `https://bndless.store/accounts`,
		cancel_url: 'http://bndless.store/accounts',
	});

	return NextResponse.json(session.url);
}
