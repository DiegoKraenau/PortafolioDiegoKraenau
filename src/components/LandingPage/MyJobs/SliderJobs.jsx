import LogoUpc from '../../../img/LogoUpc.png';
import LogoWhiz from '../../../img/LogoWhiz.png';
import LogoProemsa from '../../../img/LogoProemsa.png';
import LogoForceclose from '../../../img/LogoForceclose.png';
import './_sliderjobs.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderJobs = () => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true
    };




    return (
        <section className="jobs">
            <section className="jobs__content container">
                <h2 className="jobs__content__subtitle">Work Experience</h2>
                <Slider {...settings} className="prueba">
                    <div className="slide">
                        <img src={LogoUpc} alt="logoUPC" />
                        <p>Softare Engenieer Student</p>
                        <p>03/2017 - Now</p>
                    </div>
                    <div className="slide">
                        <img src={LogoProemsa} alt="logoUPC" />
                        <p>Develper Junior</p>
                        <p>03/2020 - 08/2020</p>
                    </div>
                    <div className="slide">
                        <img src={LogoForceclose} alt="logoUPC" />
                        <p>Java Developer Junior</p>
                        <p>10/2020 - 02/2021</p>
                    </div>
                    <div className="slide">
                        <img src={LogoWhiz} alt="logoUPC" />
                        <p>Functional Analist</p>
                        <p>01/2021 - Now</p>
                    </div>
                </Slider>
            </section>
        </section>
    );
}

export default SliderJobs;