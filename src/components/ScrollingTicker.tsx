'use client';

import React from 'react';

interface ScrollingTickerProps {
  items?: string[];
}

const defaultItems = [
  'Flight Booking',
  'Hotel Reservations',
  'Holiday Packages',
  'Visa Assistance',
  'Airport Transfers',
  'Travel Insurance',
  'Cruise Tours',
  'City Tours',
  'Adventure Trips',
  'Honeymoon Packages',
  'Group Travel',
  'Business Travel',
  'Car Rentals',
  'Custom Itineraries',
];

export default function ScrollingTicker({ items = defaultItems }: ScrollingTickerProps) {
  return (
    <div className="scrolling scrolling-ticker" data-scroll-index="4">
      <div className="wrapper feather-shadow2">
        <div className="content">
          {items.map((item, idx) => (
            <span key={`ticker-1-${idx}`}>
              <i className="fa-regular fa-asterisk mr-30"></i>
              {item}
            </span>
          ))}
        </div>
        <div className="content">
          {items.map((item, idx) => (
            <span key={`ticker-2-${idx}`}>
              <i className="fa-regular fa-asterisk mr-30"></i>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
