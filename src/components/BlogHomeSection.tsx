'use client';

import React from 'react';
import Link from 'next/link';

interface BlogPost {
  title: string;
  date: string;
  desc: string;
  image: string;
  active?: boolean;
  anim?: string;
  link?: string;
}

const defaultPosts: BlogPost[] = [
  {
    title: 'Exploring the hidden Maldives paradise',
    date: '28 Dec 2026',
    desc: 'Discover a world where turquoise waters meet endless white sands in the heart of the Indian Ocean.',
    image: '/assets/img/blog/1.jpg',
    anim: 'duru-slide-left',
  },
  {
    title: 'Journey through Canada’s wild beauty',
    date: '26 Dec 2026',
    desc: 'Discover vast landscapes of towering mountains, crystal-clear lakes, and endless forests across Canada.',
    image: '/assets/img/blog/2.jpg',
    active: true,
    anim: 'duru-slide-up',
  },
  {
    title: 'Experience the luxury of modern Dubai',
    date: '24 Dec 2026',
    desc: 'Discover a city where futuristic skylines meet golden deserts, blending luxury and innovation.',
    image: '/assets/img/blog/3.jpg',
    anim: 'duru-slide-right',
  },
];

export default function BlogHomeSection({ posts = defaultPosts }: { posts?: BlogPost[] }) {
  return (
    <section className="blog-home section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <div className="section-subtitle wow fadeInRight">Travel Blog</div>
            <div className="section-title mb-30 d-rotate wow">
              <span className="rotate-text">Travel <i>experience</i></span>
            </div>
          </div>
        </div>
        <div className="row">
          {posts.map((p, idx) => (
            <div className={`col-md-4 ${p.anim || ''}`} key={idx}>
              <div
                className={`item bg-img ${p.active ? 'active' : ''}`}
                data-background={p.image}
              >
                <div className="content">
                  <div className="info">
                    <Link href="/blog">
                      <span><i className="ti-time"></i>{p.date}</span>
                    </Link>
                  </div>
                  <Link href={p.link || '/post'}>
                    <h5>{p.title}</h5>
                  </Link>
                  <p>{p.desc}</p>
                  <div className="arrow">
                    <Link href={p.link || '/post'}>
                      <i className="ti-arrow-top-right"></i>
                    </Link>
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
