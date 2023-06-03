const Navigation = () => {
	return (
		<nav className='my-4 mx-2 flex justify-between items-center'>
			<a href='/' className='font-bold text-xl'>
				Boundless
			</a>
			<ul className='flex gap-4 items-center'>
				<li>
					<a href='/accounts'>Account Viewer</a>
				</li>
			</ul>
		</nav>
	);
};
export default Navigation;
