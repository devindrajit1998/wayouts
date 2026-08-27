'use client';

import React from 'react';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import ScrollingTicker from '@/components/ScrollingTicker';

interface DestinationCard {
  country: string;
  packages: string;
  image: string;
  link?: string;
}

const destinationsList: DestinationCard[] = [
  { country: 'Greece', packages: '4+ Tour Packages', image: '/assets/img/destination/a.jpg' },
  { country: 'Egypt', packages: '3+ Tour Packages', image: '/assets/img/destination/d.jpg' },
  { country: 'Thailand', packages: '7+ Tour Packages', image: '/assets/img/destination/c.jpg' },
  { country: 'Iceland', packages: '4+ Tour Packages', image: '/assets/img/destination/e.jpg' },
  { country: 'South Africa', packages: '6+ Tour Packages', image: '/assets/img/destination/b.jpg' },
  { country: 'Maldives', packages: '6+ Tour Packages', image: '/assets/img/destination/f.jpg' },
];

export default function DestinationPage() {
  return (
    <main className="o-hidden">
      {/* Header Banner Component */}
      <PageBanner
        subtitle="Explore Our Tours"
        title="Explore the world's"
        italicTitle="best destinations"
        image="/assets/img/destination/06.jpg"
      />

      {/* Scrolling Ticker Component */}
      <ScrollingTicker />

      {/* Destinations Grid Section */}
      <div className="destination section-padding pt-0">
        <div className="container">
          <div className="row">
            {destinationsList.map((dest, idx) => (
              <div className="col-lg-4 col-md-12 mb-60" key={idx}>
                <div className="item transition-inner-all">
                  <img src={dest.image} className="img-fluid" alt={dest.country} />
                  <div className="cont hover">
                    <div className="wrap">
                      <span className="title">{dest.country}</span>
                      <div className="link">
                        <Link href={dest.link || '/tour-details'}>
                          <div className="category">{dest.packages}</div>
                          <i className="fa-light fa-arrow-right-long"></i>
                        </Link>
                      </div>
                      <div className="overlay"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
