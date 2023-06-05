'use client';

import { Accounts } from '@/xata';
import { formatter } from '@/utils/common';
import AccountsButton from '@/components/AccountsButton';
import { useState } from 'react';
import AccountsSort from './AccountsSort';
import { calculatePrice, getSkinArray } from '@/utils/accounts';
import AnimateFade from './AnimateFade';

type Props = {
	accounts: Accounts[];
};

const AccountsGrid = ({ accounts }: Props) => {
	const [sortBEDescending, setSortBEDescending] = useState(true);
	const [accountsState, setAccountsState] = useState(accounts);

	return (
		<>
			<AccountsSort accounts={accountsState} setAccounts={setAccountsState} />
			<div className='mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 min-h gap-2'>
				{accountsState.map((account, i) => {
					const skinArray = getSkinArray(account);
					const productPrice = Number(calculatePrice(skinArray!).toFixed(2));
					return (
						<AnimateFade key={account.id} time={0.5 + i / 10}>
							<div className='flex flex-col bg-neutral-950 text-white p-4 h-full rounded'>
								<div className='flex gap-2 items-center 	mb-16'>
									<span className='font-bold text-xl'>{account.region}</span>
									&bull;
									<span className='text-sm text-neutral-400'>Level 30</span>
									<img className='w-4 h-4 items-center my-auto ml-auto' src='/BE_icon.webp' />
									<span>{formatter.format(account.blueEssence!)}</span>
								</div>
								<div className='flex gap-2 mt-auto'>
									<div>
										<p className='mt-auto'>{account.skins}</p>
										<p className='text-xs text-neutral-700 self-start'>ID: {account.id}</p>
									</div>
								</div>
							</div>
							<AccountsButton account={account} />
						</AnimateFade>
					);
				})}
			</div>
		</>
	);
};
export default AccountsGrid;
