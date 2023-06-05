import { motion } from 'framer-motion';

type Props = {
	children: React.ReactNode;
	time: number;
};
const AnimateFadeLeft = ({ children, time }: Props) => {
	return (
		<motion.div
			className='flex flex-col'
			initial={{ opacity: 0, translateX: -1000 }}
			animate={{ opacity: 1, translateX: 0 }}
			transition={{ duration: time }}
		>
			{children}
		</motion.div>
	);
};
export default AnimateFadeLeft;
