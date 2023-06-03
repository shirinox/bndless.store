'use client';

import { calculatePrice, getSkinArray } from '@/utils/accounts';
import { Accounts } from '@/xata';
import { ArrowsUpDownIcon, BanknotesIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

type Props = {
	accounts: Accounts[];
	setAccounts: any;
};
const AccountsSort = ({ accounts, setAccounts }: Props) => {
	const [BEAscending, setBEAscending] = useState(true);
	const [priceAscending, setPriceAscending] = useState(true);
	return (
		<div className='flex gap-4 items-center mt-6'>
			<div
				onClick={() => {
					setAccounts(
						[...accounts].sort((a, b) => {
							setBEAscending((p) => !p);
							return BEAscending ? a.blueEssence! - b.blueEssence! : b.blueEssence! - a.blueEssence!;
						})
					);
				}}
				className='flex gap-1 items-center cursor-pointer select-none w-fit'
			>
				<ArrowsUpDownIcon className='w-5 h-5' />
				<p className='text-sm'>Sort BE</p>
			</div>
			<div
				onClick={() => {
					setAccounts(
						[...accounts].sort((a, b) => {
							setPriceAscending((p) => !p);
							const skinArray1 = getSkinArray(a)!;
							const skinArray2 = getSkinArray(b)!;
							return priceAscending
								? Number(calculatePrice(skinArray1).toFixed(2)) -
										Number(calculatePrice(skinArray2).toFixed(2))
								: Number(calculatePrice(skinArray2).toFixed(2)) -
										Number(calculatePrice(skinArray1).toFixed(2));
						})
					);
				}}
				className='flex gap-1 items-center cursor-pointer select-none w-fit'
			>
				<BanknotesIcon className='w-5 h-5' />
				<p className='text-sm'>Sort Price</p>
			</div>
			<div className='items-center ml-auto'>
				<button
					id='button-anchor'
					className='items-center border cursor-not-allowed border-gray-400 text-gray-400 rounded px-4 py-1.5'
					disabled={true}
				>
					Buy Bulk
				</button>
				<p className='text-xs text-gray-500'>work in progress</p>
			</div>
		</div>
	);
};
export default AccountsSort;
