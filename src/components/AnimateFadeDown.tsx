import { motion } from 'framer-motion';

type Props = {
	children: React.ReactNode;
	time: number;
};
const AnimateFade = ({ children, time }: Props) => {
	return (
		<motion.div
			className='flex flex-col'
			initial={{ opacity: 0, translateY: -10 }}
			animate={{ opacity: 1, translateY: 0 }}
			transition={{ duration: time }}
		>
			{children}
		</motion.div>
	);
};
export default AnimateFade;
