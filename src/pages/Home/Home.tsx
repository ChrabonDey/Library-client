import About from "../About/About";
import Banner from "../Banner/Banner";
import BecomePartnerSection from "../BecomePartnerSection/BecomePartnerSection";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="my-10">
                <About></About>
            </div>
            <div className="my-10">
                <BecomePartnerSection></BecomePartnerSection>
            </div>
            <div className="my-10">
               <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default Home;