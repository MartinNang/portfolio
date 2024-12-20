import React from 'react';
import { Link } from 'react-router';

// import linkedInLogo from './img/linkedin-svgrepo-com.svg';
// import gitHubLogo from './img/github-svgrepo-com.svg';
const linkedInLogo = '/img/linkedin-svgrepo-com.svg';
const gitHubLogo = '/img/github-svgrepo-com.svg';

const Footer = ({ name }) => {
    return (
        <footer class="footer">
            {/* Link to contact form */}
            <section class="contact">
                <h2>Get in touch!</h2>
                <div class="contact-form-body">
                    <span>Email: <a href="mailto:m.nangole@gmx.at">m.nangole@gmx.at</a></span>
                </div>
            </section>

            {/* Links to social media (LinkedIn, Instagram)
            Credits for icons: www.svgrepo.com  */}
            <div class="social-media-links-wrapper">
                <a href="https://www.linkedin.com/in/martin-nang-ole-60821643/">
                    <img src={linkedInLogo} width={30} alt="LinkedIn logo."/>
                </a>
                <a href="https://github.com/MartinNang">
                <img src={gitHubLogo} width={30} alt="GitHub logo."/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;