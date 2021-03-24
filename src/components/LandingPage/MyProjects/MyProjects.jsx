import './_myprojects.scss';
import NODEJSlogo from '../../../img/nodejs-icon.svg';
import GITHUBsvg from '../../../img/github.svg';
import NPMsvg from '../../../img/npm-logo.svg';
import createbackend from '../../../img/ddd.gif';
import loading from '../../../img/loading.gif';
import { useState } from 'react';

const MyProjects = () => {

    const [projects, setProjects] = useState([
        {
            photo: createbackend,
            title: 'create-backend-ddd',
            description: 'Description: A CLI built in Node.js, to automate the process of creating a rest api with DDD architecture',
            technologies: ['Nodejs', 'MySql', 'PostgreSQL', 'Docker', 'DDD'],
            github: '',
            direct: ''
        },
        {
            photo: loading,
            title: 'loading-screen-kraenau',
            description: 'It is a simple component that was created for the only reason of providing a responsive loading screen for applications made in ReactJs.',
            technologies: ['React', 'Html', 'Sass'],
            github: '',
            direct: ''
        }
    ])

    return (
        <section className="myprojects">
            <section className="myprojects__content container">
                <h2>My Projects</h2>
                <div className="myprojects__content__items">
                    {
                        projects.map(project =>
                            <div className="myprojects__content__item">
                                <div className="img-gif">
                                    <img src={project.photo} alt="gif"></img>
                                </div>
                                <div className="text-item">
                                    <p className="featured">Featured Project</p>
                                    <h3>{project.title}</h3>
                                    <p className="description">{project.description}n</p>
                                    <div className="technologies">
                                        {
                                            project.technologies.map(tech => (
                                                <p>{tech}</p>
                                            ))
                                        }
                                    </div>
                                    <div className="repo-source">
                                        <img src={GITHUBsvg} alt="githublogo"></img>
                                        <img src={NPMsvg} alt="githublogo"></img>
                                    </div>
                                </div>
                            </div>)
                    }

                </div>
            </section>
        </section>
    );
}

export default MyProjects;