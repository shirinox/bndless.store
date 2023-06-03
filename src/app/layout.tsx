import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<div className='max-w-sm md:max-w-2xl xl:max-w-4xl 2xl:max-w-7xl mx-auto'>{children}</div>
			</body>
		</html>
	);
}
