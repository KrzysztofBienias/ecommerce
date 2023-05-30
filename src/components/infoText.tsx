import { motion } from 'framer-motion';

const infoTextVariant = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.4 } },
};

const InfoText = ({ children }: { children: React.ReactNode }) => (
    <div className="p-10 text-center">
        <motion.p
            variants={infoTextVariant}
            initial="hidden"
            animate="show"
            className="text-sm font-bold sm:text-lg md:text-3xl 2xl:pb-4 2xl:text-5xl"
        >
            {children}
        </motion.p>
    </div>
);

export default InfoText;
