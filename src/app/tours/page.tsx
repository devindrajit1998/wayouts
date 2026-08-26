'use client';

import React from 'react';
import PageBanner from '@/components/PageBanner';
import ToursGridSection from '@/components/ToursGridSection';

export default function ToursPage() {
  return (
    <main className="o-hidden">
      {/* Header Banner Component */}
      <PageBanner
        subtitle="Explore Our Tours"
        title="Discover"
        italicTitle="unforgettable journeys"
        afterTitle="across the world"
        image="/assets/img/destination/02.jpg"
      />

      {/* Tours Grid Component */}
      <ToursGridSection />
    </main>
  );
}
