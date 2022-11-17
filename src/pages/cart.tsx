import { useSelector } from 'react-redux';
import CheckoutProduct from '../components/checkoutProduct';
import Footer from '../components/footer';
import Header from '../components/header';
import { selectItems, selectTotal } from '../redux/slices/basksetSlice';
import { useSession } from 'next-auth/react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe(process.env.stripe_public_key as string);

const Cart = () => {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const { data: session } = useSession();

    const createCheckoutSession = async () => {
        const stripe = await stripePromise;
        const checkoutSession = await axios.post('/api/create-checkout-session', {
            items,
            email: session && session?.user?.email,
        });
        const result = await stripe?.redirectToCheckout({ sessionId: checkoutSession.data.id });

        if (result?.error) alert(result.error.message);
    };

    return (
        <div className="mx-auto flex min-h-screen max-w-screen-2xl flex-col font-montserrat">
            <Header />

            <div className="flex w-full max-w-6xl flex-1 flex-col justify-between sm:px-10 md:mx-auto md:mt-14 md:flex-row xl:mt-24 xl:px-0">
                <div className="order-2 pl-2 md:order-1 md:w-2/3 md:max-w-3xl md:pl-0">
                    {items.map((item, index) => (
                        <CheckoutProduct item={item} key={index} />
                    ))}
                </div>

                <div className="order-1 md:order-2">
                    <div className="p-4 text-right sm:p-0 sm:py-4">
                        <p className="text-xl font-bold lg:text-2xl xl:text-4xl">Total price: ${total}</p>
                        <p className="lg:text-lg xl:text-2xl">items: {items.length}</p>
                        <p>(max 5 items)</p>
                        <button
                            role="link"
                            disabled={!session}
                            onClick={createCheckoutSession}
                            className={`my-2 py-4 hover:italic ${!session ? 'cursor-not-allowed' : null}`}
                        >
                            {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Cart;
