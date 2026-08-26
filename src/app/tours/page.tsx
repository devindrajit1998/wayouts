'use client';

import React from 'react';
import Link from 'next/link';

export default function ToursPage() {
  return (
    <main className="o-hidden">
                {/* Header Banner */}
                <header className="pg-hero section-padding">
                    <div className="container">
                        <div className="row mb-60 justify-content-center">
                            <div className="col-md-6 text-center">
                                <div className="section-subtitle">Explore Our Tours</div>
                                <div className="section-title">Discover <i>unforgettable journeys</i> across the world</div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="height1">
                            <div className="radius-mask">
                                <div className="bg-img height2" data-background="/assets/img/destination/02.jpg" data-speed="0.5" data-lag="0"></div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Tours */}
                <section className="tours section-padding">
                    <div className="container">
                        <div className="row tours-isotope">
                            {/* Item */}
                            <div className="col-md-6 items">
                                <div className="mb-30">
                                    <div className="section-subtitle">Best Tour Packages</div>
                                    <div className="section-title">Experience the best<br />travel tours<i>.</i></div>
                                </div>
                            </div>
                            {/* Item */}
                            <div className="col-md-6 items">
                                <div className="item">
                                    <div className="tour-media"> <img src="/assets/img/destination/01.jpg" alt="" className="height2" data-speed="0.8" data-lag="0" />
                                        <div className="clicko"><a href="/tour-details"><span className="icon-wrap"><span className="icon"><i className="ti-arrow-top-right"></i></span></span></a></div>
                                    </div>
                                    <div className="tour-content">
                                        <div className="tour-header">
                                            <div className="tour-location"> <i className="ti-location-pin"></i> <span>Maldives, Asia</span> </div>
                                            <h4 className="tour-title">Maldives Paradise</h4>
                                        </div>
                                        <div className="tour-info">
                                            <div className="tour-duration">
                                                <div className="tour-icon"> <i className="fa-light fa-calendar"></i> </div>
                                                <div className="tour-meta"> <small>Duration</small> <span>6 Days - 5 Nights</span> </div>
                                            </div>
                                        </div>
                                        <div className="tour-price-wrap">
                                            <div className="tour-rating"> <i className="fa-solid fa-star"></i> 4.9 </div>
                                            <div className="tour-price"> $499 <span>/ Traveler</span> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Item */}
                            <div className="col-md-6 items">
                                <div className="item">
                                    <div className="tour-media"> <img src="/assets/img/destination/03.jpg" alt="" className="height2" data-speed="0.8" data-lag="0" />
                                        <div className="clicko"><a href="/tour-details"><span className="icon-wrap"><span className="icon"><i className="ti-arrow-top-right"></i></span></span></a></div>
                                    </div>
                                    <div className="tour-content">
                                        <div className="tour-header">
                                            <div className="tour-location"> <i className="ti-location-pin"></i> <span>Dubai, UAE</span> </div>
                                            <h4 className="tour-title">Dubai Luxury Journey</h4>
                                        </div>
                                        <div className="tour-info">
                                            <div className="tour-duration">
                                                <div className="tour-icon"> <i className="fa-light fa-calendar"></i> </div>
                                                <div className="tour-meta"> <small>Duration</small> <span>5 Days - 4 Nights</span> </div>
                                            </div>
                                        </div>
                                        <div className="tour-price-wrap">
                                            <div className="tour-rating"> <i className="fa-solid fa-star"></i> 4.8 </div>
                                            <div className="tour-price"> $699 <span>/ Traveler</span> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Item */}
                            <div className="col-md-6 items">
                                <div className="item">
                                    <div className="tour-media"> <img src="/assets/img/destination/02.jpg" alt="" className="height2" data-speed="0.8" data-lag="0" />
                                        <div className="clicko"><a href="/tour-details"><span className="icon-wrap"><span className="icon"><i className="ti-arrow-top-right"></i></span></span></a></div>
                                    </div>
                                    <div className="tour-content">
                                        <div className="tour-header">
                                            <div className="tour-location"> <i className="ti-location-pin"></i> <span>Banff, Canada</span> </div>
                                            <h4 className="tour-title">Canadian Nature Tour</h4>
                                        </div>
                                        <div className="tour-info">
                                            <div className="tour-duration">
                                                <div className="tour-icon"> <i className="fa-light fa-calendar"></i> </div>
                                                <div className="tour-meta"> <small>Duration</small> <span>7 Days - 6 Nights</span> </div>
                                            </div>
                                        </div>
                                        <div className="tour-price-wrap">
                                            <div className="tour-rating"> <i className="fa-solid fa-star"></i> 4.9 </div>
                                            <div className="tour-price"> $799 <span>/ Traveler</span> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Item */}
                            <div className="col-md-6 items">
                                <div className="item">
                                    <div className="tour-media"> <img src="/assets/img/destination/05.jpg" alt="" className="height2" data-speed="0.8" data-lag="0" />
                                        <div className="clicko"><a href="/tour-details"><span className="icon-wrap"><span className="icon"><i className="ti-arrow-top-right"></i></span></span></a></div>
                                    </div>
                                    <div className="tour-content">
                                        <div className="tour-header">
                                            <div className="tour-location"> <i className="ti-location-pin"></i> <span>Santorini, Greece</span> </div>
                                            <h4 className="tour-title">Greek Paradise Tour</h4>
                                        </div>
                                        <div className="tour-info">
                                            <div className="tour-duration">
                                                <div className="tour-icon"> <i className="fa-light fa-calendar"></i> </div>
                                                <div className="tour-meta"> <small>Duration</small> <span>7 Days - 6 Nights</span> </div>
                                            </div>
                                        </div>
                                        <div className="tour-price-wrap">
                                            <div className="tour-rating"> <i className="fa-solid fa-star"></i> 4.8 </div>
                                            <div className="tour-price"> $899 <span>/ Traveler</span> </div>
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
