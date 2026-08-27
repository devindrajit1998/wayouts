'use client';

import React from 'react';

interface TestimonialCard {
  title: string;
  image: string;
  review: string;
  rating?: number;
  active?: boolean;
}

const defaultTestimonials: TestimonialCard[] = [
  {
    title: 'Africa Tour',
    image: '/assets/img/testiominal/01.jpg',
    review: 'This tour was a truly memorable experience. Africa’s nature and shared memories were amazing.',
    rating: 5,
    active: true,
  },
  {
    title: 'Canada Tour',
    image: '/assets/img/testiominal/02.jpg',
    review: 'This tour was a memorable experience. Canada’s landscapes and shared moments were incredible.',
    rating: 5,
  },
  {
    title: 'Cappadocia Tour',
    image: '/assets/img/testiominal/03.jpg',
    review: 'This tour was a memorable experience. Cappadocia’s scenery and shared moments were magical.',
    rating: 5,
  },
];

export default function TestimonialsAccordion({
  items = defaultTestimonials,
}: {
  items?: TestimonialCard[];
}) {
  return (
    <div className="position-relative section-padding pt-0">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mb-30">
            <div className="section-subtitle wow fadeInRight">Testimonials</div>
            <div className="section-title d-rotate wow">
              <span className="rotate-text">Our happy <i>traveller</i></span>
            </div>
          </div>
        </div>
        <div className="row justify-content-center g-0">
          <div className="col-12 testimonials2">
            {items.map((item, idx) => (
              <div
                key={idx}
                className={`item box-shadow-extra-large ${item.active ? 'active' : 'duru-slide-right'}`}
              >
                <div className="img duru-image-parallax">
                  <img src={item.image} className="img-fluid" alt={item.title} />
                </div>
                <div className="flex-column cont">
                  <div className="cont-hover">
                    <h6>{item.title}</h6>
                    <div className="rating">
                      {Array.from({ length: item.rating || 5 }).map((_, i) => (
                        <i key={i} className="fa-solid fa-star"></i>
                      ))}
                    </div>
                    <p>{item.review}</p>
                    <div className="traveller">
                      <ul>
                        <li><img src="/assets/img/team/tst1.jpg" alt="" /></li>
                        <li><img src="/assets/img/team/tst2.jpg" alt="" /></li>
                        <li><img src="/assets/img/team/tst3.jpg" alt="" /><span>3+</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
