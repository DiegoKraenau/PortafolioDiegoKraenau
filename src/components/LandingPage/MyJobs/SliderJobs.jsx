import LogoUpc from '../../../img/LogoUpc.png';
import LogoWhiz from '../../../img/LogoWhiz.png';
import LogoProemsa from '../../../img/LogoProemsa.png';
import LogoForceclose from '../../../img/LogoForceclose.png';
import './_sliderjobs.scss';
import { useState, useEffect } from 'react';

const SliderJobs = () => {

    const [count, setCount] = useState(1)



    useEffect(() => {
        const interval = setInterval(() => {
            if (count === 3) {
                setCount(1)
            } else {
                setCount(count + 1)
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [count])

    const renderSlide1 = (param) => {
        switch (param) {
            case 1:
                return (
                    <div className="myslide firts_change_1">
                        <img src={LogoProemsa} alt="logoproemsa"></img>
                    </div>
                );
            case 2:
                return (
                    <div className="myslide second_change">
                         <img src={LogoProemsa} alt="logoproemsa"></img>
                    </div>
                );
            case 3:
                return (
                    <div className="myslide third_change">
                         <img src={LogoProemsa} alt="logoproemsa"></img>
                    </div>
                );
            default:
                return (
                    <div className="myslide">
                         <img src={LogoProemsa} alt="logoproemsa"></img>
                    </div>
                );
        }
    }

    const renderSlide2 = (param) => {
        switch (param) {
            case 1:
                return (
                    <div className="myslide firts_change_2">
                        <img src={LogoProemsa} alt="logoproemsa"></img>
                    </div>
                );
            case 2:
                return (
                    <div className="myslide second_change">
                        <img src={LogoProemsa} alt="logoproemsa"></img>
                    </div>
                );
            case 3:
                return (
                    <div className="myslide third_change">
                        <img src={LogoProemsa} alt="logoproemsa"></img>
                    </div>
                );
            default:
                return (
                    <p></p>
                );
        }
    }

    const renderSlide3 = (param) => {
        switch (param) {
            case 1:
                return (
                    <div className="myslide firts_change_3">
                        <img src={LogoForceclose} alt="logoforceclose"></img>
                    </div>
                );
            case 2:
                return (
                    <div className="myslide prueba ">
                        <img src={LogoForceclose} alt="logoforceclose"></img>

                    </div>
                );
            case 3:
                return (
                    <div className="myslide test">
                        <img src={LogoForceclose} alt="logoforceclose"></img>

                    </div>
                );
            default:
                return (
                    <p>hola</p>
                );
        }
    }


    return (
        <section className="jobs">
            <section className="jobs__content container">
                {
                    renderSlide1(count)
                }
                {
                    renderSlide2(count)
                }
                {
                    renderSlide3(count)
                }

            </section>
            <p>{count}</p>
        </section>
    );
}

export default SliderJobs;