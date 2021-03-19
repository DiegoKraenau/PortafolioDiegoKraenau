import { Fragment } from "react";
import AboutMe from "./AboutMe/AboutMe";
import Header from "./Header/Header";
import SliderJobs from "./MyJobs/SliderJobs";


const LandingPage = () => {
    return ( 
        <Fragment>
            <Header></Header>
            <AboutMe></AboutMe>
            <SliderJobs></SliderJobs>
        </Fragment>
     );
}
 
export default LandingPage;