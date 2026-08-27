'use client';

import React from 'react';
import PageBanner from '@/components/PageBanner';
import TeamSliderSection from '@/components/TeamSliderSection';

export default function TeamPage() {
  return (
    <main className="o-hidden">
      {/* Header Banner Component */}
      <PageBanner
        subtitle="Our Travel Experts"
        title="Meet the experts behind"
        italicTitle="every journey"
        image="/assets/img/destination/06.jpg"
      />

      {/* Team Slider Component */}
      <TeamSliderSection />
    </main>
  );
}
