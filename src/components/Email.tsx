import { Accounts } from '@/xata';
import { Html, Button, Tailwind, Text, Head, Body, Container, Heading } from '@react-email/components';
import * as React from 'react';

type Props = {
	account: Accounts;
};
const Email = ({ account }: Props) => (
	<Html>
		<Head />
		<Tailwind>
			<Body className='mx-auto my-12 bg-white font-sans'>
				<Container>
					<Heading className='text-2xl' mx-auto>
						Thanks for your order!
					</Heading>
					<Text className='text-lg text-center'>
						Thank you for choosing our services, and we appreciate your patience throughout the account
						creation process.
					</Text>
					<Text>
						Here are the details you need to access your League of Legends account:
						<br />
						<Text className='text-lg'>Username: {account.username}</Text>
						<Text className='text-lg'>Password: {account.password}</Text>
					</Text>
					<Text className='mt-12 text-xs text-center'>Boundless Market Team</Text>
				</Container>
			</Body>
		</Tailwind>
	</Html>
);
export default Email;
