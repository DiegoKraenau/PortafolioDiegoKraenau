import { Fragment } from "react";
import AboutMe from "./AboutMe/AboutMe";
import Header from "./Header/Header";
import SliderJobs from "./MyJobs/SliderJobs";
import MyProjects from "./MyProjects/MyProjects";
import Skills from "./Skills/Skills";


const LandingPage = () => {
    return ( 
        <Fragment>
            <Header></Header>
            <AboutMe></AboutMe>
            <SliderJobs></SliderJobs>
            <Skills></Skills>
            <MyProjects></MyProjects>
        </Fragment>
     );
}
 
export default LandingPage;