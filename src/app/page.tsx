'use client';

import HeroImage from '../components/heroImage';
import HomeContent from '../components/homeContent';
import ProductsPreview from '../components/productsPreview';

const Home = () => {
    return (
        <main>
            <HeroImage />
            <HomeContent />
            <ProductsPreview />
        </main>
    );
};

export default Home;
