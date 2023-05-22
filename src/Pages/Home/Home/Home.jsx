import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Offers from "../Offers/Offers";
import Reviews from "../Reviews/Reviews";
import TabComponent from "../TabComponents/TabComponent";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offers></Offers>
            <Gallery></Gallery>
            <TabComponent></TabComponent>
            <h2>This is Home</h2>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;