'use client';

import React from 'react';
import Link from 'next/link';

interface StackTourItem {
  title: string;
  location: string;
  duration: string;
  price: string;
  rating: number;
  image: string;
}

const defaultStackTours: StackTourItem[] = [
  {
    title: 'Maldives Paradise Escape',
    location: 'Maldives, Asia',
    duration: '6 Days - 5 Nights',
    price: '$499',
    rating: 4.9,
    image: '/assets/img/destination/01.jpg',
  },
  {
    title: 'Dubai Luxury Journey',
    location: 'Dubai, UAE',
    duration: '5 Days - 4 Nights',
    price: '$699',
    rating: 4.8,
    image: '/assets/img/destination/03.jpg',
  },
  {
    title: 'Canadian Nature Tour',
    location: 'Banff, Canada',
    duration: '7 Days - 6 Nights',
    price: '$799',
    rating: 4.9,
    image: '/assets/img/destination/02.jpg',
  },
];

export default function HomeToursStackSection({ tours = defaultStackTours }: { tours?: StackTourItem[] }) {
  return (
    <section className="tours stsec section-padding">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <div className="stack-title mb-30">
              <div className="section-subtitle wow fadeInRight">Choose your place</div>
              <div className="section-title d-rotate wow">
                <span className="rotate-text">Discover dream <i>destinations</i></span>
              </div>
              <p className="wow fadeInRight" data-wow-delay=".3s">
                Turn your dream destinations into unforgettable experiences with guidance. From hidden gems to iconic landmarks, we craft personalized journeys for you.
              </p>
              <Link href="/tours" className="butn-arrow wow fadeInUp" data-wow-delay=".8s">
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
          <div className="col-lg-7 offset-lg-1 items">
            {tours.map((t, idx) => (
              <div className="item" key={idx}>
                <div className="tour-media">
                  <img src={t.image} alt={t.title} className="height2" data-speed="0.8" data-lag="0" />
                  <div className="clicko">
                    <Link href="/tour-details">
                      <span className="icon-wrap">
                        <span className="icon">
                          <i className="ti-arrow-top-right"></i>
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="tour-content">
                  <div className="tour-header">
                    <div className="tour-location">
                      <i className="ti-location-pin"></i> <span>{t.location}</span>
                    </div>
                    <h4 className="tour-title">{t.title}</h4>
                  </div>
                  <div className="tour-info">
                    <div className="tour-duration">
                      <div className="tour-icon">
                        <i className="fa-light fa-calendar"></i>
                      </div>
                      <div className="tour-meta">
                        <small>Duration</small> <span>{t.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="tour-price-wrap">
                    <div className="tour-rating">
                      <i className="fa-solid fa-star"></i> {t.rating}
                    </div>
                    <div className="tour-price">
                      {t.price} <span>/ Traveler</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
