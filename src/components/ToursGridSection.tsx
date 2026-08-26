'use client';

import React from 'react';
import Link from 'next/link';

interface TourItem {
  id?: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  rating: number;
  image: string;
  link?: string;
}

const defaultTours: TourItem[] = [
  {
    title: 'Maldives Paradise',
    location: 'Maldives, Asia',
    duration: '6 Days - 5 Nights',
    price: '$499',
    rating: 4.9,
    image: '/assets/img/destination/01.jpg',
  },
  {
    title: 'Swiss Alps Escape',
    location: 'Interlaken, Switzerland',
    duration: '7 Days - 6 Nights',
    price: '$899',
    rating: 4.9,
    image: '/assets/img/destination/02.jpg',
  },
  {
    title: 'Dubai Luxury Escape',
    location: 'Dubai, UAE',
    duration: '5 Days - 4 Nights',
    price: '$699',
    rating: 4.8,
    image: '/assets/img/destination/03.jpg',
  },
  {
    title: 'Bali Island Bliss',
    location: 'Bali, Indonesia',
    duration: '6 Days - 5 Nights',
    price: '$550',
    rating: 4.9,
    image: '/assets/img/destination/05.jpg',
  },
  {
    title: 'Santorini Sunset Odyssey',
    location: 'Santorini, Greece',
    duration: '6 Days - 5 Nights',
    price: '$799',
    rating: 4.9,
    image: '/assets/img/destination/06.jpg',
  },
  {
    title: 'Canadian Nature Tour',
    location: 'Banff, Canada',
    duration: '7 Days - 6 Nights',
    price: '$799',
    rating: 4.9,
    image: '/assets/img/destination/a.jpg',
  },
];

export default function ToursGridSection({
  tours = defaultTours,
  showTitle = true,
}: {
  tours?: TourItem[];
  showTitle?: boolean;
}) {
  return (
    <section className="tours section-padding">
      <div className="container">
        <div className="row tours-isotope">
          {showTitle && (
            <div className="col-md-6 items">
              <div className="mb-30">
                <div className="section-subtitle">Best Tour Packages</div>
                <div className="section-title">
                  Experience the best<br />travel tours<i>.</i>
                </div>
              </div>
            </div>
          )}

          {tours.map((t, idx) => (
            <div className="col-md-6 items" key={idx}>
              <div className="item">
                <div className="tour-media">
                  <img src={t.image} alt={t.title} className="height2" data-speed="0.8" data-lag="0" />
                  <div className="clicko">
                    <Link href={t.link || '/tour-details'}>
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
                      <i className="ti-location-pin"></i>
                      <span>{t.location}</span>
                    </div>
                    <h4 className="tour-title">{t.title}</h4>
                  </div>
                  <div className="tour-info">
                    <div className="tour-duration">
                      <div className="tour-icon">
                        <i className="fa-light fa-calendar"></i>
                      </div>
                      <div className="tour-meta">
                        <small>Duration</small>
                        <span>{t.duration}</span>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
