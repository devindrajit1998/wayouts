'use client';

import React from 'react';

interface FaqItem {
  question: string;
  answer: string;
  icon: string;
  active?: boolean;
}

const defaultFaqs: FaqItem[] = [
  {
    question: 'Travel Photography',
    answer: 'Capture beautiful and unforgettable travel moments while exploring new places and exciting destinations around the world.',
    icon: 'fa-thin fa-camera-retro',
  },
  {
    question: 'Mountain Tours',
    answer: 'Discover breathtaking mountain landscapes and enjoy adventures with our professional travel guides.',
    icon: 'fa-thin fa-mountain-sun',
  },
  {
    question: 'Flight Booking',
    answer: 'Book your flights quickly and easily with the best travel options and comfortable journeys for every destination.',
    icon: 'fa-thin fa-plane',
    active: true,
  },
];

export default function FaqAccordionSection({
  faqs = defaultFaqs,
}: {
  faqs?: FaqItem[];
}) {
  return (
    <section className="faqs section-padding bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="item-img">
              <img src="/assets/img/a2.jpg" className="duru-image-zoom" alt="Travel Moments" />
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item-img mt-120">
              <img src="/assets/img/a3.jpg" className="duru-image-zoom" alt="Travel Horizons" />
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 col-md-12 mb-30">
            <div className="section-subtitle wow fadeInRight">Popular Questions</div>
            <div className="section-title mb-25 d-rotate wow">
              <span className="rotate-text">Frequently asked <i>questions</i></span>
            </div>
            <ul className="accordion-box clearfix">
              {faqs.map((faq, idx) => (
                <li
                  key={idx}
                  className={`accordion block ${faq.active ? 'active-block' : ''}`}
                >
                  <div className={`acc-btn ${faq.active ? 'active' : ''}`}>
                    {faq.question}
                  </div>
                  <div
                    className="acc-content"
                    style={{ display: faq.active ? 'block' : 'none' }}
                  >
                    <div className="content">
                      <p>{faq.answer}</p>
                      <i className={faq.icon}></i>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-text-style4 duru-slide-right">Questions</div>
    </section>
  );
}
