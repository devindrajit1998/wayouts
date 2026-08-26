'use client';

import React from 'react';
import Link from 'next/link';

export default function TeamPage() {
  return (
    <main className="o-hidden">
                {/* Header Banner */}
                <header className="pg-hero section-padding">
                    <div className="container">
                        <div className="row mb-60 justify-content-center">
                            <div className="col-md-5 text-center">
                                <div className="section-subtitle">Our Travel Experts</div>
                                <div className="section-title">Meet the experts behind <i>every journey</i></div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="height1">
                            <div className="radius-mask">
                                <div className="bg-img height2" data-background="/assets/img/destination/b.jpg" data-speed="0.5" data-lag="0"></div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Team */}
                <section className="team section-padding">
                    <div className="bg-text-style3 duru-slide-up">Experts</div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center mb-30">
                                <div className="section-subtitle wow fadeInRight">Travel Advisors</div>
                                <div className="section-title d-rotate wow"><span className="rotate-text">WAYOUTS Team</span></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="swiper team-slider">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="item">
                                                <div className="wrapper">
                                                    <div className="img"><img src="/assets/img/team/1.jpg" className="img-fluid" alt="" /></div>
                                                    <div className="icon"> <a href="/team-details" className="arrow"><span className="fa-solid fa-info default-icon"></span><span className="ti-arrow-top-right hover-icon"></span></a></div>
                                                </div>
                                                <div className="text">
                                                    <h4 className="name">Jason Walker</h4>
                                                    <h6 className="position">Adventure Specialist</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="item">
                                                <div className="wrapper">
                                                    <div className="img"><img src="/assets/img/team/2.jpg" className="img-fluid" alt="" /></div>
                                                    <div className="icon"> <a href="/team-details" className="arrow"><span className="fa-solid fa-info default-icon"></span><span className="ti-arrow-top-right hover-icon"></span></a></div>
                                                </div>
                                                <div className="text">
                                                    <h4 className="name">Mia Taylor</h4>
                                                    <h6 className="position">Customer Success Manager</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="item">
                                                <div className="wrapper">
                                                    <div className="img"><img src="/assets/img/team/3.jpg" className="img-fluid" alt="" /></div>
                                                    <div className="icon"> <a href="/team-details" className="arrow"><span className="fa-solid fa-info default-icon"></span><span className="ti-arrow-top-right hover-icon"></span></a></div>
                                                </div>
                                                <div className="text">
                                                    <h4 className="name">Frank Mitchell</h4>
                                                    <h6 className="position">Operations Director</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="item">
                                                <div className="wrapper">
                                                    <div className="img"><img src="/assets/img/team/4.jpg" className="img-fluid" alt="" /></div>
                                                    <div className="icon"> <a href="/team-details" className="arrow"><span className="fa-solid fa-info default-icon"></span><span className="ti-arrow-top-right hover-icon"></span></a></div>
                                                </div>
                                                <div className="text">
                                                    <h4 className="name">Jesica Brown</h4>
                                                    <h6 className="position">Travel Designer</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
  );
}
