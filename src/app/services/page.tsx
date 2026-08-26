'use client';

import React from 'react';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';

const servicesList = [
  {
    icon: 'fa-thin fa-route',
    title: 'Custom Tour Packages',
    desc: 'Personalized travel plans tailored to your interests and budget.',
  },
  {
    icon: 'fa-thin fa-plane-departure',
    title: 'Flight Booking',
    desc: 'Fast and secure flight reservations at the best available prices.',
  },
  {
    icon: 'fa-thin fa-hotel',
    title: 'Hotel & Accommodation',
    desc: 'Comfortable and premium accommodation options worldwide.',
  },
  {
    icon: 'fa-thin fa-passport',
    title: 'Visa Assistance',
    desc: 'Professional support for all your travel visa procedures.',
  },
  {
    icon: 'fa-thin fa-van-shuttle',
    title: 'Transfer Services',
    desc: 'Reliable airport and city transfer solutions for stress-free travel.',
  },
  {
    icon: 'fa-thin fa-headset',
    title: '24/7 Customer Support',
    desc: 'Dedicated support available anytime during your journey.',
  },
];

export default function ServicesPage() {
  return (
    <main className="o-hidden">
      {/* Header Banner Component */}
      <PageBanner
        subtitle="Premium Travel Services"
        title="Discover services that make"
        italicTitle="travel effortless"
        image="/assets/img/destination/07.jpg"
      />

      {/* Services Grid Section */}
      <section className="services section-padding">
        <div className="container">
          <div className="row justify-content-center">
            {servicesList.map((service, idx) => (
              <div className="col-md-4" key={idx}>
                <div className={`item mb-25 duru-slide-${idx < 3 ? 'right' : 'left'}`}>
                  <Link href="/service-details">
                    <span className="arrow fa-thin fa-arrow-up-right"></span>
                  </Link>
                  <div className="icon">
                    <i className={service.icon}></i>
                  </div>
                  <h5>{service.title}</h5>
                  <p>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-md-12 text-center mt-30 duru-slide-right">
              <div className="section-info">
                <div className="tag duru-rotate-on-scroll">
                  <i className="icon fa-thin fa-plane-departure"></i>
                </div>
                <div className="desc">
                  <span className="text-decoration-line-bottom">WAYOUTS</span> transforms journeys into unforgettable experiences.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
