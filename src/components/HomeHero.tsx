'use client';

import React, { useLayoutEffect, useRef } from 'react';
import Link from 'next/link';

export default function HomeHero() {
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // The legacy theme can leave inline GSAP state after a client-side
    // navigation. Restore the complete Home copy subtree before paint.
    const elements = hero.querySelectorAll<HTMLElement>(
      '.home-hero-copy, .home-hero-copy *, .home-hero-button, .home-hero-button *'
    );
    elements.forEach((element) => {
      element.style.removeProperty('opacity');
      element.style.removeProperty('visibility');
      element.style.removeProperty('transform');
      element.style.removeProperty('translate');
      element.style.removeProperty('scale');
      element.style.removeProperty('rotate');
      element.style.removeProperty('clip-path');
      element.style.removeProperty('display');
    });

    const container = hero.querySelector<HTMLElement>('.container');
    container?.style.removeProperty('opacity');
    container?.style.removeProperty('visibility');
    container?.style.removeProperty('transform');
  }, []);

  return (
    <header ref={heroRef} className="full-height valign">
      <div className="background bg-img" data-background="/assets/img/hero/pattern-bg.png"></div>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="cont" style={{ position: 'relative', zIndex: 10, opacity: 1, visibility: 'visible' }}>
              <h6 style={{ color: 'var(--clr-primary)', opacity: 1, visibility: 'visible' }}>Wayouts agency</h6>
              <h2 className="text-white" style={{ color: '#ffffff', opacity: 1, visibility: 'visible' }}>
                <span>Discover the world <i>with our guide.</i></span>
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.75)', opacity: 1, visibility: 'visible' }}>Turn your dream destinations into reality with our expert guidance. From hidden gems to iconic horizons, we create journeys tailored just for you.</p>
              <Link href="/tours" className="butn-arrow2" style={{ opacity: 1, visibility: 'visible', display: 'inline-flex' }}>
                <span className="btn-text">View tours</span>
                <span className="arrow-wrap">
                  <span className="arrow-inner">
                    <i className="ti-arrow-right"></i>
                    <i className="ti-arrow-right"></i>
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="flex main-marq">
              <div className="slide-vertical st1 mr-20">
                <div className="box">
                  <div className="img"><img src="/assets/img/a1.jpg" alt="" /></div>
                  <div className="img"><img src="/assets/img/a2.jpg" alt="" /></div>
                  <div className="img"><img src="/assets/img/a3.jpg" alt="" /></div>
                  <div className="img"><img src="/assets/img/a4.jpg" alt="" /></div>
                </div>
                <div className="box">
                  <div className="img"><img src="/assets/img/a1.jpg" alt="" /></div>
                  <div className="img"><img src="/assets/img/a2.jpg" alt="" /></div>
                  <div className="img"><img src="/assets/img/a3.jpg" alt="" /></div>
                  <div className="img"><img src="/assets/img/a4.jpg" alt="" /></div>
                </div>
              </div>
              <div className="slide-vertical st2">
                <div className="box">
                  <div className="img"><img src="/assets/img/destination/a.jpg" alt="" /></div>
                  <div className="img"><img src="/assets/img/destination/c.jpg" alt="" /></div>
                  <div className="img"><img src="/assets/img/destination/e.jpg" alt="" /></div>
                  <div className="img"><img src="/assets/img/destination/f.jpg" alt="" /></div>
                </div>
                <div className="box">
                  <div className="img"><img src="/assets/img/destination/a.jpg" alt="" /></div>
                  <div className="img"><img src="/assets/img/destination/c.jpg" alt="" /></div>
                  <div className="img"><img src="/assets/img/destination/e.jpg" alt="" /></div>
                  <div className="img"><img src="/assets/img/destination/f.jpg" alt="" /></div>
                </div>
              </div>
              <div className="slide-vertical st3 ml-20">
                <div className="box">
                  <div className="img"><img src="/assets/img/blog/1.jpg" alt="" /></div>
                  <div className="img"><img src="/assets/img/blog/2.jpg" alt="" /></div>
                  <div className="img"><img src="/assets/img/blog/3.jpg" alt="" /></div>
                  <div className="img"><img src="/assets/img/blog/4.jpg" alt="" /></div>
                </div>
                <div className="box">
                  <div className="img"><img src="/assets/img/blog/1.jpg" alt="" /></div>
                  <div className="img"><img src="/assets/img/blog/2.jpg" alt="" /></div>
                  <div className="img"><img src="/assets/img/blog/3.jpg" alt="" /></div>
                  <div className="img"><img src="/assets/img/blog/4.jpg" alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="star1"><img src="/assets/img/hero/star2.png" alt="" /></div>
      <div className="star2 duru-slide-right"><img src="/assets/img/hero/flight-down.png" alt="" /></div>
      <div className="star3"><img src="/assets/img/hero/flight-up.png" alt="" /></div>
      <div className="star4 duru-rotate-on-scroll"><img src="/assets/img/hero/bg-compass.png" alt="" /></div>
    </header>
  );
}
