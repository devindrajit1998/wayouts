'use client';

import React from 'react';
import PageBanner from '@/components/PageBanner';

const testimonialsList = [
  {
    group: 'Africa Tour Group',
    review: 'This tour was a truly memorable experience. Africa’s nature and shared memories were amazing.',
    img: '/assets/img/team/g1.jpg',
    anim: 'duru-slideinleft',
  },
  {
    group: 'Canada Tour Group',
    review: 'This tour was a memorable experience. Canada’s landscapes and shared moments were incredible.',
    img: '/assets/img/team/g2.jpg',
    anim: 'duru-slide-up',
  },
  {
    group: 'Cappadocia Tour',
    review: 'This tour was a memorable experience. Cappadocia’s scenery and shared moments were magical.',
    img: '/assets/img/team/g3.jpg',
    anim: 'duru-slide-right',
  },
];

export default function TestimonialsPage() {
  return (
    <main className="o-hidden">
      {/* Header Banner Component */}
      <PageBanner
        subtitle="What Clients Say"
        title="What our travelers say"
        italicTitle="about us"
        image="/assets/img/destination/01.jpg"
      />

      {/* Testimonials Grid Section */}
      <section id="testimonials1" className="testimonials1 section-padding">
        <div className="container">
          <div className="row">
            {testimonialsList.map((t, idx) => (
              <div className={`col-md-4 ${t.anim}`} key={idx}>
                <div className="item mt-10">
                  <div className="info valign">
                    <div className="full-width">
                      <span className="quote-icon">
                        <img src="/assets/img/quote.svg" alt="Quote" />
                      </span>
                      <p>{t.review}</p>
                      <h6>{t.group}</h6>
                      <div className="icons">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <div className="review-title">
                        <div className="img">
                          <div className="img-inner">
                            <img src={t.img} alt={t.group} />
                          </div>
                          <div className="quote-icon">
                            <i className="fa-solid fa-quote-left"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-md-12 text-center mt-60">
              <div className="section-info">
                <div className="tag duru-rotate-on-scroll">
                  <i className="icon fa-solid fa-quote-left"></i>
                </div>
                <div className="desc">
                  <span className="text-decoration-line-bottom">WAYOUTS</span> is trusted by 1,000+ travelers across the globe.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
