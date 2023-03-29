import Banner from "../../homeAll/banner/Banner";
import Blog from "../../homeAll/blog/Blog";
import FAQ from "../../homeAll/faq/FAQ";
import Features from "../../homeAll/Features/Features";
import Inquiry from "../../homeAll/Inquiry/Inquiry";
import Project from "../../homeAll/project/Project";
import Testimonial from "../../homeAll/testimonial/Testimonial";
import Work from "../../homeAll/work/Work"


const Home = () => {
    return (
        <div>
            <Banner/>
            <Work/>
            <Project/>
            <Features/>
            <Testimonial/>
            <FAQ/>
            <Inquiry/>
            <Blog/>
        </div>
    );
};

export default Home;