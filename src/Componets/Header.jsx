import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const [isActive, setIsActive] = useState(false);
    const [leftMenu, setLeftMenu] = useState(false);
    const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down → hide header
      setShowHeader(false);
    } else {
      // Scrolling up → show header
      setShowHeader(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

    
    return (
        <>
            <header className={`header ${showHeader ? "show" : "hide"}`}>
                <div className="container">
                    <div className="h-row">
                        <div className="logo">
                            <div className="main-text">
                                <img src="/images/k-logo.png" alt="" /><span>portfolio</span>
                                {/* <img src="/images/k.png" alt="" /> */}
                            </div>
                        </div>
                        <div className={`menu-list ${leftMenu ? "active" : ""}`}>
                             <div className="logo">
                                <img src="/images/k-logo.png" alt="" />
                                 <span></span>
                            </div>
                            <div className="close-btn" onClick={() => setLeftMenu(false)}><i className="fa-solid fa-xmark"></i></div>
                            <ul>
                                <li onClick={() => scrollToSection("home")}><Link href="##" >home</Link></li>
                                <li onClick={() => scrollToSection("about")}><Link href="##">about</Link></li>
                                <li onClick={() => scrollToSection("resume")}><Link href="##">resume</Link></li>
                                <li onClick={() => scrollToSection("portfolio")}><Link href="##">portfolio</Link></li>
                                <li onClick={() => scrollToSection("service")}><Link href="##">service</Link></li>
                            </ul>
                        </div>
                        <div className="toggle-btn" >
                            <div className="left-menu" onClick={() => setLeftMenu(true)}><i class="fa-solid fa-bars"></i>                            </div>
                            <div className="icon right-menu" onClick={() => setIsActive(true)}>
                                <img src="/images/bar-icon.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`side-menu ${isActive ? "active" : ""}`}>
                    <div className="top-row">
                        <div className="name-title">
                            <div className="logo"><img src="/images/k-logo.png" alt="" /></div>
                            <div className="name">Krupali Devani</div>
                        </div>
                        <div className="close-btn" onClick={() => setIsActive(false)}><i className="fa-solid fa-xmark"></i></div>
                    </div>
                    <div className="k-image">
                        <img src="/images/krupali.jpeg" alt="" />
                    </div>
                    <p className="about-text">
                        Hardworking Web Designer with 3 years of experience creating responsive websites and applications. Skilled in HTML, CSS, SCSS, JavaScript, and modern UI/UX principles, with expertise in wireframes, layouts, and custom designs. Strong focus on user engagement,
                        performance, and cross-platform compatibility.</p>
                    <div className="details-row">
                        <ul>
                            <li>
                                <h3>ADDRESS</h3>
                                <p>surat, Gujrat</p>
                            </li>
                            <li>
                                <h3>EMAIL</h3>
                                <p>krupalidevani324@gmail.com</p>
                            </li>
                            <li>
                                <h3>CALL NOW</h3>
                                <p>6351312671</p>
                            </li>
                        </ul>
                    </div>
                    <ul className="social-icon">
                        <li><Link to={"##"}><i className="fa-brands fa-skype"></i></Link></li>
                        <li><Link to={"##"}><i className="fa-brands fa-linkedin"></i></Link></li>
                        <li><Link to={"##"}><i className="fa-brands fa-instagram"></i></Link></li>
                        <li><Link to={"##"}><i className="fa-brands fa-facebook"></i></Link></li>
                    </ul>
                    
                </div>
            </header>

        </>
    )
}
