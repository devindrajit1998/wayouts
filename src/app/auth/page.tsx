'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function AuthPage() {
  const [tab, setTab] = useState<'login' | 'signup'>('login');

  return (
    <main className="auth-standalone-wrapper">
      {/* Top Floating Bar with Logo and Home Back Button */}
      <header className="auth-top-nav">
        <div className="container d-flex justify-content-between align-items-center">
          <Link href="/" className="auth-brand-logo">
            <img src="/assets/img/logo.png" alt="Wayouts" />
          </Link>
          <Link href="/" className="auth-home-back-btn">
            <i className="ti-arrow-left me-2"></i>
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <section className="auth-page-section">
        <div className="auth-bg-overlay"></div>
        <div className="container">
          <div className="auth-card-container">
            <div className="row g-0">
              
              {/* Left Side: Brand & Visuals */}
              <div className="col-lg-5">
                <div className="auth-hero-side">
                  <div className="auth-hero-img-bg"></div>
                  
                  <div className="auth-hero-content">
                    <div className="section-subtitle mb-10 text-white">Welcome to Wayouts</div>
                    <h2>
                      Explore The World With <span>Wayouts</span>
                    </h2>
                    <p>
                      Join millions of travelers discovering custom holiday packages, luxury tours, and unforgettable adventures.
                    </p>
                  </div>

                  <div className="auth-features-list">
                    <div className="auth-feature-item">
                      <i className="fa-solid fa-check"></i>
                      <span>Exclusive member-only discounts & deals</span>
                    </div>
                    <div className="auth-feature-item">
                      <i className="fa-solid fa-check"></i>
                      <span>Instant bookings with flexible cancellation</span>
                    </div>
                    <div className="auth-feature-item">
                      <i className="fa-solid fa-check"></i>
                      <span>24/7 dedicated travel concierge support</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Tabbed Login / Sign-Up Form */}
              <div className="col-lg-7">
                <div className="auth-form-side">
                  
                  {/* Tab Selector */}
                  <div className="auth-tab-switch">
                    <button
                      type="button"
                      className={`auth-tab-btn ${tab === 'login' ? 'active' : ''}`}
                      onClick={() => setTab('login')}
                    >
                      Log In
                    </button>
                    <button
                      type="button"
                      className={`auth-tab-btn ${tab === 'signup' ? 'active' : ''}`}
                      onClick={() => setTab('signup')}
                    >
                      Sign Up
                    </button>
                  </div>

                  {tab === 'login' ? (
                    /* LOGIN FORM */
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="auth-input-group">
                        <label>Email Address</label>
                        <div className="auth-input-wrapper">
                          <i className="fa-light fa-envelope"></i>
                          <input type="email" placeholder="example@wayouts.com" required />
                        </div>
                      </div>

                      <div className="auth-input-group">
                        <label>Password</label>
                        <div className="auth-input-wrapper">
                          <i className="fa-light fa-lock"></i>
                          <input type="password" placeholder="••••••••" required />
                        </div>
                      </div>

                      <div className="auth-options">
                        <label className="auth-remember">
                          <input type="checkbox" />
                          <span>Remember me</span>
                        </label>
                        <a href="#0" className="auth-forgot-link">Forgot password?</a>
                      </div>

                      <button type="submit" className="auth-submit-btn">
                        <span>Log In</span>
                        <i className="ti-arrow-right"></i>
                      </button>
                    </form>
                  ) : (
                    /* SIGN UP FORM */
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="auth-input-group">
                            <label>Full Name</label>
                            <div className="auth-input-wrapper">
                              <i className="fa-light fa-user"></i>
                              <input type="text" placeholder="John Doe" required />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="auth-input-group">
                            <label>Phone Number</label>
                            <div className="auth-input-wrapper">
                              <i className="fa-light fa-phone"></i>
                              <input type="tel" placeholder="+1 (555) 000-0000" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="auth-input-group">
                        <label>Email Address</label>
                        <div className="auth-input-wrapper">
                          <i className="fa-light fa-envelope"></i>
                          <input type="email" placeholder="example@wayouts.com" required />
                        </div>
                      </div>

                      <div className="auth-input-group">
                        <label>Create Password</label>
                        <div className="auth-input-wrapper">
                          <i className="fa-light fa-lock"></i>
                          <input type="password" placeholder="At least 8 characters" required />
                        </div>
                      </div>

                      <div className="auth-options">
                        <label className="auth-remember">
                          <input type="checkbox" required />
                          <span>I agree to the <a href="#0" className="auth-forgot-link">Terms & Privacy Policy</a></span>
                        </label>
                      </div>

                      <button type="submit" className="auth-submit-btn">
                        <span>Create Account</span>
                        <i className="ti-arrow-right"></i>
                      </button>
                    </form>
                  )}

                  {/* Social Login Options */}
                  <div className="auth-divider">
                    <span>Or continue with</span>
                  </div>

                  <div className="auth-social-btns">
                    <button type="button" className="auth-social-btn">
                      <i className="fa-brands fa-google" style={{ color: '#ea4335' }}></i>
                      <span>Google</span>
                    </button>
                    <button type="button" className="auth-social-btn">
                      <i className="fa-brands fa-facebook-f" style={{ color: '#1877f2' }}></i>
                      <span>Facebook</span>
                    </button>
                    <button type="button" className="auth-social-btn">
                      <i className="fa-brands fa-apple" style={{ color: '#000000' }}></i>
                      <span>Apple</span>
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
