'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';

const navItems = [
    { label: 'Overview', href: '/admin', icon: 'fa-light fa-grid-2' },
    { label: 'Bookings', href: '/admin/bookings', icon: 'fa-light fa-calendar-check', count: '12' },
    { label: 'Tours', href: '/admin/tours', icon: 'fa-light fa-map-location-dot' },
    { label: 'Destinations', href: '/admin/destinations', icon: 'fa-light fa-earth-americas' },
    { label: 'Customers', href: '/admin/customers', icon: 'fa-light fa-users' },
];

const bookings = [
    { id: '#WY-1842', guest: 'Sofia Anderson', tour: 'Amalfi Coast Escape', date: 'Sep 18, 2026', amount: '$2,840', status: 'Confirmed', initials: 'SA', color: 'coral' },
    { id: '#WY-1841', guest: 'Noah Williams', tour: 'Japan in Autumn', date: 'Sep 21, 2026', amount: '$4,260', status: 'Pending', initials: 'NW', color: 'blue' },
    { id: '#WY-1840', guest: 'Emma Martinez', tour: 'Moroccan Discovery', date: 'Oct 04, 2026', amount: '$1,980', status: 'Confirmed', initials: 'EM', color: 'gold' },
    { id: '#WY-1839', guest: 'Liam Thompson', tour: 'Patagonia Explorer', date: 'Oct 11, 2026', amount: '$3,640', status: 'Cancelled', initials: 'LT', color: 'purple' },
];

const departures = [
    { day: '18', month: 'SEP', title: 'Amalfi Coast Escape', guests: '12 travelers', image: '/assets/img/destination/01.jpg' },
    { day: '21', month: 'SEP', title: 'Japan in Autumn', guests: '8 travelers', image: '/assets/img/destination/02.jpg' },
    { day: '04', month: 'OCT', title: 'Moroccan Discovery', guests: '16 travelers', image: '/assets/img/destination/03.jpg' },
];

const activities = [
    { icon: 'fa-light fa-circle-check', text: 'Booking #WY-1842 was confirmed', time: '18 min ago', tone: 'success' },
    { icon: 'fa-light fa-user-plus', text: 'New customer account created', time: '42 min ago', tone: 'cyan' },
    { icon: 'fa-light fa-message', text: 'Message received from Noah Williams', time: '1 hr ago', tone: 'purple' },
    { icon: 'fa-light fa-star', text: 'New 5-star review from Olivia Brown', time: '3 hrs ago', tone: 'gold' },
];

export default function AdminPage() {
    const [query, setQuery] = useState('');
    const [railOpen, setRailOpen] = useState(false);
    const [period, setPeriod] = useState('Last 30 days');

    const filteredBookings = useMemo(
        () => bookings.filter((booking) => `${booking.guest} ${booking.tour} ${booking.id}`.toLowerCase().includes(query.toLowerCase())),
        [query],
    );

    return (
        <main className="admin-shell">
            <aside className={`admin-rail ${railOpen ? 'is-open' : ''}`}>
                <div className="admin-brand">
                    <img src="/assets/img/logo-dark.png" alt="Wayouts" />
                    <span>ADMIN</span>
                </div>
                <div className="admin-rail-label">Workspace</div>
                <nav className="admin-navigation" aria-label="Admin navigation">
                    {navItems.map((item) => (
                        <Link key={item.label} href={item.href} className={item.label === 'Overview' ? 'active' : ''} onClick={() => setRailOpen(false)}>
                            <i className={item.icon}></i><span>{item.label}</span>{item.count && <b>{item.count}</b>}
                        </Link>
                    ))}
                </nav>
                <div className="admin-rail-label admin-rail-label-spaced">Manage</div>
                <nav className="admin-navigation">
                    <Link href="/admin/content"><i className="fa-light fa-pen-to-square"></i><span>Content</span></Link>
                    <Link href="/admin/analytics"><i className="fa-light fa-chart-line"></i><span>Analytics</span></Link>
                    <Link href="/admin/settings"><i className="fa-light fa-gear"></i><span>Settings</span></Link>
                </nav>
                <div className="admin-rail-footer">
                    <div className="admin-help"><i className="fa-light fa-circle-question"></i><span>Need help?<strong>Visit support center</strong></span></div>
                    <button type="button" className="admin-profile"><span className="admin-avatar">JD</span><span><strong>James Davis</strong><small>Administrator</small></span><i className="fa-light fa-ellipsis-vertical"></i></button>
                </div>
            </aside>

            <section className="admin-main">
                <header className="admin-topbar">
                    <button type="button" className="admin-menu-toggle" onClick={() => setRailOpen(!railOpen)} aria-label="Toggle navigation"><i className="fa-light fa-bars"></i></button>
                    <div className="admin-breadcrumb"><span>Workspace</span><i className="fa-light fa-chevron-right"></i><strong>Overview</strong></div>
                    <div className="admin-top-actions">
                        <label className="admin-search"><i className="fa-light fa-magnifying-glass"></i><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search bookings, tours..." /></label>
                        <button type="button" className="admin-icon-button" aria-label="Notifications"><i className="fa-light fa-bell"></i><span></span></button>
                        <div className="admin-top-avatar">JD</div>
                    </div>
                </header>

                <div className="admin-content">
                    <div className="admin-heading-row">
                        <div><p className="admin-eyebrow">Wednesday, August 26, 2026</p><h1>Good morning, James <span>✦</span></h1><p className="admin-subtitle">Here's what's happening with your travel business today.</p></div>
                        <button type="button" className="admin-primary-button"><i className="fa-light fa-plus"></i> Create new tour</button>
                    </div>

                    <div className="admin-stat-grid">
                        <article className="admin-stat-card"><div className="admin-stat-icon cyan"><i className="fa-light fa-wallet"></i></div><div><p>Total revenue</p><h2>$48,295</h2><span className="admin-trend up"><i className="fa-light fa-arrow-trend-up"></i> 12.8%</span><small>vs. previous period</small></div><i className="fa-light fa-ellipsis-vertical admin-more"></i></article>
                        <article className="admin-stat-card"><div className="admin-stat-icon coral"><i className="fa-light fa-calendar-check"></i></div><div><p>Total bookings</p><h2>184</h2><span className="admin-trend up"><i className="fa-light fa-arrow-trend-up"></i> 8.4%</span><small>vs. previous period</small></div><i className="fa-light fa-ellipsis-vertical admin-more"></i></article>
                        <article className="admin-stat-card"><div className="admin-stat-icon gold"><i className="fa-light fa-users"></i></div><div><p>New customers</p><h2>326</h2><span className="admin-trend up"><i className="fa-light fa-arrow-trend-up"></i> 18.2%</span><small>vs. previous period</small></div><i className="fa-light fa-ellipsis-vertical admin-more"></i></article>
                        <article className="admin-stat-card"><div className="admin-stat-icon purple"><i className="fa-light fa-star"></i></div><div><p>Avg. rating</p><h2>4.9 <em>/ 5</em></h2><span className="admin-trend neutral"><i className="fa-light fa-minus"></i> 0.2%</span><small>vs. previous period</small></div><i className="fa-light fa-ellipsis-vertical admin-more"></i></article>
                    </div>

                    <div className="admin-main-grid">
                        <section className="admin-panel revenue-panel"><div className="admin-panel-head"><div><h3>Revenue overview</h3><p>Track your earnings over time</p></div><select value={period} onChange={(event) => setPeriod(event.target.value)} aria-label="Revenue period"><option>Last 30 days</option><option>Last 90 days</option><option>This year</option></select></div><div className="revenue-total"><strong>$48,295</strong><span className="admin-trend up">+12.8%</span></div><div className="revenue-chart"><div className="chart-y-labels"><span>$20k</span><span>$15k</span><span>$10k</span><span>$5k</span><span>$0</span></div><div className="chart-area"><div className="chart-lines"><i></i><i></i><i></i><i></i><i></i></div><svg viewBox="0 0 700 190" preserveAspectRatio="none" role="img" aria-label="Revenue trend chart"><defs><linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#00bcd4" stopOpacity=".22" /><stop offset="100%" stopColor="#00bcd4" stopOpacity="0" /></linearGradient></defs><path d="M0 154 C42 151 56 126 92 133 S140 154 177 128 S221 86 263 105 S300 120 350 76 S400 108 438 87 S481 67 520 80 S562 45 605 59 S655 28 700 34 L700 190 L0 190Z" fill="url(#areaFill)" /><path d="M0 154 C42 151 56 126 92 133 S140 154 177 128 S221 86 263 105 S300 120 350 76 S400 108 438 87 S481 67 520 80 S562 45 605 59 S655 28 700 34" fill="none" stroke="#00bcd4" strokeWidth="3" strokeLinecap="round" /></svg><div className="chart-x-labels"><span>Jul 28</span><span>Aug 04</span><span>Aug 11</span><span>Aug 18</span><span>Aug 25</span></div></div></div></section>
                        <section className="admin-panel activity-panel"><div className="admin-panel-head"><div><h3>Recent activity</h3><p>Latest updates from your workspace</p></div><button type="button" className="admin-link-button">View all <i className="fa-light fa-arrow-right"></i></button></div><div className="activity-list">{activities.map((activity) => <div className="activity-item" key={activity.text}><span className={`activity-icon ${activity.tone}`}><i className={activity.icon}></i></span><div><strong>{activity.text}</strong><small>{activity.time}</small></div></div>)}</div></section>
                    </div>

                    <div className="admin-lower-grid">
                        <section className="admin-panel bookings-panel"><div className="admin-panel-head"><div><h3>Recent bookings</h3><p>Manage and track your latest reservations</p></div><button type="button" className="admin-link-button">View all bookings <i className="fa-light fa-arrow-right"></i></button></div><div className="admin-table-wrap"><table><thead><tr><th>Booking</th><th>Guest</th><th>Tour</th><th>Travel date</th><th>Amount</th><th>Status</th><th></th></tr></thead><tbody>{filteredBookings.map((booking) => <tr key={booking.id}><td><strong>{booking.id}</strong></td><td><span className={`table-avatar ${booking.color}`}>{booking.initials}</span>{booking.guest}</td><td>{booking.tour}</td><td>{booking.date}</td><td><strong>{booking.amount}</strong></td><td><span className={`status ${booking.status.toLowerCase()}`}>{booking.status}</span></td><td><button type="button" className="table-more" aria-label={`More options for ${booking.id}`}><i className="fa-light fa-ellipsis-vertical"></i></button></td></tr>)}</tbody></table>{filteredBookings.length === 0 && <p className="empty-state">No bookings match your search.</p>}</div></section>
                        <section className="admin-panel departures-panel"><div className="admin-panel-head"><div><h3>Upcoming departures</h3><p>Next adventures on the calendar</p></div><button type="button" className="admin-link-button" aria-label="Open calendar"><i className="fa-light fa-calendar"></i></button></div><div className="departure-list">{departures.map((departure) => <div className="departure-item" key={departure.title}><div className="departure-date"><strong>{departure.day}</strong><span>{departure.month}</span></div><img src={departure.image} alt="" /><div><strong>{departure.title}</strong><small>{departure.guests}</small></div><i className="fa-light fa-chevron-right"></i></div>)}</div></section>
                    </div>

                    <section className="admin-panel destination-panel"><div className="admin-panel-head"><div><h3>Top destinations</h3><p>Your most popular destinations by bookings</p></div><button type="button" className="admin-link-button">View report <i className="fa-light fa-arrow-right"></i></button></div><div className="destination-stats"><div className="destination-row"><span className="destination-rank">01</span><img src="/assets/img/destination/01.jpg" alt="Amalfi Coast" /><div className="destination-name"><strong>Amalfi Coast</strong><small>Italy</small></div><div className="destination-progress"><span style={{ width: '82%' }}></span></div><strong className="destination-value">82 bookings</strong></div><div className="destination-row"><span className="destination-rank">02</span><img src="/assets/img/destination/02.jpg" alt="Kyoto" /><div className="destination-name"><strong>Kyoto</strong><small>Japan</small></div><div className="destination-progress"><span style={{ width: '68%' }}></span></div><strong className="destination-value">68 bookings</strong></div><div className="destination-row"><span className="destination-rank">03</span><img src="/assets/img/destination/03.jpg" alt="Marrakech" /><div className="destination-name"><strong>Marrakech</strong><small>Morocco</small></div><div className="destination-progress"><span style={{ width: '54%' }}></span></div><strong className="destination-value">54 bookings</strong></div></div></section>
                    <footer className="admin-footer">© 2026 Wayouts Admin <span>Built for better journeys.</span></footer>
                </div>
            </section>
        </main>
    );
}
