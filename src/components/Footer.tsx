import Boundless from '@/app/boundless.svg';
import Image from 'next/image';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className='flex flex-col md:flex-row md:justify-between mt-24 mb-12'>
			<div className='max-w-sm mb-12 md:mb-0 text-center md:text-left'>
				<Image className='w-12 h-12 mx-auto md:mx-0' src={Boundless} alt='Boundless logo' />
				<p className='my-2 text-gray-700 mt-6'>
					Get the best & most secure League of Legends accounts at the best prices
				</p>
				<div className='flex gap-2 justify-center md:justify-normal'>
					<div className='w-fit'>
						<Link href='https://discord.gg/R8NGA2pEE6' target='_blank' rel='noreferrer'>
							<FontAwesomeIcon className='w-6 h-6' icon={faDiscord} />
						</Link>
					</div>
					<div className='w-fit'>
						<Link href='mailto:boundlessseller@gmail.com' target='_blank' rel='noreferrer'>
							<EnvelopeIcon className='w-6 h-6' />
						</Link>
					</div>
				</div>
			</div>
			<div className='flex flex-col items-center md:flex-row gap-12'>
				<div className='text-center flex flex-col'>
					<strong className='text-xl'>Links</strong>
					<Link href='/' className='text-gray-500'>
						Home
					</Link>
					<Link href='/faq' className='text-gray-500'>
						FAQ
					</Link>
					<Link href='/accounts' className='text-gray-500'>
						Accounts
					</Link>
				</div>
				<div className='flex flex-col text-center'>
					<strong className='text-xl'>Contact</strong>
					<Link className='text-gray-500' href='https://discord.gg/R8NGA2pEE6'>
						Discord
					</Link>
					<Link className='text-gray-500' href='mailto:boundlessseller@gmail.com'>
						Mail
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Footer;
