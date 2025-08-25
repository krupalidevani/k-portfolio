import React from 'react'
import ArroUp from '../SvgImages/ArroUp'
import { Link } from 'react-router-dom'

export default function Resume() {
    return (
        <>
            <div className="resume-section p-8" id="resume">
                <div className="container">
                    <div className="section-title">
                        <h2>Resume</h2>
                        <div className="content-row">
                            <div className="col">
                                <div className="inner-col">
                                    <h3>Summary</h3>
                                    <p>Frontend Developer with 3 years of experience in creating responsive, user-friendly websites using React, SCSS, and modern design practices. Skilled at building seamless UI/UX for startups and growing businesses.</p></div>

                                <div className="inner-col">
                                    <h3>Education</h3>
                                    <p>Bachelor of Computer Applications (BCA)</p>
                                    <p> Shree K.P. Dholakiya Infotech College, Amreli</p>
                                    <p> Graduated: August 2021</p>

                                </div>
                                <div className="inner-col mb-0">
                                    <h3>Technical Skills</h3>
                                    <ul className='skills'>
                                        <li><span>Frontend :</span> HTML5, CSS3, SCSS, JavaScript (ES6+), React.js, Next.js</li>
                                        <li><span>CMS & Platforms :</span> WordPress, Shopify, WooCommerce</li>
                                        <li><span>Animations :</span> AOS, GSAP,  CSS Animations</li>
                                        <li><span>Version Control :</span> Git, GitHub</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col">
                                <div className="inner-col mb-0">
                                    <h3>Professional Experience</h3>
                                    <p className='sub-title'><i>Flunzy Digital Pvt. Ltd. (formerly SourceNet IT Service Provider Pvt. Ltd.)<br />
                                        <span>2022 – Present</span></i> </p>
                                    <p className='dis'>💡 As a Web Designer with 3 years of professional experience, I specialize in creating modern, responsive, and user-focused websites. I combine design creativity with strong technical expertise to deliver visually appealing and high-performing digital experiences. My work spans across custom website design and development using WordPress, React, Next.js, and implementing engaging animations and interactive elements to enhance user engagement. I have successfully built diverse web solutions for clients from different industries, ensuring quality, performance, and innovation in every project.</p>
                                    <ul><li>Designed and developed responsive, user-friendly websites using HTML5, CSS3, JavaScript, SCSS, and React.</li>
                                        <li>Built and optimized modern layouts ensuring cross-browser compatibility and mobile responsiveness.</li>
                                        <li>Collaborated with developers and stakeholders to deliver custom web solutions aligned with client requirements.</li>
                                        <li>Contributed to brainstorming sessions, providing ideas for new features and innovative website designs.</li>
                                        <li>Ensured quality assurance and testing of website designs for accuracy, performance, and accessibility.</li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="cv-button">
                            <a
                                href="/krupali-resume.pdf"
                                download="Krupali_Resume.pdf"
                                className="download-button"
                            >
                                <span><i className="fa-solid fa-arrow-right"></i></span>
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
