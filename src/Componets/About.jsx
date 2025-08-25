import React, { useEffect, useRef } from 'react'
import CricleButtom from '../SvgImages/CricleButtom'
import Typed from 'typed.js';

export default function About() {
   const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Krupali.", "Web Designer.", "Freelanceer."],
      typeSpeed: 200,
      backSpeed: 150,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy(); // cleanup when component unmounts
    };
  }, []);
    return (
        <>
            <div className="about-section p-8" id='about'>
                {/* <div className="top-img animate-img">
                    <CricleButtom />
                </div> */}
                 <div className="bottom-img animate-img">
                    <CricleButtom />
                </div>
                <div className="container">
                    <div className="about-row">
                        <div className="image">
                            <img src="/images/t3.jpg" alt="" />
                            {/* <img src="/images/krupali.jpeg" alt="" /> */}
                        </div>
                        <div className="about-content">
                            <h2>Hello,<br /> I’m <span ref={typedElement}>Krupali</span> </h2>
                            <div className="sub-title">Creating compelling, user-friendly designs that bring brands to life.</div>
                            <div className="about-list">
                                <ul>
                                    <li>
                                        <h3><i class="fa-solid fa-check-double"></i>Name<span>:</span></h3>
                                        <p>Krupali Devani</p>
                                    </li>
                                    <li>
                                        <h3><i class="fa-solid fa-check-double"></i>Email<span>:</span></h3>
                                        <p>krupalidevani324@gmail.com</p>
                                    </li>
                                    <li>
                                        <h3><i class="fa-solid fa-check-double"></i>Portfolio<span>:</span></h3>
                                        <p>www.example.com</p>
                                    </li>
                                    <li>
                                        <h3><i class="fa-solid fa-check-double"></i>Freelance<span>:</span></h3>
                                        <p>Available</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="about-me">
                                <h3>About me</h3>
                                <p>“I’m a Web Designer with 3 years of experience, specializing in creating intuitive, visually engaging, and user-centric designs. I enjoy transforming complex ideas into seamless digital experiences with a strong focus on clean design, animations, and usability. My goal is to design interfaces that are not only aesthetically appealing but also highly functional.”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
