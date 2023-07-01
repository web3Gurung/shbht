import React from "react";
import '../styles/About.css';
import '../styles/index.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaReact, FaHtml5, FaCss3, FaNpm } from "react-icons/fa";
import { BiLogoJavascript, BiLogoFirebase, BiLogoGit } from "react-icons/bi";

const About = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };


    return (
        <div className="about">
            <div className="about_info">
                <h1><span>01. </span>About</h1> <br/>
                <p>I like to build. Started off my career in video editing and motion graphics, switching to code. I learnt web development from the Odin Project.<br/> <br/>

                I am interested in product based work as there’s a kick in helping to make people’s lives easier.<br/> <br/>

                Side note: I like to talk about chess and philosophy :&#10630;
                </p>
            </div>

            <div className="about_skills_carousel">
                <div className="carousel-container">
                        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={1500} removeArrowOnDeviceType={["tablet", "mobile"]} itemClass="carousel-item-padding-40-px" containerClass="carousel-container">
                            <FaReact />
                            <BiLogoJavascript />
                            <FaHtml5 />
                            <FaCss3 />
                            <FaNpm />
                            <BiLogoFirebase />
                            <BiLogoGit />
                        </Carousel>
                    </div>
            </div>
        </div>
    )
}

export default About;