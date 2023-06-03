import Navigation from '@/components/Navigation';

const questions = [
	{
		title: 'What is a smurf League of Legends (LoL) account?',
		description:
			'A Smurf LoL account refers to a secondary account created by experienced players to play at lower skill levels than their main account. These accounts are commonly used for various reasons, such as practicing new champions, playing with friends at lower ranks, or simply for a fresh start.',
	},
	{
		title: 'Why should I buy a smurf LoL account?',
		description:
			"Buying a Smurf LoL account allows you to skip the initial leveling process and jump straight into ranked games. It provides an opportunity to play at lower skill levels and experience the game from a different perspective. Additionally, it enables you to maintain anonymity if you prefer not to reveal your primary account's identity.",
	},
	{
		title: 'Is it legal to buy and sell smurf LoL accounts?',
		description:
			"The sale and purchase of Smurf LoL accounts are against Riot Games' terms of service. While it is a common practice, it still carries a risk of account suspension or banning if caught. However, the majority of players engage in smurfing without facing any consequences.",
	},
	{
		title: 'Can I change the account details after purchase?',
		description:
			'Yes, once you receive the account details, you can change the password, email address, and any other account information to ensure its security and make it your own.',
	},
	{
		title: 'What payment methods do you accept?',
		description:
			'We accept various payment methods, including credit/debit cards, Stripe, and other secure online payment systems. The available options will be displayed during the checkout process. If you have any questions on more available payment methods, please contact us by joining our Discord server.',
	},
	{
		title: 'What is your refund policy?',
		description:
			'We have a refund policy in place, and it varies depending on the circumstances and the account you have purchased. If your account gets banned within 7 days of purchase, we will provide you with a new account. If you have any questions regarding our refund policy, please contact us by joining our Discord server.',
	},
];

const FAQPage = () => {
	return (
		<div>
			<h1 className='text-3xl font-semibold text-center my-16'>Frequently Asked Question</h1>
			<div className=''>
				{questions.map((question, index) => (
					<div className='max-w-4xl mx-auto'>
						<h2 className='text-xl font-semibold mt-8'>
							{++index}. {question.title}
						</h2>
						<p className='mt-2'>{question.description}</p>
					</div>
				))}
			</div>
			<p className='max-w-xl text-xs mx-auto text-center my-6 text-gray-500'>
				Please note that while we strive to provide accurate and up-to-date information, it is essential to
				check the specific policies and terms of service on our webstore for the most accurate and current
				details regarding purchasing smurf LoL accounts.
			</p>
		</div>
	);
};
export default FAQPage;
