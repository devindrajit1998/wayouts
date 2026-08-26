'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  if (pathname === '/auth') {
    return null;
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        {/* Logo */}
        <div className="logo-wrapper">
          <Link className="logo" href="/">
            <img src="/assets/img/logo.png" className="logo-img" alt="Wayouts" />
          </Link>
        </div>
        {/* Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="ti-menu"></i>
          </span>
        </button>
        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                <span className="rolling-text">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">
                <span className="rolling-text">About</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/tours">
                <span className="rolling-text">Tours</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/destination">
                <span className="rolling-text">Destinations</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/services">
                <span className="rolling-text">Services</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                <span className="rolling-text">Pages</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/team" className="dropdown-item">
                    <span>Team</span>
                  </Link>
                </li>
                <li>
                  <Link href="/team-details" className="dropdown-item">
                    <span>Team Details</span>
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="dropdown-item">
                    <span>Testimonials</span>
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="dropdown-item">
                    <span>FAQ</span>
                  </Link>
                </li>
                <li>
                  <Link href="/tour-details" className="dropdown-item">
                    <span>Tour Details</span>
                  </Link>
                </li>
                <li>
                  <Link href="/service-details" className="dropdown-item">
                    <span>Service Details</span>
                  </Link>
                </li>
                <li>
                  <Link href="/post" className="dropdown-item">
                    <span>Post Page</span>
                  </Link>
                </li>
                <li>
                  <Link href="/auth" className="dropdown-item">
                    <span>Login / Sign Up</span>
                  </Link>
                </li>
                <li>
                  <Link href="/404" className="dropdown-item">
                    <span>404 Page</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/blog">
                <span className="rolling-text">Blog</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">
                <span className="rolling-text">Contact</span>
              </Link>
            </li>
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
  );
}
