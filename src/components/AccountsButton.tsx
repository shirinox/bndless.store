'use client';

import { calculatePrice, getSkinArray } from '@/utils/accounts';
import axios from 'axios';
import { Accounts } from '@/xata';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

type ButtonProps = {
	account: Accounts;
};

const AccountsButton = ({ account }: ButtonProps) => {
	const skinArray = getSkinArray(account);
	const productPrice = Number(calculatePrice(skinArray!).toFixed(2));
	const handlePayment = async (e: any) => {
		e.preventDefault();
		const { data } = await axios.post(
			'/api/payment',
			{
				price: productPrice * 100,
				prod_id: account.id,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		window.location.assign(data);
	};
	return (
		<button
			onClick={(e) => {
				handlePayment(e);
			}}
			className='ml-auto bg-transparent border border-black text-black hover:text-white hover:bg-black text-sm font-bold px-4 py-1.5 rounded my-2 flex gap-1 items-center'
		>
			<ShoppingCartIcon className='w-4 h-4' /> Buy for {productPrice}$
		</button>
	);
};

export default AccountsButton;
