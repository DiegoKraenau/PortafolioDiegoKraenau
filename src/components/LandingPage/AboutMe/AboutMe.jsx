import './_aboutme.scss';
import { useState } from 'react';
import MyPhoto from '../../../img/myphoto.jpg';
import MyCv from '../../../img/CVDiegoKraenau.docx';

const AboutMe = () => {

    const [myinformation, setMyInformation] = useState(
        {
            photo: MyPhoto,
            bio: 'I am 20 years old and I am finishing my degree in software engineering, I am passionate about both frontend  and backend web development, I consider myself to be a self-taught person with an  interest in the technological world, I am also a very perfectionist. I have some work experience in development and monitoring of software projects. Finally, I consider myself a very enthusiastic  person to learn new things and obviously always  thinking about having a good job performance.',
            mycv: MyCv
        }
    )

    return (
        <section className="AboutMe">
            <section className="AboutMe__content container">
                <div className="AboutMe__information">
                    <h2>About Me</h2>
                    <div className="complete__bio">
                        <div className="circular--landscape">
                            <img src={myinformation.photo} alt="myphoto"></img>
                        </div>
                        <div className="mybio">
                            <p>{myinformation.bio}</p>
                            <a className="button btn-mycv" href={myinformation.mycv} download="CVDiegoKraenau">My CV</a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default AboutMe;