import Navbar from '../Navbar/Navbar';
import './_header.scss';
import Code from '../../../img/code.svg';
import { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

const Header = () => {



    useEffect(() => {
        new Typewriter('#typewriter', {
            strings: ['Software Engenieer', 'Web developer', 'Freelancer'],
            autoStart: true,
            loop: true
        });
    }, [])


    return (
        <section className="header">
            <Navbar></Navbar>
            <section className="header__content container">
                <div className="header__left">
                    <h2>Hello, my name is <br/>Diego Kraenau</h2>
                    <div className="wrapper">
                        <h3>I´m </h3>
                        <p id="typewriter"></p>
                    </div>
                    <button className="button btn-header">Meet me !</button>
                </div>
                <div className="header__right">
                    <img src={Code} alt="imagecode"></img>
                </div>
            </section>
        </section>
    );
}

export default Header;