'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from 'framer-motion';
import { wrap } from '@motionone/utils';

interface ParallaxProps {
    children: React.ReactNode;
    baseVelocity: number;
}

const ParallaxText: React.FC<ParallaxProps> = ({ children, baseVelocity }) => {
    const [isHover, setIsHover] = useState(false);
    const hoverHelper = () => setIsHover((state) => !state);
    const hoverCondition = isHover ? 1 : baseVelocity;

    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
    /* below!! difference between these two numbers = amount of items moving in animation, here 33.3 */
    const x = useTransform(baseX, (v) => `${wrap(-20, -53.3, v)}%`);
    const directionFactor = useRef(1);

    useAnimationFrame((_, delta) => {
        let moveBy = directionFactor.current * hoverCondition * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="transition-transform hover:-skew-x-12">
            <motion.div
                style={{ x }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onHoverStart={hoverHelper}
                onHoverEnd={hoverHelper}
            >
                <a className="mr-8 md:mr-14 2xl:mr-20" href="https://www.behance.net/nelsondearaujodesign">
                    {children}
                </a>
                <a className="mr-8 md:mr-14 2xl:mr-20" href="https://www.behance.net/nelsondearaujodesign">
                    {children}
                </a>
                <a className="mr-8 md:mr-14 2xl:mr-20" href="https://www.behance.net/nelsondearaujodesign">
                    {children}
                </a>
            </motion.div>
        </div>
    );
};

const transitionVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { delay: 0.3 } },
};

const Footer = () => {
    return (
        <motion.footer transition={{ staggerChildren: 0.2, delay: 0.4 }} className="mt-20 md:mt-32">
            <motion.p
                variants={transitionVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-right md:pr-2 2xl:pr-0"
            >
                Created only for educational purpose
            </motion.p>
            <motion.div
                variants={transitionVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-nowrap overflow-hidden whitespace-nowrap border-y border-gray-300 text-[10.3vw] font-bold tracking-tighter  2xl:text-[161px]"
            >
                <ParallaxText baseVelocity={3}>Nelson de Araújo</ParallaxText>
            </motion.div>
        </motion.footer>
    );
};

export default Footer;
