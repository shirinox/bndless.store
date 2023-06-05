'use client';
import AnimateFadeDown from '@/components/AnimateFadeDown';
import { BanknotesIcon, EnvelopeIcon, EnvelopeOpenIcon, NoSymbolIcon } from '@heroicons/react/24/solid';

export default function Home() {
	return (
		<div className='text-center my-32'>
			<AnimateFadeDown time={0.3}>
				<h1 className='text-3xl md:text-5xl font-bold'>Cheap League Accounts</h1>
				<h1 className='text-3xl md:text-5xl font-bold text-red-500'>Lowest ban-rate on the market</h1>
				<p className='text-lg mt-2'>
					Don't take <strong>our word</strong> for it, see it for yourself
					<br /> by joining our community on Discord.
				</p>
			</AnimateFadeDown>
			<AnimateFadeDown time={0.5}>
				<div className='flex justify-center my-8 mb-24 gap-4'>
					<a href='/accounts'>
						<button className='bg-red-500 border border-red-500 px-4 py-1.5 rounded text-white font-bold'>
							Accounts Shop
						</button>
					</a>
					<a href='https://discord.gg/R8NGA2pEE6'>
						<button className='bg-indigo-400 border border-indigo-400 px-4 py-1.5 rounded text-white font-bold'>
							Discord
						</button>
					</a>
				</div>
			</AnimateFadeDown>
			<AnimateFadeDown time={0.7}>
				<div className='bg-black rounded text-white p-8 py-12'>
					<div className='text-left mb-20'>
						<h2 className='text-3xl font-bold'>What makes us special</h2>
						<p className='text-sm max-w-md my-2'>
							Welcome to Boundless Store! We take pride in offering a unique and exceptional experience
							for all our customers.
						</p>
					</div>
					<div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
						<div className='gap-2'>
							<BanknotesIcon className='w-6 h-6 mb-2 mx-auto' />
							<h3 className='text-lg font-bold'>Affordable Prices</h3>
							<p className='text-sm'>
								We believe that everyone should have access to high-quality League of Legends accounts
								without breaking the bank. That's why we offer our accounts at competitive and
								affordable prices.
							</p>
						</div>
						<div className='gap-2 '>
							<NoSymbolIcon className='w-6 h-6 mb-2 mx-auto' />
							<h3 className='text-lg font-bold'>0% ban-rate</h3>
							<p className='text-sm'>
								Your account's safety is our top priority. We go above and beyond to ensure that all our
								accounts have a flawless ban-rate history.
							</p>
						</div>
						<div className='gap-2'>
							<EnvelopeOpenIcon className='w-6 h-6 mb-2 mx-auto' />
							<h3 className='text-lg font-bold'>Unverified Email</h3>
							<p className='text-sm'>
								We provide accounts with unverified email addresses, allowing you to secure and
								personalize the account as your own.
							</p>
						</div>
					</div>
				</div>
			</AnimateFadeDown>
		</div>
	);
}
