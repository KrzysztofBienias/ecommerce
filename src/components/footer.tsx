import React from 'react';
import { ImArrowUpRight2 } from 'react-icons/im';

const Footer = () => {
    return (
        <footer className="mt-20 md:mt-32">
            <p className="text-right md:pr-2 2xl:pr-0">Created only for educational purpose</p>
            <h3 className="border-y border-gray-300 text-[10.3vw] font-bold 2xl:text-[161px]">
                <a className="flex items-center justify-center hover:italic" href="https://www.behance.net/nelsondearaujodesign">
                    Nelson de Araújo
                    <ImArrowUpRight2 />
                </a>
            </h3>
        </footer>
    );
};

export default Footer;
