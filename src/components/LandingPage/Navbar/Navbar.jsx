import { Link } from 'react-router-dom';
import Logo from '../../../img/LogoDk.svg';
import './_navbar.scss';
import { useState, useEffect } from 'react';
import LogoColor from '../../../img/LogoBg.png';


const Navbar = () => {

    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState(false);

    const openMenu = () => {
        setOpen(!open);
    }


    const handleScroll = () => {
        if (window.scrollY > 100) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    useEffect(() => {

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])


    return (
        <section className={`navbar ${scroll ? 'bg-navbar' : ' '}`}>
            <section className="navbar__content container flex flex-jc-sb">
                <img src={`${scroll ? LogoColor : Logo}`} alt="logo"></img>
                <div className={`navbar__right flex  flex-ai-c ${scroll ? 'menu-color' : ' '}`}>
                    <ul className="flex">
                        <li>
                            <Link to="#">About me</Link>
                        </li>
                        <li>
                            <Link to="#">Skills</Link>
                        </li>
                        <li>
                            <Link to="#">Projects</Link>
                        </li>
                        <li>
                            <Link to="#">Contact me</Link>
                        </li>
                    </ul>
                </div>
                <div onClick={() => openMenu()} className={`hamburger_menu  ${open ? 'open-hamburger' : ' '}
                 ${scroll ? 'hamburger-color' : ' '}`} >
                    <span className=""></span><span className=""></span><span className=""></span>
                </div>
            </section>
            <div className={`hamburger-background ${open? 'display_block':'display_none'}`}>
                <div className={`hamburger-options flex ${open ? 'display_block' : 'display_none'}`}>
                    <Link to="#" className="">About me</Link>
                    <Link to="#" className="">Skills</Link>
                    <Link to="#" className="">Projects</Link>
                    <Link to="#" className="">Contact me</Link>
                </div>
            </div>
        </section>
    );
}

export default Navbar;