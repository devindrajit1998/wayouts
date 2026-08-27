'use client';

import React from 'react';
import Link from 'next/link';

export default function HomeAboutSection() {
  return (
    <div className="about2 section-padding bg-white" data-background="/assets/img/bg.html">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about2-img">
              <div className="main-img img-cover duru-slide-down">
                <img src="/assets/img/a4.jpg" alt="Wayouts Agency" />
              </div>
              <div className="main-img img-cover duru-slide-up">
                <img src="/assets/img/a2.jpg" alt="Wayouts Destinations" />
              </div>
            </div>
          </div>
          <div className="col-md-5 offset-md-1">
            <div className="section-subtitle wow fadeInRight">Wayouts travel</div>
            <div className="section-title d-rotate wow">
              <span className="rotate-text">Discover the world <i>with our guide</i></span>
            </div>
            <p className="wow fadeInRight" data-wow-delay=".3s">
              Discover the world with comfort and unforgettable experiences. Let us guide your next adventure!
            </p>
            <ul className="listo mb-30">
              <li className="wow fadeInUp" data-wow-delay=".1s">
                <i className="fa-pro fa-light fa-earth-americas"></i> Global Destinations
              </li>
              <li className="wow fadeInUp" data-wow-delay=".2s">
                <i className="fa-pro fa-light fa-route"></i> Expert Guidance
              </li>
              <li className="wow fadeInUp" data-wow-delay=".3s">
                <i className="fa-pro fa-light fa-shield-heart"></i> Safe Travels
              </li>
              <li className="wow fadeInUp" data-wow-delay=".4s">
                <i className="fa-pro fa-light fa-hotel"></i> Luxury Lodging
              </li>
            </ul>
            <div className="customers d-flex align-items-center">
              <div className="c-img d-flex align-items-center wow fadeInUp" data-wow-delay=".8s">
                <ul className="d-flex duru-mask-reveal-horizontal">
                  <li><img src="/assets/img/team/tst1.jpg" alt="" /></li>
                  <li><img src="/assets/img/team/tst2.jpg" alt="" /></li>
                  <li><img src="/assets/img/team/tst3.jpg" alt="" /></li>
                </ul>
                <div className="c-text headline">
                  <h3><b className="counter">9,500</b>+</h3>
                  <span>Positive Reviews</span>
                </div>
              </div>
              <Link href="/about" className="butn-arrow wow fadeInUp" data-wow-delay=".8s">
                <span className="btn-text">Read more</span>
                <span className="arrow-wrap">
                  <span className="arrow-inner">
                    <i className="ti-arrow-right"></i>
                    <i className="ti-arrow-right"></i>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-text-style duru-slide-right">Wayouts</div>
    </div>
  );
}
