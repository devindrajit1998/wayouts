'use client';

import React from 'react';
import HomeHero from '@/components/HomeHero';
import HomeAboutSection from '@/components/HomeAboutSection';
import HomeToursStackSection from '@/components/HomeToursStackSection';
import ServicesSection from '@/components/ServicesSection';
import ScrollingTicker from '@/components/ScrollingTicker';
import TestimonialsAccordion from '@/components/TestimonialsAccordion';
import FaqAccordionSection from '@/components/FaqAccordionSection';
import BlogHomeSection from '@/components/BlogHomeSection';

export default function IndexPage() {
  return (
    <main className="o-hidden">
      {/* Hero Banner Component */}
      <HomeHero />

      {/* About Section Component */}
      <HomeAboutSection />

      {/* Tours Stacking Section Component */}
      <HomeToursStackSection />

      {/* Services Section Component */}
      <ServicesSection bgImage="/assets/img/destination/07.jpg" />

      {/* Scrolling Ticker Component */}
      <ScrollingTicker />

      {/* Testimonials Accordion Component */}
      <TestimonialsAccordion />

      {/* FAQ Accordion Component */}
      <FaqAccordionSection />

      {/* Blog Home Component */}
      <BlogHomeSection />
    </main>
  );
}
