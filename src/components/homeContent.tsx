import Image from 'next/image';
import React from 'react';
import Content1 from '../images/content1.jpg';
import Content2 from '../images/content2.jpg';
import { motion } from 'framer-motion';

const textVariants = {
    hidden: { y: 150, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.4, delay: 0.3 } },
};

const imageVariant = {
    hidden: { y: 100, scale: 0.8, opacity: 0 },
    show: { y: 0, scale: 1, opacity: 1, transition: { duration: 0.4, delay: 0.3 } },
};

const HomeContent = () => {
    return (
        <>
            <motion.div
                variants={textVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="my-10 mx-auto max-w-md p-14 text-center md:my-20 md:max-w-2xl 2xl:max-w-5xl"
            >
                <h3 className="text-sm font-bold sm:text-lg md:text-3xl 2xl:pb-4 2xl:text-5xl">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores ea corrupti fuga, saepe accusamus magni et
                    excepturi cumque impedit exercitationem quod ad beatae quae officia!
                </h3>
                <p className="mx-auto my-2 w-fit border-t border-gray-300 px-4 py-2 text-sm md:text-base 2xl:text-2xl">
                    Based in Cracow, Poland
                </p>
            </motion.div>
            <motion.div
                variants={imageVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-2 lg:gap-4"
            >
                <Image src={Content1} height={2400} width={1920} style={{objectFit: "contain"}} alt="Image of the collection" />
                <Image src={Content2} height={1750} width={1400} style={{objectFit: "contain"}} alt="Image of the collection" />
            </motion.div>
            <div className="py-20 pr-2 text-right md:pr-4 2xl:pr-0">
                <motion.h4
                    variants={textVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-4xl font-bold sm:text-6xl md:text-7xl xl:text-8xl 2xl:pb-4 2xl:text-9xl"
                >
                    The less is
                    <br />
                    more design
                </motion.h4>
            </div>
        </>
    );
};

export default HomeContent;
