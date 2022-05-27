import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Banner from './Banner';
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
        </div>
    );
};

export default Home;