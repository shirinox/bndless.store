import AccountsGrid from '@/components/AccountsGrid';
import Navigation from '@/components/Navigation';
import { getXataClient } from '@/xata';

const AccountsPage = async () => {
	const xata = getXataClient();
	const accounts = JSON.parse(JSON.stringify(await xata.db.accounts.getAll()));
	return (
		<>
			<Navigation />
			<img src='/path.png' className='-z-10 absolute top-0 -translate-x-2/3 translate-y-1/3' />
			<h1 className='mt-24 text-5xl font-bold'>Account List</h1>
			<span className='text-xs'>Available accounts &bull; {accounts.length}</span>
			<AccountsGrid accounts={accounts} />
		</>
	);
};
export default AccountsPage;
