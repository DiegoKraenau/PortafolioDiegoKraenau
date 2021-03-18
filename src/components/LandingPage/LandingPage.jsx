import { Fragment } from "react";
import AboutMe from "./AboutMe/AboutMe";
import Header from "./Header/Header";


const LandingPage = () => {
    return ( 
        <Fragment>
            <Header></Header>
            <AboutMe></AboutMe>
        </Fragment>
     );
}
 
export default LandingPage;