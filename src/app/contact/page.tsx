'use client';

import React from 'react';
import PageBanner from '@/components/PageBanner';

export default function ContactPage() {
  return (
    <main className="o-hidden">
      {/* Header Banner Component */}
      <PageBanner
        subtitle="Talk To Our Team"
        title="Get personalized travel support"
        italicTitle="today!"
        image="/assets/img/destination/03.jpg"
      >
        <div className="post mt-30">
          <div className="date-comment">
            <i className="fa-solid fa-phone-volume"></i> +1 123 4567 8910
          </div>
          <div className="date-comment">
            <i className="fa-solid fa-envelope"></i> info@wayouts.com
          </div>
          <div className="date-comment">
            <i className="fa-solid fa-location-dot"></i> 113893 Noble Blvd. NY, USA
          </div>
        </div>
      </PageBanner>

      {/* Contact Form Section */}
      <div className="contact section-padding">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-4">
              <div className="item-img duru-rotate-scale-reveal">
                <img src="/assets/img/destination/b.jpg" alt="Contact Us" />
              </div>
            </div>
            <div className="col-md-5 offset-md-1">
              <div className="contact-form">
                <form method="post" onSubmit={(e) => e.preventDefault()}>
                  <div className="row">
                    <div className="col-md-12 text-left">
                      <h3>Get in touch!</h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <span className="form-icon">
                          <i className="fa-light fa-face-smile"></i>
                        </span>
                        <input type="text" name="name" id="name" placeholder="Your name" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <span className="form-icon">
                          <i className="fa-light fa-envelope"></i>
                        </span>
                        <input type="email" name="email" id="email" placeholder="Your email" required />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <span className="form-icon">
                          <i className="fa-light fa-book"></i>
                        </span>
                        <input type="text" name="subject" id="subject" placeholder="Subject" required />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group form-textarea">
                        <span className="form-icon">
                          <i className="fa-light fa-comment"></i>
                        </span>
                        <textarea
                          name="message"
                          id="message"
                          cols={30}
                          rows={3}
                          placeholder="Message"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="butn-arrow">
                        <span className="btn-text">Send message</span>
                        <span className="arrow-wrap">
                          <span className="arrow-inner">
                            <i className="ti-arrow-right"></i>
                            <i className="ti-arrow-right"></i>
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
