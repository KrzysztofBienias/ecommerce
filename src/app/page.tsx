'use client';

import Header from '../components/header';
import HeroImage from '../components/heroImage';
import HomeContent from '../components/homeContent';
import ProductsPreview from '../components/productsPreview';
import Footer from '../components/footer';

const Home = () => {
    return (
        <div className="mx-auto max-w-screen-2xl">
            <Header />
            <main>
                <HeroImage />
                <HomeContent />
                <ProductsPreview />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
