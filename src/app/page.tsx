import Email from '@/components/Email';

export default function Home() {
	return (
		<div className='h-screen flex'>
			<div className='flex flex-col mx-auto items-center justify-center'>
				<h1 className='text-6xl text-semibold text-center my-4 md:my-2'>
					This page is still a work in progress
				</h1>
				<p className='text-xl'>
					Until then check out our working{' '}
					<a className='underline' href='/accounts'>
						Accounts page
					</a>
				</p>
			</div>
		</div>
	);
}
