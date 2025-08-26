import React from 'react'
import ArroUp from '../SvgImages/ArroUp'

export default function Services() {
    return (
        <>
            <div className="service-secion p-8" id='service'>
                <div className="container">
                    <div className="section-title">
                        <p className='top-title' data-aos="fade-up"><img src="/images/star.svg" alt="" /><span></span>Services<span></span><img src="/images/star.svg" alt="" /></p>
                        <h2 data-aos="fade-up">Helping Your Business Grow with Design & Development</h2>
                    </div>
                    <div className="service-list">
                        <ul>
                            <li data-aos="fade-up">
                                <div className='left-col'>
                                    <div className="service-title">
                                        <div className="count-no">1</div>
                                        <h3>Website Design & Development</h3>
                                    </div>
                                    <div className="discription">
                                        Custom, modern, and responsive websites built with HTML, CSS, SCSS, JavaScript, and React — optimized for performance and cross-browser compatibility.
                                    </div>
                                </div>
                                <div className="arrow">
                                    <ArroUp />
                                </div>
                            </li>
                             <li data-aos="fade-up">
                                <div className='left-col'>
                                    <div className="service-title">
                                        <div className="count-no">2</div>
                                        <h3>Responsive & Mobile App Design →</h3>
                                    </div>
                                    <div className="discription">
                                        Designing seamless, mobile-friendly web applications and layouts that adapt beautifully to every screen size and device.
                                    </div>
                                </div>
                                <div className="arrow">
                                    <ArroUp />
                                </div>
                            </li >
                             <li data-aos="fade-up">
                                <div className='left-col'>
                                    <div className="service-title">
                                        <div className="count-no">3</div>
                                        <h3>Website Redesign & Optimization →</h3>
                                    </div>
                                    <div className="discription">
                                      Transforming outdated websites into modern, visually appealing, and performance-optimized digital experiences.
                                    </div>
                                </div>
                                <div className="arrow">
                                    <ArroUp />
                                </div>
                            </li>
                            <li data-aos="fade-up">
                                <div className='left-col'>
                                    <div className="service-title">
                                        <div className="count-no">4</div>
                                        <h3>Landing Page & Portfolio Design →</h3>
                                    </div>
                                    <div className="discription">
                                        High-converting landing pages and professional portfolio websites that highlight your brand and drive engagement.
                                    </div>
                                </div>
                                <div className="arrow">
                                    <ArroUp />
                                </div>
                            </li>
                            <li data-aos="fade-up">
                                <div className='left-col'>
                                    <div className="service-title">
                                        <div className="count-no">5</div>
                                        <h3>Style Guide & Branding Layouts →</h3>
                                    </div>
                                    <div className="discription">
                                       Creating consistent typography, color palettes, and layout systems that strengthen brand identity across platforms.
                                    </div>
                                </div>
                                <div className="arrow">
                                    <ArroUp />
                                </div>
                            </li>
                            <li data-aos="fade-up">
                                <div className='left-col'>
                                    <div className="service-title">
                                        <div className="count-no">6</div>
                                        <h3>Email Template Design →</h3>
                                    </div>
                                    <div className="discription">
                                       Responsive, brand-consistent email designs crafted to boost marketing campaigns and audience engagement.
                                    </div>
                                </div>
                                <div className="arrow">
                                    <ArroUp />
                                </div>
                            </li>
                            <li data-aos="fade-up">
                                <div className='left-col'>
                                    <div className="service-title">
                                        <div className="count-no">7</div>
                                        <h3>Cross-Browser Compatibility Fixing →</h3>
                                    </div>
                                    <div className="discription">
                                       Ensuring seamless website performance across all major browsers, including Chrome, Safari, Firefox, and Edge.
                                    </div>
                                </div>
                                <div className="arrow">
                                    <ArroUp />
                                </div>
                            </li>
                            <li data-aos="fade-up">
                                <div className='left-col'>
                                    <div className="service-title">
                                        <div className="count-no">8</div>
                                        <h3>Design for CMS Platforms →</h3>
                                    </div>
                                    <div className="discription">
                                      Creating tailored, user-friendly designs for popular CMS platforms like WordPress, Shopify, and Webflow — ensuring seamless content management and scalability.
                                    </div>
                                </div>
                                <div className="arrow">
                                    <ArroUp />
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
