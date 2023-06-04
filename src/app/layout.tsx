import Navigation from '@/components/Navigation';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'bndless.store | Boundless Market | cheapest league of legends accounts',
	description: '',
	icons: {
		icon: '/icon.png',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<meta
				name='description'
				content='Welcome to our Smurf League of Legends Store! Find a wide selection of level 30 unranked accounts, rare skins, and more. Boost your gameplay and dominate the Rift with our high-quality smurf accounts.'
			/>
			<body className={inter.className}>
				<div className='max-w-sm md:max-w-2xl xl:max-w-4xl 2xl:max-w-7xl mx-auto'>
					<Navigation />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
