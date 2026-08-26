'use client';

import React from 'react';
import Link from 'next/link';

interface ServiceItem {
  icon: string;
  title: string;
  link?: string;
  direction?: 'left' | 'right';
}

const defaultServices: ServiceItem[] = [
  { icon: 'fa-thin fa-earth-americas', title: 'Hidden Places', direction: 'left' },
  { icon: 'fa-thin fa-plane', title: 'Travel Adventures', direction: 'left' },
  { icon: 'fa-thin fa-mountain-sun', title: 'Nature Culture', direction: 'right' },
  { icon: 'fa-thin fa-camera-retro', title: 'Travel Stories', direction: 'right' },
];

interface ServicesSectionProps {
  services?: ServiceItem[];
  bgImage?: string;
}

export default function ServicesSection({
  services = defaultServices,
  bgImage = '/assets/img/destination/07.jpg',
}: ServicesSectionProps) {
  return (
    <section className="services pt-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-12 text-center">
            <div className="section-title d-rotate wow">
              <span className="rotate-text text-white">
                Get ready to explore and <i>discover your world</i>.
              </span>
            </div>
          </div>
          <div className="col-md-12 mb-30 text-center">
            <a href="#" data-scroll-nav="4" className="hover-this circle-button-overlay">
              <div className="circle-button in-bord hover-anim">
                <div className="rotate-circle">
                  <svg className="textcircle safari-fix" viewBox="0 0 500 500">
                    <defs>
                      <path
                        id="textcircle"
                        d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                      ></path>
                    </defs>
                    <text>
                      <textPath xlinkHref="#textcircle" startOffset="0">
                        Cultural Paths • Nature Escape •
                      </textPath>
                    </text>
                  </svg>
                </div>
                <div className="in-circle text-center">
                  <i className="fa-thin fa-arrow-down"></i>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="row">
          {services.map((s, idx) => (
            <div className="col-md-3" key={idx}>
              <div className={`item mb-25 duru-slide-${s.direction || 'left'}`}>
                <Link href={s.link || '/service-details'}>
                  <span className="arrow fa-thin fa-arrow-up-right"></span>
                </Link>
                <div className="icon">
                  <i className={s.icon}></i>
                </div>
                <h5>{s.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container-fluid">
        <div className="height1">
          <div className="radius-mask">
            <div
              className="bg-img height2"
              data-background={bgImage}
              data-speed="0.5"
              data-lag="0"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
