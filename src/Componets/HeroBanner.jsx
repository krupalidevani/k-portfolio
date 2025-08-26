import React from 'react'
import ArroUp from '../SvgImages/ArroUp'

export default function HeroBanner() {
    return (
        <>
            <div className="hero-section p-8" id='home'>
                <div className="scroll-text"><span>Scroll down</span><img src="/images/scroll-down.webp" alt="" /></div>
                <div className="container">
                    <div className="hero-content" data-aos="fade-up">
                        <div>
                            <div className="sub-title">Helping Brands Worldwide with Creative Web Design (Available for Freelance) <ArroUp /></div>
                            <h1><span>Digital Experience </span><br />
                                <span className='designer-text' data-text="Designer">Designer</span></h1>
                            <div className="video-play">
                                <ArroUp />
                                <div className="play-btn">
                                    <i class="fa-solid fa-play"></i>
                                </div>
                            </div>
                        </div>
                        <div class="circle-dot">
                            <div class="step1">
                                <div class="circles">
                                    <div class="circle"></div>
                                </div>
                                <div class="circles">
                                    <div class="circle"></div>
                                </div>
                                <div class="circles">
                                    <div class="circle"></div>
                                </div>
                                <div class="circles">
                                    <div class="circle"></div>
                                </div>
                                <div class="circles">
                                    <div class="circle"></div>
                                </div>
                                <div class="circles">
                                    <div class="circle"></div>
                                </div>
                                <div class="circles">
                                    <div class="circle"></div>
                                </div>
                                <div class="circles">
                                    <div class="circle"></div>
                                </div>

                            </div>
                            <div class="step2">
                                <div class="circles">
                                    <div class="circle"></div>
                                </div>
                                <div class="circles">
                                    <div class="circle"></div>
                                </div>
                                <div class="circles">
                                    <div class="circle"></div>
                                </div>
                                <div class="circles">
                                    <div class="circle"></div>
                                </div>
                                <div class="circles">
                                    <div class="circle"></div>
                                </div>
                                <div class="circles">
                                    <div class="circle"></div>
                                </div>
                                <div class="circles">
                                    <div class="circle"></div>
                                </div>
                                <div class="circles">
                                    <div class="circle"></div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="scroll-text right"><span>Scroll down</span><img src="/images/scroll-down.webp" alt="" /></div>
            </div>
        </>
    )
}
