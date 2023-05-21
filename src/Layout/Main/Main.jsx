import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const Main = () => {
    const navigation = useNavigation();
    return (
        <>
            <Navbar></Navbar>
            {/* <div>{navigation.state === 'loading' && <MoonLoader color="#36d7b7" /> }</div> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;