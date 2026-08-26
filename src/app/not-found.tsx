'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="o-hidden">
            
    {/* Not found */}
    <section className="notfound section-padding text-center">
        <div className="v-middle">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12">
                        <h2>404</h2>
                        <h3>Not Found!</h3>
                        <p>The page you are looking for was moved, removed, renamed or never existed.</p>
                        <form>
                            <input type="text" name="search" placeholder="Search" required />
                            <button><i className="fa-light fa-arrow-up-right"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </main>
  );
}
