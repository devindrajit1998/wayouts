'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  if (pathname === '/auth' || pathname.startsWith('/admin')) {
    return null;
  }
  return (
    <footer className="footer">
      <div className="container">
        {/* Subscribe */}
        <div className="row justify-content-center">
          <div className="col-md-7 mb-45 text-center">
            <div className="subscribe">
              <div className="section-subtitle wow fadeInRight">Subscribe to travel</div>
              <div className="section-title d-rotate wow mb-30">
                <span className="rotate-text text-white">Travel deals to your inbox<i>!</i></span>
              </div>
              <div className="newsletter">
                <form onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="Enter your email address" required />
                  <button type="submit">
                    <i className="fa-light fa-arrow-right"></i>
                  </button>
                </form>
              </div>
              <p>
                We are committed to protecting your <a href="#" className="text-decoration-line-bottom">privacy policy.</a>
              </p>
            </div>
          </div>
        </div>

        {/* Instagram Strip */}
        <div className="insta">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="item">
                  <div className="img">
                    <a href="#0"><img src="/assets/img/insta/03.jpg" alt="" /></a>
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                  <div className="img">
                    <a href="#0"><img src="/assets/img/insta/01.jpg" alt="" /></a>
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                  <div className="img">
                    <a href="#0"><img src="/assets/img/insta/02.jpg" alt="" /></a>
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                  <div className="img">
                    <a href="#0"><img src="/assets/img/insta/04.jpg" alt="" /></a>
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                  <div className="img">
                    <a href="#0"><img src="/assets/img/insta/05.jpg" alt="" /></a>
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                  <div className="img">
                    <a href="#0"><img src="/assets/img/insta/06.jpg" alt="" /></a>
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                  <div className="follow">
                    <a href="#0" className="text-bg">
                      <span><i className="fa-brands fa-instagram"></i> / WAYOUTS</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-12">
              <p>&copy; All Rights Reserved <a href="#" target="_blank" rel="noreferrer">Wayouts</a></p>
            </div>
            <div className="col-lg-7 col-md-12 text-center">
              <div className="links">
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/tours">Tours</Link></li>
                  <li><Link href="/destination">Destinations</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-12">
              <div className="social-icons text-end">
                <ul className="list-inline">
                  <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-dribbble"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-text-style5">WAYOUTS</div>
    </footer>
  );
}
