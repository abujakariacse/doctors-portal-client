import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Banner from './Banner';
import Info from './Info/info';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <AppointmentBanner />
        </div>
    );
};

export default Home;