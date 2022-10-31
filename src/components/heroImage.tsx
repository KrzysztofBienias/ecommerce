import Image from 'next/image';
import React from 'react';
import MobileImage from '../images/mobile-hero.jpg';
import DesktopImage from '../images/desktop-hero.jpg';

const HeroImage = () => {
    return (
        <>
            <div className="hidden md:block">
                <Image
                    src={MobileImage}
                    height={1423}
                    width={1917}
                    objectFit="contain"
                    alt="Mobile hero image of the collection"
                />
            </div>
            <div className="md:hidden">
                <Image
                    src={DesktopImage}
                    height={2400}
                    width={1920}
                    objectFit="contain"
                    alt="Desktop hero image of the collection"
                />
            </div>
        </>
    );
};

export default HeroImage;
