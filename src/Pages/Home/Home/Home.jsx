import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Offers from "../Offers/Offers";
import OurReach from "../OurReach/OurReach";
import Reviews from "../Reviews/Reviews";
import TabComponent from "../TabComponents/TabComponent";
import setTitle from "../../../Title/setTitle";

const Home = () => {
    setTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Offers></Offers>
            <Gallery></Gallery>
            <TabComponent></TabComponent>
            <Reviews></Reviews>
            <OurReach></OurReach>
        </div>
    );
};

export default Home;