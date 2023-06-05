import { motion } from 'framer-motion';

type Props = {
	children: React.ReactNode;
	time: number;
};
const AnimateFade = ({ children, time }: Props) => {
	return (
		<motion.div
			className='flex flex-col'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: time }}
		>
			{children}
		</motion.div>
	);
};
export default AnimateFade;
