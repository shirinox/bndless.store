import Boundless from '@/app/boundless.svg';
import Image from 'next/image';

const Navigation = () => {
	return (
		<nav className='my-4 mx-2 flex justify-between items-center'>
			<a href='/' className='font-bold text-xl'>
				<Image className='w-12 h-12' src={Boundless} alt='Boundless logo' />
			</a>
			<ul className='flex gap-4 items-center'>
				<li>
					<a href='/faq'>FAQ</a>
				</li>
				<li>
					<a href='/accounts'>Shop</a>
				</li>
			</ul>
		</nav>
	);
};
export default Navigation;
