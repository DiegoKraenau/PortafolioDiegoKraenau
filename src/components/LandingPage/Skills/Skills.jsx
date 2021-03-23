import HTMLlogo from '../../../img/html5.svg';
import CSSlogo from '../../../img/css3.svg';
import SASSlogo from '../../../img/sass.svg';
import ANGULARlogo from '../../../img/angular-icon-1.svg';
import REACTlogo from '../../../img/react-2.svg';
import NODEJSlogo from '../../../img/nodejs-icon.svg';
import REDUXlogo from '../../../img/redux.svg';
import NODEJSlogo2 from '../../../img/nodejs.svg';
import JAVAlogo from '../../../img/java.svg';
import JSlogo from '../../../img/logo-javascript.svg';
import './_skills.scss';

const Skills = () => {
    return (
        <section className="skills">
            <h2>Skills</h2>
            <section className="skills__content container">
                <div className="skill">
                    <img src={HTMLlogo} alt="skill"></img>
                    <p>HTML</p>
                </div>
                <div className="skill">
                    <img src={CSSlogo} alt="skill"></img>
                    <p>CSS</p>
                </div>
                <div className="skill">
                    <img src={SASSlogo} alt="skill"></img>
                    <p>SASS</p>
                </div>
                <div className="skill">
                    <img src={ANGULARlogo} alt="skill"></img>
                    <p>Angular</p>
                </div>
                <div className="skill">
                    <img src={REACTlogo} alt="skill"></img>
                    <p>React</p>
                </div>
                <div className="skill">
                    <img src={NODEJSlogo2} alt="skill"></img>
                    <p>NodeJs</p>
                </div>
                <div className="skill">
                    <img src={REDUXlogo} alt="skill"></img>
                    <p>Redux</p>
                </div>
                <div className="skill">
                    <img src={JAVAlogo} alt="skill"></img>
                    <p>Java</p>
                </div>
                <div className="skill">
                    <img src={JSlogo} alt="skill"></img>
                    <p>JavaScript</p>
                </div>
            </section>
        </section>
    );
}

export default Skills;