import Footer from '../Shared/Footer/Footer';
import AppointmentBanner from './HomepageAppointment/HomepageAppointment';
import Banner from './Banner';
import Contact from './Contact/Contact';
import Info from './Info/info';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <AppointmentBanner />
            <Testimonials />
            <Contact />
            <Footer />

        </div>
    );
};

export default Home;