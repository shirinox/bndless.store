type Props = {
	title: string;
	description: string;
};
const FAQComponent = ({ title, description }: Props) => {
	return (
		<div className='flex flex-col'>
			<h2 className='mb-8'>{title}</h2>
			<p>{description}</p>
		</div>
	);
};
export default FAQComponent;
