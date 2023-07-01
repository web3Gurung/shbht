import React, { useEffect, useState } from "react";
import '../styles/Projects.css';
import '../styles/index.css';
import ProjectDetailContainer from "./ProjectDetailContainer";
import youtubeCloneImg from '../assets/youtube-clone.png';
import tagImg from '../assets/tag.png';
import memoryCardImg from '../assets/memory-card.png';
import weatherAppImg from '../assets/weather-app.png';

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects([{name: 'Youtube Clone', description: 'A Youtube clone using React, Rapid API, Firebase where a user can see the home feed, search for videos/channels and watch videos.', img: youtubeCloneImg, website: 'https://youtube-clone-dusky-nine.vercel.app/', repo: 'https://github.com/Shobhit-Nagpal/youtube-clone'},{name: 'Tag', description: 'A photo tagging game where you have to find your favourite game characters. Made using React, React Router and Firebase', img: tagImg, website: 'https://shobhit-nagpal.github.io/tag/', repo: 'https://github.com/Shobhit-Nagpal/tag'} , {name: 'Memory card', description: 'A memory game where you have to choose all characters only once. The charaters are from the Office! Made using React', img: memoryCardImg, website: 'https://shobhit-nagpal.github.io/memory-card/', repo: 'https://github.com/Shobhit-Nagpal/memory-card'}, {name: 'Weather app', description: 'A weather app which pulls data from OpenWeather API and displays the weather of searched location. Made using HTML, CSS and Javascript.', img: weatherAppImg, website: 'https://shobhit-nagpal.github.io/weather-app/', repo: 'https://github.com/Shobhit-Nagpal/weather-app'}])
    }, [])
    return (
        <div className="projects">
            <div className="projects_info">
                <h1><span>02. </span><a id="projects" href="#">Projects</a></h1> <br/>
            </div>

            <div className="projects_container">

                {projects.map((project, index) => {
                    return <ProjectDetailContainer project={project} key={index}/>
                })}

            </div>
        </div>
    )
}

export default Projects;