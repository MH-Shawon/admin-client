import Portfolio from "../Portfolio/Portfolio";
import About from "./About/About";
import Banner from "./Banner/Banner";
import FooterMsg from "./FooterMsg";




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Portfolio></Portfolio>
            <FooterMsg></FooterMsg>
         </div>
    );
};

export default Home;