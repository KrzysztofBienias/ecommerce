import { motion } from 'framer-motion';
import Image from 'next/image';
import MobileImage from '../images/mobile-hero.jpg';
import DesktopImage from '../images/desktop-hero.jpg';

const imageVariant = {
    hidden: { y: 100, scale: 0.8, opacity: 0 },
    show: { y: 0, scale: 1, opacity: 1, transition: { duration: 0.4, delay: 0.8 } },
};

const HeroImage = () => {
    return (
        <>
            <motion.div className="hidden md:block" variants={imageVariant} initial="hidden" animate="show">
                <Image
                    src={MobileImage}
                    height={1423}
                    width={1917}
                    style={{ objectFit: 'contain' }}
                    alt="Mobile hero image of the collection"
                    priority
                />
            </motion.div>
            <motion.div className="md:hidden" variants={imageVariant} initial="hidden" animate="show">
                <Image
                    src={DesktopImage}
                    height={2400}
                    width={1920}
                    style={{ objectFit: 'contain' }}
                    alt="Desktop hero image of the collection"
                    priority
                />
            </motion.div>
        </>
    );
};

export default HeroImage;
