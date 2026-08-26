'use client';

import React from 'react';
import Link from 'next/link';

export default function TestimonialsPage() {
  return (
    <main className="o-hidden">
                {/* Header Banner */}
                <header className="pg-hero section-padding">
                    <div className="container">
                        <div className="row mb-60 justify-content-center">
                            <div className="col-md-5 text-center">
                                <div className="section-subtitle">What Clients Say</div>
                                <div className="section-title">What our travelers say <i>about us</i></div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="height1">
                            <div className="radius-mask">
                                <div className="bg-img height2" data-background="/assets/img/destination/d.jpg" data-speed="0.5" data-lag="0"></div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Testimonials */}
                <section id="testimonials1" className="testimonials1 section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 duru-slideinleft">
                                <div className="item mt-10">
                                    <div className="info valign">
                                        <div className="full-width"> <span className="quote-icon"><img src="/assets/img/quote.svg" alt="" /></span>
                                            <p>This tour was a truly memorable experience. Africa’s nature and shared memories were amazing.</p>
                                            <h6>Africa Tour Group</h6>
                                            <div className="icons"> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> </div>
                                            <div className="review-title">
                                                <div className="img">
                                                    <div className="img-inner"><img src="/assets/img/team/g1.jpg" alt="" /></div>
                                                    <div className="quote-icon"> <i className="fa-solid fa-quote-left"></i> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 duru-slide-up">
                                <div className="item mt-10">
                                    <div className="info valign">
                                        <div className="full-width"> <span className="quote-icon"><img src="/assets/img/quote.svg" alt="" /></span>
                                            <p>This tour was a memorable experience. Canada’s landscapes and shared moments were incredible.</p>
                                            <h6>Canada Tour Group</h6>
                                            <div className="icons"> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> </div>
                                            <div className="review-title">
                                                <div className="img">
                                                    <div className="img-inner"><img src="/assets/img/team/g2.jpg" alt="" /></div>
                                                    <div className="quote-icon"> <i className="fa-solid fa-quote-left"></i> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 duru-slide-right">
                                <div className="item mt-10">
                                    <div className="info valign">
                                        <div className="full-width"> <span className="quote-icon"><img src="/assets/img/quote.svg" alt="" /></span>
                                            <p>This tour was a memorable experience. Cappadocia’s scenery and shared moments were magical.</p>
                                            <h6>Cappadocia Tour</h6>
                                            <div className="icons"> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> </div>
                                            <div className="review-title">
                                                <div className="img">
                                                    <div className="img-inner"><img src="/assets/img/team/g3.jpg" alt="" /></div>
                                                    <div className="quote-icon"> <i className="fa-solid fa-quote-left"></i> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center mt-60">
                                <div className="section-info">
                                    <div className="tag duru-rotate-on-scroll"><i className="icon fa-solid fa-quote-left"></i></div>
                                    <div className="desc"><span className="text-decoration-line-bottom">WAYOUTS</span> is trusted by 1,000+ travelers across the globe.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
  );
}
