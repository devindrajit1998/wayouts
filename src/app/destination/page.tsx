'use client';

import React from 'react';
import Link from 'next/link';

export default function DestinationPage() {
  return (
    <main className="o-hidden">
                {/* Header Banner */}
                <header className="pg-hero section-padding">
                    <div className="container">
                        <div className="row mb-60 justify-content-center">
                            <div className="col-md-6 text-center">
                                <div className="section-subtitle">Explore Our Tours</div>
                                <div className="section-title">Explore the world's <i>best destinations</i></div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="height1">
                            <div className="radius-mask">
                                <div className="bg-img height2" data-background="/assets/img/destination/06.jpg" data-speed="0.5" data-lag="0"></div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Scrolling */}
                <div className="scrolling scrolling-ticker" data-scroll-index="4">
                    <div className="wrapper feather-shadow2">
                        <div className="content">
                            <span><i className="fa-regular fa-asterisk mr-30"></i>Flight Booking</span>
                            <span><i className="fa-regular fa-asterisk mr-30"></i>Hotel Reservations</span>
                            <span><i className="fa-regular fa-asterisk mr-30"></i>Holiday Packages</span>
                            <span><i className="fa-regular fa-asterisk mr-30"></i>Visa Assistance</span>
                            <span><i className="fa-regular fa-asterisk mr-30"></i>Airport Transfers</span>
                            <span><i className="fa-regular fa-asterisk mr-30"></i>Travel Insurance</span>
                            <span><i className="fa-regular fa-asterisk mr-30"></i>Cruise Tours</span>
                            <span><i className="fa-regular fa-asterisk mr-30"></i>City Tours</span>
                            <span><i className="fa-regular fa-asterisk mr-30"></i>Adventure Trips</span>
                            <span><i className="fa-regular fa-asterisk mr-30"></i>Honeymoon Packages</span>
                            <span><i className="fa-regular fa-asterisk mr-30"></i>Group Travel</span>
                            <span><i className="fa-regular fa-asterisk mr-30"></i>Business Travel</span>
                            <span><i className="fa-regular fa-asterisk mr-30"></i>Car Rentals</span>
                            <span><i className="fa-regular fa-asterisk mr-30"></i>Custom Itineraries</span>
                        </div>
                        <div className="content">
                            <span><i className="fa-regular fa-asterisk mr-30"></i>Flight Booking</span>
                            <span><i className="fa-regular fa-asterisk mr-30"></i>Hotel Reservations</span>
                            <span><i className="fa-regular fa-asterisk mr-30"></i>Holiday Packages</span>
                            <span><i className="fa-regular fa-asterisk mr-30"></i>Visa Assistance</span>
                            <span><i className="fa-regular fa-asterisk mr-30"></i>Airport Transfers</span>
                            <span><i className="fa-regular fa-asterisk mr-30"></i>Travel Insurance</span>
                            <span><i className="fa-regular fa-asterisk mr-30"></i>Cruise Tours</span>
                            <span><i className="fa-regular fa-asterisk mr-30"></i>City Tours</span>
                            <span><i className="fa-regular fa-asterisk mr-30"></i>Adventure Trips</span>
                            <span><i className="fa-regular fa-asterisk mr-30"></i>Honeymoon Packages</span>
                            <span><i className="fa-regular fa-asterisk mr-30"></i>Group Travel</span>
                            <span><i className="fa-regular fa-asterisk mr-30"></i>Business Travel</span>
                            <span><i className="fa-regular fa-asterisk mr-30"></i>Car Rentals</span>
                            <span><i className="fa-regular fa-asterisk mr-30"></i>Custom Itineraries</span>
                        </div>
                    </div>
                </div>
                {/* Destinations */}
                <div className="destination section-padding pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 mb-60">
                                <div className="item transition-inner-all"> <img src="/assets/img/destination/a.jpg" className="img-fluid" alt="" />
                                    <div className="cont hover">
                                        <div className="wrap"> <span className="title">Greece</span>
                                            <div className="link">
                                                <a href="/tour-details">
                                                    <div className="category">4+ Tour Packages</div><i className="fa-light fa-arrow-right-long"></i>
                                                </a>
                                            </div>
                                            <div className="overlay"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 mb-60">
                                <div className="item transition-inner-all"> <img src="/assets/img/destination/d.jpg" className="img-fluid" alt="" />
                                    <div className="cont hover">
                                        <div className="wrap"> <span className="title">Egypt</span>
                                            <div className="link">
                                                <a href="/tour-details">
                                                    <div className="category">3+ Tour Packages</div><i className="fa-light fa-arrow-right-long"></i>
                                                </a>
                                            </div>
                                            <div className="overlay"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 mb-60">
                                <div className="item transition-inner-all"> <img src="/assets/img/destination/c.jpg" className="img-fluid" alt="" />
                                    <div className="cont hover">
                                        <div className="wrap"> <span className="title">Thailand</span>
                                            <div className="link">
                                                <a href="/tour-details">
                                                    <div className="category">7+ Tour Packages</div><i className="fa-light fa-arrow-right-long"></i>
                                                </a>
                                            </div>
                                            <div className="overlay"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 mb-60">
                                <div className="item transition-inner-all"> <img src="/assets/img/destination/e.jpg" className="img-fluid" alt="" />
                                    <div className="cont hover">
                                        <div className="wrap"> <span className="title">Iceland</span>
                                            <div className="link">
                                                <a href="/tour-details">
                                                    <div className="category">4+ Tour Packages</div><i className="fa-light fa-arrow-right-long"></i>
                                                </a>
                                            </div>
                                            <div className="overlay"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 mb-60">
                                <div className="item transition-inner-all"> <img src="/assets/img/destination/b.jpg" className="img-fluid" alt="" />
                                    <div className="cont hover">
                                        <div className="wrap"> <span className="title">South Africa</span>
                                            <div className="link">
                                                <a href="/tour-details">
                                                    <div className="category">6+ Tour Packages</div><i className="fa-light fa-arrow-right-long"></i>
                                                </a>
                                            </div>
                                            <div className="overlay"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 mb-60">
                                <div className="item transition-inner-all"> <img src="/assets/img/destination/f.jpg" className="img-fluid" alt="" />
                                    <div className="cont hover">
                                        <div className="wrap"> <span className="title">Maldives</span>
                                            <div className="link">
                                                <a href="/tour-details">
                                                    <div className="category">6+ Tour Packages</div><i className="fa-light fa-arrow-right-long"></i>
                                                </a>
                                            </div>
                                            <div className="overlay"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
  );
}
