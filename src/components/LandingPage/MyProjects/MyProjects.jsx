import './_myprojects.scss';
import NODEJSlogo from '../../../img/nodejs-icon.svg';
import GITHUBsvg from '../../../img/github.svg';
import NPMsvg from '../../../img/npm-logo.svg';

const MyProjects = () => {
    return (
        <section className="myprojects">
            <section className="myprojects__content container">
                <h2>My Projects</h2>
                <div className="myprojects__content__items">
                    <h3>create-backend-ddd</h3>
                    <div className="repo-source">
                        <img src={GITHUBsvg} alt="githublogo"></img>
                        <img src={NPMsvg} alt="githublogo"></img>
                    </div>
                    <p>Description: A CLI built in Node.js, to automate the process of creating a rest api with DDD architecture</p>
                </div>
            </section>
        </section>
    );
}

export default MyProjects;