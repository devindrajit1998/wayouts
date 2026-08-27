'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const workspace = [
    { label: 'Overview', href: '/admin', icon: 'fa-light fa-grid-2' },
    { label: 'Bookings', href: '/admin/bookings', icon: 'fa-light fa-calendar-check', count: '12' },
    { label: 'Tours', href: '/admin/tours', icon: 'fa-light fa-map-location-dot' },
    { label: 'Destinations', href: '/admin/destinations', icon: 'fa-light fa-earth-americas' },
    { label: 'Customers', href: '/admin/customers', icon: 'fa-light fa-users' },
];

const manage = [
    { label: 'Content', href: '/admin/content', icon: 'fa-light fa-pen-to-square' },
    { label: 'Analytics', href: '/admin/analytics', icon: 'fa-light fa-chart-line' },
    { label: 'Settings', href: '/admin/settings', icon: 'fa-light fa-gear' },
];

export default function AdminShell({ title, searchPlaceholder = 'Search workspace...', children }: { title: string; searchPlaceholder?: string; children: React.ReactNode }) {
    const pathname = usePathname();
    const [railOpen, setRailOpen] = useState(false);

    const nav = (items: typeof workspace) => items.map((item) => (
        <Link key={item.href} href={item.href} className={pathname === item.href ? 'active' : ''} onClick={() => setRailOpen(false)}>
            <i className={item.icon}></i><span>{item.label}</span>{item.count && <b>{item.count}</b>}
        </Link>
    ));

    return (
        <main className="admin-shell">
            <aside className={`admin-rail ${railOpen ? 'is-open' : ''}`}>
                <Link href="/admin" className="admin-brand"><img src="/assets/img/logo-dark.png" alt="Wayouts" /><span>ADMIN</span></Link>
                <div className="admin-rail-label">Workspace</div>
                <nav className="admin-navigation" aria-label="Admin workspace navigation">{nav(workspace)}</nav>
                <div className="admin-rail-label admin-rail-label-spaced">Manage</div>
                <nav className="admin-navigation" aria-label="Admin management navigation">{nav(manage)}</nav>
                <div className="admin-rail-footer">
                    <div className="admin-help"><i className="fa-light fa-circle-question"></i><span>Need help?<strong>Visit support center</strong></span></div>
                    <button type="button" className="admin-profile"><span className="admin-avatar">JD</span><span><strong>James Davis</strong><small>Administrator</small></span><i className="fa-light fa-ellipsis-vertical"></i></button>
                </div>
            </aside>
            {railOpen && <button className="admin-rail-backdrop" onClick={() => setRailOpen(false)} aria-label="Close navigation" />}
            <section className="admin-main">
                <header className="admin-topbar">
                    <button type="button" className="admin-menu-toggle" onClick={() => setRailOpen(!railOpen)} aria-label="Toggle navigation"><i className="fa-light fa-bars"></i></button>
                    <div className="admin-breadcrumb"><span>Workspace</span><i className="fa-light fa-chevron-right"></i><strong>{title}</strong></div>
                    <div className="admin-top-actions">
                        <label className="admin-search"><i className="fa-light fa-magnifying-glass"></i><input placeholder={searchPlaceholder} /></label>
                        <button type="button" className="admin-icon-button" aria-label="Notifications"><i className="fa-light fa-bell"></i><span></span></button>
                        <div className="admin-top-avatar">JD</div>
                    </div>
                </header>
                <div className="admin-content admin-section-content">{children}<footer className="admin-footer">© 2026 Wayouts Admin <span>Built for better journeys.</span></footer></div>
            </section>
        </main>
    );
}
