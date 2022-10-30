import Image from 'next/image';
import React from 'react';
import Content1 from '../images/content1.jpg';
import Content2 from '../images/content2.jpg';

const HomeContent = () => {
    return (
        <>
            <div className="my-10 mx-auto max-w-md p-14 text-center md:my-20 md:max-w-2xl 2xl:max-w-5xl">
                <h4 className="text-sm font-bold sm:text-lg md:text-3xl 2xl:pb-4 2xl:text-5xl">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores ea corrupti fuga, saepe accusamus
                    magni et excepturi cumque impedit exercitationem quod ad beatae quae officia!
                </h4>
                <p className="mx-auto my-2 w-fit border-t border-gray-300 px-4 py-2 text-sm md:text-base 2xl:text-2xl">
                    Based in Cracow, Poland
                </p>
            </div>
            <div className="grid grid-cols-2 gap-2 lg:gap-4">
                <Image src={Content1} height={2400} width={1920} objectFit="contain" alt="Image of the collection" />
                <Image src={Content2} height={1750} width={1400} objectFit="contain" alt="Image of the collection" />
            </div>
            <div className="py-20 pr-2 text-right md:pr-4 2xl:pr-0">
                <h5 className="text-4xl font-bold sm:text-6xl md:text-7xl xl:text-8xl 2xl:pb-4 2xl:text-9xl">
                    The less is
                    <br />
                    more design
                </h5>
            </div>
        </>
    );
};

export default HomeContent;
