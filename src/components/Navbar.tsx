'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  if (pathname === '/auth' || pathname.startsWith('/admin')) {
    return null;
  }

  const isHome = pathname === '/';

  const mainLinks = [
    { href: '/', label: 'Home', icon: 'fa-light fa-house' },
    { href: '/about', label: 'About', icon: 'fa-light fa-compass' },
    { href: '/tours', label: 'Tours', icon: 'fa-light fa-map-location-dot' },
    { href: '/destination', label: 'Destinations', icon: 'fa-light fa-earth-americas' },
    { href: '/services', label: 'Services', icon: 'fa-light fa-plane-departure' },
    { href: '/blog', label: 'Blog', icon: 'fa-light fa-newspaper' },
    { href: '/contact', label: 'Contact', icon: 'fa-light fa-envelope' },
  ];

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${isHome ? 'navbar-dark' : 'navbar-light'}`}>
        <div className="container">
          {/* Logo */}
          <div className="logo-wrapper">
            <Link className="logo" href="/">
              <img
                src={isHome ? '/assets/img/logo-white.png' : '/assets/img/logo-dark.png'}
                className="logo-img logo-static"
                alt="Wayouts"
              />
              <img
                src="/assets/img/logo-white.png"
                className="logo-img logo-scroll-img"
                alt="Wayouts"
              />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            className="navbar-toggler mobile-menu-trigger"
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <span className="navbar-toggler-icon">
              <i className="ti-menu"></i>
            </span>
          </button>

          {/* Desktop Menu - Clean horizontal navbar without dropdown */}
          <div className="collapse navbar-collapse d-none d-lg-block" id="navbar">
            <ul className="navbar-nav ms-auto">
              {mainLinks.map((item) => (
                <li className="nav-item" key={item.href}>
                  <Link
                    className={`nav-link ${pathname === item.href ? 'active' : ''}`}
                    href={item.href}
                  >
                    <span className="rolling-text">{item.label}</span>
                  </Link>
                </li>
              ))}
              <li className="nav-item ms-lg-3 my-auto">
                <Link href="/auth" className="nav-login-btn">
                  <i className="fa-light fa-user me-2"></i>
                  <span>Login</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Off-Canvas Mobile Drawer */}
      <div
        className={`offcanvas-backdrop fade ${mobileMenuOpen ? 'show d-block' : 'd-none'}`}
        onClick={() => setMobileMenuOpen(false)}
        style={{ zIndex: 1050 }}
      ></div>

      <div
        className={`wayouts-offcanvas ${mobileMenuOpen ? 'is-open' : ''}`}
        aria-label="Mobile Navigation Menu"
      >
        {/* Drawer Header */}
        <div className="offcanvas-head">
          <Link href="/" className="offcanvas-brand" onClick={() => setMobileMenuOpen(false)}>
            <img src="/assets/img/logo-white.png" alt="Wayouts" />
          </Link>
          <button
            type="button"
            className="offcanvas-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <i className="fa-light fa-xmark"></i>
          </button>
        </div>

        {/* Drawer Navigation */}
        <div className="offcanvas-body">
          <ul className="offcanvas-nav">
            {mainLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={pathname === item.href ? 'active' : ''}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <i className={item.icon}></i>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Quick Action Buttons */}
          <div className="offcanvas-footer">
            <Link
              href="/auth"
              className="offcanvas-login-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className="fa-light fa-user me-2"></i>
              <span>Login / Sign Up</span>
            </Link>

            <div className="offcanvas-contact-info">
              <p>
                <i className="fa-light fa-phone"></i> +1 (800) 234-5678
              </p>
              <p>
                <i className="fa-light fa-envelope"></i> info@wayouts.com
              </p>
            </div>

            <div className="offcanvas-socials">
              <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
