import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <i class="fa-solid fa-arrow-right"></i>
        </div>
    );
}

// Custom Prev Arrow
function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <i class="fa-solid fa-arrow-left"></i>
        </div>
    );
}

export default function Portfolio() {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,      // enable autoplay
        autoplaySpeed: 3000, // delay between slides (ms)
        speed: 600,
        cssEase: "linear",   // "ease", "ease-in-out", or "linear" for smoothness
        responsive: [
            {
                breakpoint: 500, 
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className="poerfolio-section p-8" id="portfolio">
                <div className="container">
                    <div className="section-title" data-aos="fade-left">
                        <p><img src="/images/star.svg" alt="" /> Explore</p>
                        <h2>Recent Work <span>Portfolio</span></h2>
                    </div>
                    <div className="portfolio-list" data-aos="fade-up">

                        <Slider {...settings} className='demo'>
                            <div className="portfolio-card">
                                <div className="image">
                                    <div className="hover-div">
                                        <Link to={'##'} className="view-btn">View project</Link>
                                    </div>
                                    <img src="/images/portfolio/1.png" alt="" />
                                </div>
                                <p>Mobile app design</p>
                                <h2>LMS Digital Mobile Project</h2>
                            </div>
                            <div className="portfolio-card">
                                <div className="image">
                                   <div className="hover-div">
                                        <Link to={'##'} className="view-btn">View project</Link>
                                    </div>
                                    <img src="/images/portfolio/m4.png" alt="" />
                                </div>
                                <p>Website design</p>
                                <h2>LMS Digital Mobile Project</h2>
                            </div>
                          <div className="portfolio-card">
                                <div className="image">
                                    <div className="hover-div">
                                        <Link to={'##'} className="view-btn">View project</Link>
                                    </div>
                                    <img src="/images/portfolio/2.png" alt="" />
                                </div>
                                <p>Mobile app design</p>
                                <h2>LMS Digital Mobile Project</h2>
                            </div>
                            <div className="portfolio-card">
                                <div className="image">
                                   <div className="hover-div">
                                        <Link to={'##'} className="view-btn">View project</Link>
                                    </div>
                                    <img src="/images/portfolio/m2.png" alt="" />
                                </div>
                                <p>Website design</p>
                                <h2>LMS Digital Mobile Project</h2>
                            </div>
                            <div className="portfolio-card">
                                <div className="image">
                                    <div className="hover-div">
                                        <Link to={'##'} className="view-btn">View project</Link>
                                    </div>
                                    <img src="/images/portfolio/3.png" alt="" />
                                </div>
                                <p>Mobile app design</p>
                                <h2>LMS Digital Mobile Project</h2>
                            </div>
                            <div className="portfolio-card">
                                <div className="image">
                                   <div className="hover-div">
                                        <Link to={'##'} className="view-btn">View project</Link>
                                    </div>
                                    <img src="/images/portfolio/m3.png" alt="" />
                                </div>
                                 <p>Mobile App Design</p>
                                <h2>LMS Digital Mobile Project</h2>
                            </div>
                            <div className="portfolio-card">
                                <div className="image">
                                    <div className="hover-div">
                                        <Link to={'##'} className="view-btn">View project</Link>
                                    </div>
                                    <img src="/images/portfolio/4.png" alt="" />
                                </div>
                                <p>Mobile app design</p>
                                <h2>LMS Digital Mobile Project</h2>
                            </div>
                            <div className="portfolio-card">
                                <div className="image">
                                   <div className="hover-div">
                                        <Link to={'##'} className="view-btn">View project</Link>
                                    </div>
                                    <img src="/images/portfolio/m1.png" alt="" />
                                </div>
                                 <p>Mobile App Design</p>
                                <h2>LMS Digital Mobile Project</h2>
                            </div>
                            <div className="portfolio-card">
                                <div className="image">
                                    <div className="hover-div">
                                        <Link to={'##'} className="view-btn">View project</Link>
                                    </div>
                                    <img src="/images/portfolio/5.png" alt="" />
                                </div>
                                <p>Mobile app design</p>
                                <h2>LMS Digital Mobile Project</h2>
                            </div>
                            <div className="portfolio-card">
                                <div className="image">
                                   <div className="hover-div">
                                        <Link to={'##'} className="view-btn">View project</Link>
                                    </div>
                                    <img src="/images/portfolio/m8.png" alt="" />
                                </div>
                                <p>Mobile App Design</p>
                                <h2>LMS Digital Mobile Project</h2>
                            </div>
                            <div className="portfolio-card">
                                <div className="image">
                                    <div className="hover-div">
                                        <Link to={'##'} className="view-btn">View project</Link>
                                    </div>
                                    <img src="/images/portfolio/6.png" alt="" />
                                </div>
                                <p>Mobile app design</p>
                                <h2>LMS Digital Mobile Project</h2>
                            </div>
                            <div className="portfolio-card">
                                <div className="image">
                                   <div className="hover-div">
                                        <Link to={'##'} className="view-btn">View project</Link>
                                    </div>
                                    <img src="/images/portfolio/m3.png" alt="" />
                                </div>
                                 <p>Mobile App Design</p>
                                <h2>LMS Digital Mobile Project</h2>
                            </div>
                            <div className="portfolio-card">
                                <div className="image">
                                    <div className="hover-div">
                                        <Link to={'##'} className="view-btn">View project</Link>
                                    </div>
                                    <img src="/images/portfolio/7.png" alt="" />
                                </div>
                                <p>Mobile app design</p>
                                <h2>LMS Digital Mobile Project</h2>
                            </div>
                            <div className="portfolio-card">
                                <div className="image">
                                   <div className="hover-div">
                                        <Link to={'##'} className="view-btn">View project</Link>
                                    </div>
                                    <img src="/images/portfolio/m7.png" alt="" />
                                </div>
                                 <p>Mobile App Design</p>
                                <h2>LMS Digital Mobile Project</h2>
                            </div>
                           
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}
