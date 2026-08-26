'use client';

import React from 'react';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <main className="o-hidden">
                {/* Header Banner */}
                <header className="pg-hero section-padding">
                    <div className="container">
                        <div className="row mb-60 justify-content-center">
                            <div className="col-md-5 text-center">
                                <div className="section-subtitle">Latest Travel News</div>
                                <div className="section-title">Stories that inspire your <i>next adventure</i></div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="height1">
                            <div className="radius-mask">
                                <div className="bg-img height2" data-background="/assets/img/destination/f.jpg" data-speed="0.5" data-lag="0"></div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Blog */}
                <section className="blog-home section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="item bg-img" data-background="/assets/img/blog/1.jpg">
                                            <div className="content">
                                                <div className="info">
                                                    <a href="/blog"> <span><i className="ti-time"></i>28 Dec 2026</span> </a>
                                                </div>
                                                <a href="/post">
                                                    <h5>Exploring the hidden Maldives paradise</h5>
                                                </a>
                                                <p>Discover a world where turquoise waters meet endless white sands in the heart of the Indian Ocean.</p>
                                                <div className="arrow"> <a href="/post"><i className="ti-arrow-top-right"></i></a> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="item bg-img" data-background="/assets/img/blog/2.jpg">
                                            <div className="content">
                                                <div className="info">
                                                    <a href="/blog"> <span><i className="ti-time"></i>26 Dec 2026</span> </a>
                                                </div>
                                                <a href="/post">
                                                    <h5>Journey through Canada’s wild beauty</h5>
                                                </a>
                                                <p>Discover vast landscapes of towering mountains, crystal-clear lakes, and endless forests across Canada.</p>
                                                <div className="arrow"> <a href="/post"><i className="ti-arrow-top-right"></i></a> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="item bg-img" data-background="/assets/img/blog/3.jpg">
                                            <div className="content">
                                                <div className="info">
                                                    <a href="/blog"> <span><i className="ti-time"></i>24 Dec 2026</span> </a>
                                                </div>
                                                <a href="/post">
                                                    <h5>Experience the luxury of modern Dubai</h5>
                                                </a>
                                                <p>Discover a city where futuristic skylines meet golden deserts, blending luxury and innovation.</p>
                                                <div className="arrow"> <a href="/post"><i className="ti-arrow-top-right"></i></a> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="item bg-img" data-background="/assets/img/blog/4.jpg">
                                            <div className="content">
                                                <div className="info">
                                                    <a href="/blog"> <span><i className="ti-time"></i>22 Dec 2026</span> </a>
                                                </div>
                                                <a href="/post">
                                                    <h5>Experience the spirit of Africa</h5>
                                                </a>
                                                <p>Discover a continent where vast savannas, stunning landscapes create an unforgettable journey of adventure.</p>
                                                <div className="arrow"> <a href="/post"><i className="ti-arrow-top-right"></i></a> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="item bg-img" data-background="/assets/img/blog/1.jpg">
                                            <div className="content">
                                                <div className="info">
                                                    <a href="/blog"> <span><i className="ti-time"></i>28 Dec 2026</span> </a>
                                                </div>
                                                <a href="/post">
                                                    <h5>Exploring the hidden Maldives paradise</h5>
                                                </a>
                                                <p>Discover a world where turquoise waters meet endless white sands in the heart of the Indian Ocean.</p>
                                                <div className="arrow"> <a href="/post"><i className="ti-arrow-top-right"></i></a> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="item bg-img" data-background="/assets/img/blog/2.jpg">
                                            <div className="content">
                                                <div className="info">
                                                    <a href="/blog"> <span><i className="ti-time"></i>26 Dec 2026</span> </a>
                                                </div>
                                                <a href="/post">
                                                    <h5>Journey through Canada’s wild beauty</h5>
                                                </a>
                                                <p>Discover vast landscapes of towering mountains, crystal-clear lakes, and endless forests across Canada.</p>
                                                <div className="arrow"> <a href="/post"><i className="ti-arrow-top-right"></i></a> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Pagination */}
                                <div className="row">
                                    <div className="col-md-12 text-center mt-30 mb-30">
                                        <ul className="pagination-wrap">
                                            <li><a href="/blog"><i className="fa-light fa-angle-left"></i></a></li>
                                            <li><a href="/blog">1</a></li>
                                            <li><a href="/blog" className="active">2</a></li>
                                            <li><a href="/blog">3</a></li>
                                            <li><a href="/blog"><i className="fa-light fa-angle-right"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Sidebar */}
                            <div className="col-lg-4 col-md-12">
                                <div className="blog-sidebar row">
                                    <div className="col-md-12">
                                        <div className="widget search">
                                            <form>
                                                <input type="text" name="search" placeholder="Type here ..." />
                                                <button type="submit"><i className="fa-light fa-magnifying-glass" aria-hidden="true"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="widget">
                                            <div className="widget-title">
                                                <h6>Recent Posts</h6>
                                            </div>
                                            <ul className="recent">
                                                <li>
                                                    <div className="thum"> <img src="/assets/img/blog/5.jpg" className="img-fluid" alt="" /> </div> <a href="/post">Experience the spirit of South Africa</a>
                                                </li>
                                                <li>
                                                    <div className="thum"> <img src="/assets/img/blog/6.jpg" className="img-fluid" alt="" /> </div> <a href="/post">Experience the luxury of modern Dubai</a>
                                                </li>
                                                <li>
                                                    <div className="thum"> <img src="/assets/img/blog/7.jpg" className="img-fluid" alt="" /> </div> <a href="/post">Journey through Canada’s wild beauty</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="widget">
                                            <div className="widget-title">
                                                <h6>Categories</h6>
                                            </div>
                                            <ul>
                                                <li><a href="#"><i className="fa-light fa-angle-right"></i>Destinations</a></li>
                                                <li><a href="#"><i className="fa-light fa-angle-right"></i>Nature & Adventure Tours</a></li>
                                                <li><a href="#"><i className="fa-light fa-angle-right"></i>City & Cultural Tours</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="widget">
                                            <div className="widget-title">
                                                <h6>Tags</h6>
                                            </div>
                                            <ul className="tags">
                                                <li><a href="#">Destinations</a></li>
                                                <li><a href="#">Adventure</a></li>
                                                <li><a href="#">Tour</a></li>
                                                <li><a href="#">Travel</a></li>
                                                <li><a href="#">Nature</a></li>
                                            </ul>
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
