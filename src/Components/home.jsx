import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import $ from 'jquery'; 
import { useState, useEffect } from 'react';

// Images
const imgFolder = '/img/';
const profile = imgFolder + 'Profile.jpeg';
const html5Icon = imgFolder + 'html5-01-svgrepo-com.svg';
const bootstrapIcon = imgFolder + 'bootstrap-fill-svgrepo-com.svg';
const javascriptIcon = imgFolder + 'javascript-155-svgrepo-com.svg';
const cssIcon = imgFolder + 'css3-02-svgrepo-com.svg';
const angularIcon = imgFolder + 'angular-svgrepo-com.svg';
const typescriptIcon = imgFolder + 'typescript-16-svgrepo-com.svg';
const javaIcon = imgFolder + 'java-svgrepo-com.svg';
const xmlIcon = imgFolder + 'xml-document-svgrepo-com.svg';
const springIcon = imgFolder + 'spring-svgrepo-com.svg';
const mavenIcon = imgFolder + 'apachemaven-svgrepo-com.svg';
const seleniumIcon = imgFolder + 'selenium-svgrepo-com.svg';

const doxeeLogo = imgFolder + 'doxee_logo.png';
const bawagLogo = imgFolder + 'bawag_logo.svg';
const tcdLogo = imgFolder + 'tcd_logo.svg'
const tuViennaLogo = imgFolder + 'TU_Wien-Logo.svg';

const slideImg0 = imgFolder + 'homepage_image0.jpg';
const slideImg1 = imgFolder + 'homepage_image1.jpg';
const slideImg2 = imgFolder + 'homepage_image2.png';

const Home = ({ name }) => { 

    return (
    <div>

    {/* Introductory paragraph */}
    <article class="intro">
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} lg={5} >
                    <img id="profile" width={335} height={335} src={profile} alt="An image of an adult (Martin Nangole) in front of a metal gate with some greenery in the background."/>
                </Col>
                <Col class="mt-sm-5 mt-lg-0" xs={12} lg={7}>
                    <div class="intro-text">
                        <h1>Hi there! 👋🏼</h1>
                        <p>I'm a software developer who is looking to work on <b>creative</b> and <b>innovative</b> projects.
                        </p>
                    </div>
                </Col>                
            </Row>
        </Container>        
    </article>
    <hr id="intro-seperator"/>

     {/* Skills */}
    <article class="content-wrapper">
        <h2>Skills</h2>

        <section>
            <h3>Frontend</h3>
            <div class="skills-wrapper">
                <div class="skill">
                    <img src={html5Icon} alt="HTML5 icon."/>
                    <br/>
                    <p>HTML5</p>
                </div>
                <div class="skill">
                    <img src={bootstrapIcon} alt="Bootstrap icon."/>
                    <p>Bootstrap</p>
                </div>
                <div class="skill">
                    <img src={javascriptIcon} alt="JavaScript icon."/>
                    <p>Javascript</p>
                </div>
                <div class="skill">
                    <img src={cssIcon} alt="CSS3 icon."/>
                    <p>CSS3</p>
                </div>
                <div class="skill">
                    <img src={angularIcon} alt="Angular icon."/>
                    <p>Angular</p>
                </div>
                <div class="skill">
                    <img src={typescriptIcon} alt="TypeScript icon."/>
                    <p>TypeScript</p>
                </div>
            </div>
        </section>
        <section>
            <h3>Backend</h3>
            <div class="skills-wrapper">
                <div class="skill">
                    <img src={javaIcon} width={100} alt="Java icon."/>
                    <p>Java</p>
                </div>
                <div class="skill">
                    <img src={xmlIcon} width={100} alt="XML icon."/>
                    <p>XML (JAXB)</p>
                </div>
                <div class="skill">
                    <img src={springIcon} width={100} alt="Spring icon."/>
                    <p>Spring</p>
                </div>
                <div class="skill">
                    <img src={mavenIcon} width={100} alt="Maven icon."/>
                    <p>Maven</p>
                </div>
                <div class="skill">
                    <img src={seleniumIcon} width={100} alt="Selenium icon."/>
                    <p>Selenium</p>
                </div>
            </div>
        </section>
    </article>

    {/* Experience */}
    <div class="experience-wrapper">
        {/* Work */}
        <article class="experience-section work-experience">
            <h2><a href="experience.html#work-experience">Work Experience</a></h2>
            <div class="experience-section-body">
                <div class="experience-subsection work-subsection">
                    <img src={doxeeLogo} width={80} alt="Doxee logo."/>
                    <div>
                        <p class="subsection-year">2022 - Present</p>
                        <p class="subsection-name">Developer</p>
                        <p class="subsection-organization">Doxee</p>
                    </div>
                </div>
                <div class="experience-subsection work-subsection">
                    <img src={bawagLogo} width={80} alt="BAWAG P.S.K. logo."/>
                    <div>
                        <p class="subsection-year">Jul 2019 - Sep 2019</p>
                        <p class="subsection-name">Test Automation Intern</p>
                        <p class="subsection-organization">BAWAG P.S.K.</p>
                    </div>
                </div>
                <div class="experience-subsection work-subsection">
                    <img src={bawagLogo} width={80} alt="BAWAG P.S.K. logo."/>
                    <div>
                        <p class="subsection-year">Jul 2018 - Sep 2018</p>
                        <p class="subsection-name">Digital Banking Intern</p>
                        <p class="subsection-organization">BAWAG P.S.K.</p>
                    </div>
                </div>
            </div>
        </article>
        {/* Education */}
        <article class="experience-section education">
            <h2><a href="experience.html#education-experience">Education</a></h2>
            <div class="experience-section-body">
                <div class="experience-subsection education-subsection"> 
                    {/* 
                    Logo source: 
                    https://logowik.com/trinity-college-dublin-logo-vector-svg-pdf-ai-eps-cdr-free-download-15382.html
                     */}
                    <img src={tcdLogo} width={80} alt="Trinity College Dublin logo."/>
                    <div>
                        <p class="subsection-year">2024 - Present</p>
                        <p class="subsection-name">Interactive Digital Media M.Sc.</p>
                        <p class="subsection-organization">Trinity College Dublin</p>
                    </div>
                </div>
                <div class="experience-subsection education-subsection">
                    <img src={tuViennaLogo} width={80} alt="University of Technology Vienna logo."/>
                    <div>
                        <p class="subsection-year">2017 - 2022</p>
                        <p class="subsection-name">Software and Information Engineering B.Sc.</p>
                        <p class="subsection-organization">TU Wien</p>
                    </div>
                </div>
            </div>
        </article>
    </div>

    <Slideshow
  interval={5000}
  images={[
    slideImg0,
    slideImg1,
    slideImg2
  ]}
/>
    
    <div class="bg-rect">
    </div>

    </div>
    );
};

export function Slideshow({images=[], interval=5000}) {
    const [thumbnails, setThumbnails] = useState([]);
    const [previousSlideStyle, setPreviousSlideStyle] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentSlideStyle, setCurrentSlideStyle] = useState({});
    const [nextSlideStyle, setNextSlideStyle] = useState({});

    useEffect(() => {
        setThumbnails(images);
        setCurrentSlideStyle({
            display: "block",
            backgroundImage: `url('${images[currentSlide]}')`,
        });

            setPreviousSlideStyle({
                display: "none"
            });

            setNextSlideStyle({
                display:"none"
            });

        const loop = setInterval(() => {
            if (currentSlide === images.length -1) {
                setCurrentSlide(0);
            } else {
                setCurrentSlide(currentSlide+1);
            }
        }, interval);

        return () => clearInterval(loop); 
        }, [images, currentSlide]);

    function previous(){
        if(currentSlide>0){
            setCurrentSlide(currentSlide-1);
        }else{
            setCurrentSlide(thumbnails.length-1);
        }
    }

    function next(){
        if(currentSlide === thumbnails.length-1){
            setCurrentSlide(0);
        }else{
            setCurrentSlide(currentSlide+1);
        }
    }

    return (
// {/* 
//     Slideshow with project images
//     Source: https://www.w3schools.com/howto/howto_js_slideshow.asp
//      */}
     <div className="projects-slider">
        <article>
            <a href="projects.html">
                <h2 class="slideshow-button">Projects</h2>
                <div className="slide-holder ">
                    <section className="slideshow current-slide fader">
                        <div style={currentSlideStyle} className="slide-thumbnail"></div>
                    </section>
                </div>

              
            </a>
            <div className="slideshow-controller">
                    <a className="prev" onClick={previous}>&#10094;</a>
                    <a className="next" onClick={next}>&#10095;</a>
                </div>
        </article>
    </div>
    //  <div class="projects-slider">
    //  <article class="slideshow-container" onclick="location.href='projects.html';">
    //      <a href="projects.html">
    //          <h2 class="slideshow-button">Projects</h2>

    //          {/* Full-width images with number and caption text */}
    //          <div class="slideshow fader">
    //              <img id="slideshow-img" src={slideImg0} height="400" alt="Abstract JPEG image generated using JPEG glitching."/>
    //          </div>

    //          <div class="slideshow fader">
    //              <img id="slideshow-img" src={slideImg0} height="400" alt="Abstract JPEG image generated using JPEG glitching."/>
    //          </div>
             
    //          <div class="slideshow fader">
    //              <img id="slideshow-img" src={slideImg0} height="400" alt="Abstract JPEG image generated using JPEG glitching."/>
    //          </div>
    //      </a>
    //  </article>
    //  {/* Next and previous buttons */}
    //  <a class="prev" onclick={previous}>&#10094;</a>
    //  <a class="next" onclick={next}>&#10095;</a>
//  </div>
    )
}

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    // let slides = document.getElementsByClassName("slideshow");
let slides = [slideImg0, slideImg1, slideImg2];
    let slide = $('#slideshow-img');
    console.log("slides", slides[0]);
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    // for (i = 0; i < slides.length; i++) {
        slide.src = slides[slideIndex];
        console.log('changed src to ', slides[slideIndex]);
        // slides[i].style.display = "none";
    // }
    // slides[slideIndex - 1].style.display = "block";
}

let slideIndex = 1;

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// document.addEventListener('DOMContentLoaded', function () {
//     // function updateSlideImage(image) {
//     //     console.log("updating slide image to", image.url);
//     //     let slideShowDiv = $("#slideshow-image");
//     //     slideShowDiv.css("background-image", `url(${image.url})`);
//     // }

//     showSlides(slideIndex);

//     window.setInterval(() => {
//         console.log("plus slide 1");
//         plusSlides(1);
//     }, 5000);
// });

export default Home;

