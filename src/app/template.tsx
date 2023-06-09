import Header from '../components/header';
import Footer from '../components/footer';

interface Props {
    children: React.ReactNode;
}

const Template: React.FC<Props> = ({ children }) => (
    <div className="mx-auto flex min-h-screen max-w-screen-2xl flex-col">
        <Header />
        {children}
        <Footer />
    </div>
);

export default Template;
