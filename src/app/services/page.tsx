'use client';

import React from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="o-hidden">
                {/* Header Banner */}
                <header className="pg-hero section-padding">
                    <div className="container">
                        <div className="row mb-60 justify-content-center">
                            <div className="col-md-6 text-center">
                                <div className="section-subtitle">Premium Travel Services</div>
                                <div className="section-title">Discover services that make <i>travel effortless</i></div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="height1">
                            <div className="radius-mask">
                                <div className="bg-img height2" data-background="/assets/img/destination/07.jpg" data-speed="0.5" data-lag="0"></div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Services */}
                <section className="services section-padding">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <div className="item mb-25 duru-slide-right"> <a href="/service-details"><span className="arrow fa-thin fa-arrow-up-right"></span></a>
                                    <div className="icon"><i className="fa-thin fa-route"></i></div>
                                    <h5>Custom Tour Packages</h5>
                                    <p>Personalized travel plans tailored to your interests and budget.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="item mb-25 duru-slide-right"> <a href="/service-details"><span className="arrow fa-thin fa-arrow-up-right"></span></a>
                                    <div className="icon"><i className="fa-thin fa-plane-departure"></i></div>
                                    <h5>Flight Booking</h5>
                                    <p>Fast and secure flight reservations at the best available prices.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="item mb-25 duru-slide-right"> <a href="/service-details"><span className="arrow fa-thin fa-arrow-up-right"></span></a>
                                    <div className="icon"><i className="fa-thin fa-hotel"></i></div>
                                    <h5>Hotel & Accommodation</h5>
                                    <p>Comfortable and premium accommodation options worldwide.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="item mb-25 duru-slide-left"> <a href="/service-details"><span className="arrow fa-thin fa-arrow-up-right"></span></a>
                                    <div className="icon"><i className="fa-thin fa-passport"></i></div>
                                    <h5>Visa Assistance</h5>
                                    <p>Professional support for all your travel visa procedures.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="item mb-25 duru-slide-left"> <a href="/service-details"><span className="arrow fa-thin fa-arrow-up-right"></span></a>
                                    <div className="icon"><i className="fa-thin fa-van-shuttle"></i></div>
                                    <h5>Transfer Services</h5>
                                    <p>Reliable airport and city transfer solutions for stress-free travel.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="item mb-25 duru-slide-left"> <a href="/service-details"><span className="arrow fa-thin fa-arrow-up-right"></span></a>
                                    <div className="icon"><i className="fa-thin fa-headset"></i></div>
                                    <h5>24/7 Customer Support</h5>
                                    <p>Dedicated support available anytime during your journey.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center mt-30 duru-slide-right">
                                <div className="section-info">
                                    <div className="tag duru-rotate-on-scroll"><i className="icon fa-thin fa-plane-departure"></i></div>
                                    <div className="desc"><span className="text-decoration-line-bottom">WAYOUTS</span> transforms journeys into unforgettable experiences.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
  );
}
