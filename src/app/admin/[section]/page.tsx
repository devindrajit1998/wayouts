'use client';

import AdminShell from '@/components/AdminShell';
import { notFound } from 'next/navigation';
import React, { useState } from 'react';

const bookings = [
    ['#WY-1842', 'Sofia Anderson', 'Amalfi Coast Escape', 'Sep 18, 2026', '$2,840', 'Confirmed'],
    ['#WY-1841', 'Noah Williams', 'Japan in Autumn', 'Sep 21, 2026', '$4,260', 'Pending'],
    ['#WY-1840', 'Emma Martinez', 'Moroccan Discovery', 'Oct 04, 2026', '$1,980', 'Confirmed'],
    ['#WY-1839', 'Liam Thompson', 'Patagonia Explorer', 'Oct 11, 2026', '$3,640', 'Cancelled'],
    ['#WY-1838', 'Mia Robinson', 'Greek Island Odyssey', 'Oct 16, 2026', '$3,150', 'Confirmed'],
    ['#WY-1837', 'Ethan Clark', 'Bali Wellness Retreat', 'Oct 20, 2026', '$2,420', 'Pending'],
];

const tours = [
    ['Amalfi Coast Escape', 'Italy', '/assets/img/destination/01.jpg', '7 days', '$2,840', '18', 'Published'],
    ['Japan in Autumn', 'Japan', '/assets/img/destination/02.jpg', '10 days', '$4,260', '12', 'Published'],
    ['Moroccan Discovery', 'Morocco', '/assets/img/destination/03.jpg', '8 days', '$1,980', '24', 'Published'],
    ['Patagonia Explorer', 'Argentina', '/assets/img/destination/05.jpg', '12 days', '$3,640', '8', 'Draft'],
    ['Greek Island Odyssey', 'Greece', '/assets/img/destination/06.jpg', '9 days', '$3,150', '16', 'Published'],
    ['Bali Wellness Retreat', 'Indonesia', '/assets/img/destination/07.jpg', '6 days', '$2,420', '14', 'Paused'],
];

const customers = [
    ['SA', 'Sofia Anderson', 'sofia@example.com', 'United States', '8', '$14,820', 'VIP'],
    ['NW', 'Noah Williams', 'noah@example.com', 'United Kingdom', '4', '$8,360', 'Active'],
    ['EM', 'Emma Martinez', 'emma@example.com', 'Spain', '6', '$11,240', 'Active'],
    ['LT', 'Liam Thompson', 'liam@example.com', 'Australia', '2', '$4,120', 'New'],
    ['MR', 'Mia Robinson', 'mia@example.com', 'Canada', '5', '$9,780', 'Active'],
];

const destinations = [
    ['Amalfi Coast', 'Italy', '/assets/img/destination/01.jpg', '12 tours', '82 bookings', 'Featured'],
    ['Kyoto', 'Japan', '/assets/img/destination/02.jpg', '8 tours', '68 bookings', 'Featured'],
    ['Marrakech', 'Morocco', '/assets/img/destination/03.jpg', '6 tours', '54 bookings', 'Active'],
    ['Patagonia', 'Argentina', '/assets/img/destination/05.jpg', '5 tours', '41 bookings', 'Active'],
    ['Santorini', 'Greece', '/assets/img/destination/06.jpg', '9 tours', '48 bookings', 'Featured'],
    ['Bali', 'Indonesia', '/assets/img/destination/07.jpg', '11 tours', '63 bookings', 'Active'],
];

const contentItems = [
    ['Top 10 Hidden Gems in Italy', 'Blog article', 'Aug 24, 2026', 'Olivia Grant', 'Published'],
    ['Why Travel With Wayouts', 'Homepage section', 'Aug 22, 2026', 'James Davis', 'Published'],
    ['Autumn in Japan: A Complete Guide', 'Blog article', 'Aug 20, 2026', 'Maya Chen', 'Draft'],
    ['Summer Escape Campaign', 'Landing page', 'Aug 18, 2026', 'Olivia Grant', 'Review'],
    ['Flexible Booking Policy', 'Policy page', 'Aug 14, 2026', 'James Davis', 'Published'],
];

function Heading({ eyebrow, title, text, action, icon = 'fa-plus' }: { eyebrow: string; title: string; text: string; action: string; icon?: string }) {
    return <div className="admin-heading-row"><div><p className="admin-eyebrow">{eyebrow}</p><h1>{title}</h1><p className="admin-subtitle">{text}</p></div><button className="admin-primary-button" type="button"><i className={`fa-light ${icon}`}></i>{action}</button></div>;
}

function Filters({ tabs }: { tabs: string[] }) {
    const [active, setActive] = useState(tabs[0]);
    return <div className="management-toolbar"><div className="management-tabs">{tabs.map(tab => <button type="button" className={active === tab ? 'active' : ''} onClick={() => setActive(tab)} key={tab}>{tab}</button>)}</div><div className="management-actions"><button type="button"><i className="fa-light fa-filter"></i> Filter</button><button type="button"><i className="fa-light fa-arrow-down-to-line"></i> Export</button></div></div>;
}

function Summary({ data }: { data: Array<[string, string, string, string]> }) {
    return <div className="section-summary-grid">{data.map(([label, value, note, tone]) => <article className="section-summary" key={label}><span className={`summary-dot ${tone}`}></span><div><small>{label}</small><strong>{value}</strong><em>{note}</em></div></article>)}</div>;
}

function BookingsPage() {
    return <AdminShell title="Bookings" searchPlaceholder="Search bookings..."><Heading eyebrow="Reservations" title="Bookings" text="Review reservations, payments, and upcoming travel dates." action="New booking" /><Summary data={[["All bookings", '184', 'This month', 'cyan'], ['Confirmed', '148', '80.4% of total', 'green'], ['Pending', '24', 'Needs attention', 'gold'], ['Cancelled', '12', '6.5% of total', 'coral']]} /><section className="admin-panel management-panel"><Filters tabs={['All bookings', 'Confirmed', 'Pending', 'Cancelled']} /><div className="admin-table-wrap management-table"><table><thead><tr><th>Booking</th><th>Guest</th><th>Tour</th><th>Travel date</th><th>Amount</th><th>Status</th><th></th></tr></thead><tbody>{bookings.map((row, i) => <tr key={row[0]}><td><strong>{row[0]}</strong></td><td><span className={`table-avatar ${['coral', 'blue', 'gold', 'purple'][i % 4]}`}>{row[1].split(' ').map(x => x[0]).join('')}</span>{row[1]}</td><td>{row[2]}</td><td>{row[3]}</td><td><strong>{row[4]}</strong></td><td><span className={`status ${row[5].toLowerCase()}`}>{row[5]}</span></td><td><button className="table-more"><i className="fa-light fa-ellipsis-vertical"></i></button></td></tr>)}</tbody></table></div><div className="table-pagination"><span>Showing 1–6 of 184 bookings</span><div><button>‹</button><button className="active">1</button><button>2</button><button>3</button><button>›</button></div></div></section></AdminShell>;
}

function ToursPage() {
    return <AdminShell title="Tours" searchPlaceholder="Search tours..."><Heading eyebrow="Tour catalogue" title="Tours & packages" text="Build, publish, and manage unforgettable travel experiences." action="Create tour" /><Summary data={[["Active tours", '42', 'Across 18 destinations', 'cyan'], ['Upcoming departures', '28', 'Next 90 days', 'green'], ['Draft tours', '7', 'Waiting to publish', 'gold'], ['Average occupancy', '78%', 'Up 6.2%', 'purple']]} /><Filters tabs={['All tours', 'Published', 'Draft', 'Paused']} /><div className="tour-admin-grid">{tours.map(tour => <article className="tour-admin-card" key={tour[0]}><div className="tour-card-image"><img src={tour[2]} alt={tour[0]} /><span className={`status ${tour[6].toLowerCase()}`}>{tour[6]}</span><button aria-label="Tour options"><i className="fa-light fa-ellipsis"></i></button></div><div className="tour-card-body"><small><i className="fa-light fa-location-dot"></i>{tour[1]}</small><h3>{tour[0]}</h3><div className="tour-card-meta"><span><i className="fa-light fa-clock"></i>{tour[3]}</span><span><i className="fa-light fa-users"></i>{tour[5]} seats</span></div><div className="tour-card-footer"><strong>{tour[4]} <small>/ person</small></strong><button type="button">Edit tour <i className="fa-light fa-arrow-right"></i></button></div></div></article>)}</div></AdminShell>;
}

function DestinationsPage() {
    return <AdminShell title="Destinations" searchPlaceholder="Search destinations..."><Heading eyebrow="Catalogue" title="Destinations" text="Curate destinations and connect them to your travel packages." action="Add destination" /><div className="destination-admin-grid">{destinations.map((item, i) => <article className="destination-admin-card" key={item[0]}><img src={item[2]} alt={item[0]} /><div className="destination-card-overlay"></div><span className="destination-order">0{i + 1}</span><button><i className="fa-light fa-ellipsis"></i></button><div className="destination-card-copy"><span className={`status ${item[5].toLowerCase()}`}>{item[5]}</span><h2>{item[0]}</h2><p><i className="fa-light fa-location-dot"></i>{item[1]}</p><div><strong>{item[3]}</strong><strong>{item[4]}</strong></div></div></article>)}</div></AdminShell>;
}

function CustomersPage() {
    return <AdminShell title="Customers" searchPlaceholder="Search customers..."><Heading eyebrow="Customer directory" title="Customers" text="Understand your travelers and nurture lasting relationships." action="Add customer" /><Summary data={[["Total customers", '1,286', '+18.2% this month', 'cyan'], ['Returning guests', '64%', '822 customers', 'green'], ['VIP travelers', '86', 'Top-value segment', 'purple'], ['Avg. lifetime value', '$4,820', 'Per customer', 'gold']]} /><section className="admin-panel management-panel"><Filters tabs={['All customers', 'VIP', 'Active', 'New']} /><div className="admin-table-wrap management-table"><table><thead><tr><th>Customer</th><th>Location</th><th>Bookings</th><th>Lifetime value</th><th>Segment</th><th></th></tr></thead><tbody>{customers.map((row, i) => <tr key={row[1]}><td><span className={`table-avatar ${['coral', 'blue', 'gold', 'purple'][i % 4]}`}>{row[0]}</span><span className="customer-cell"><strong>{row[1]}</strong><small>{row[2]}</small></span></td><td>{row[3]}</td><td>{row[4]}</td><td><strong>{row[5]}</strong></td><td><span className={`customer-segment ${row[6].toLowerCase()}`}>{row[6]}</span></td><td><button className="table-more"><i className="fa-light fa-ellipsis-vertical"></i></button></td></tr>)}</tbody></table></div></section></AdminShell>;
}

function ContentPage() {
    const [items, setItems] = useState([
        { id: '1', title: 'Top 10 Hidden Gems in Italy', type: 'Blog article', date: 'Aug 24, 2026', author: 'Olivia Grant', status: 'Published', views: '14.2K' },
        { id: '2', title: 'Why Travel With Wayouts', type: 'Homepage section', date: 'Aug 22, 2026', author: 'James Davis', status: 'Published', views: '28.6K' },
        { id: '3', title: 'Autumn in Japan: Complete Guide', type: 'Blog article', date: 'Aug 20, 2026', author: 'Maya Chen', status: 'Draft', views: '—' },
        { id: '4', title: 'Summer Escape Campaign', type: 'Landing page', date: 'Aug 18, 2026', author: 'Olivia Grant', status: 'In Review', views: '—' },
        { id: '5', title: 'Flexible Booking & Refund Policy', type: 'Policy page', date: 'Aug 14, 2026', author: 'James Davis', status: 'Published', views: '8.4K' },
        { id: '6', title: 'Exploring the Maldives Atolls', type: 'Blog article', date: 'Aug 10, 2026', author: 'Olivia Grant', status: 'Published', views: '19.1K' },
    ]);
    const [showModal, setShowModal] = useState(false);
    const [filterTab, setFilterTab] = useState('All');
    const [newTitle, setNewTitle] = useState('');
    const [newType, setNewType] = useState('Blog article');
    const [newStatus, setNewStatus] = useState('Published');

    const handleCreate = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTitle.trim()) return;
        const newItem = {
            id: String(Date.now()),
            title: newTitle.trim(),
            type: newType,
            date: 'Today',
            author: 'James Davis',
            status: newStatus,
            views: '0',
        };
        setItems([newItem, ...items]);
        setNewTitle('');
        setShowModal(false);
    };

    const handleDelete = (id: string) => {
        setItems(items.filter(item => item.id !== id));
    };

    const filteredItems = items.filter(item => {
        if (filterTab === 'All') return true;
        if (filterTab === 'Published') return item.status === 'Published';
        if (filterTab === 'Drafts') return item.status === 'Draft';
        if (filterTab === 'In review') return item.status === 'In Review';
        return true;
    });

    return (
        <AdminShell title="Content Manager" searchPlaceholder="Search articles, pages, campaigns...">
            <div className="admin-heading-row">
                <div>
                    <p className="admin-eyebrow">Website & Stories</p>
                    <h1>Content Manager</h1>
                    <p className="admin-subtitle">Create, edit, and organize published stories, homepage banners, and destination guides.</p>
                </div>
                <button className="admin-primary-button" type="button" onClick={() => setShowModal(true)}>
                    <i className="fa-light fa-plus"></i>Create new content
                </button>
            </div>

            <Summary data={[
                ["Total Content", String(items.length), 'Active assets', 'cyan'],
                ['Published', String(items.filter(x => x.status === 'Published').length), 'Live on site', 'green'],
                ['Drafts', String(items.filter(x => x.status === 'Draft').length), 'Work in progress', 'gold'],
                ['Total Readers', '70.3K', 'Past 30 days', 'purple']
            ]} />

            {/* Quick Action Cards */}
            <div className="content-quick-grid">
                <button type="button" onClick={() => { setNewType('Blog article'); setShowModal(true); }}>
                    <i className="fa-light fa-file-lines"></i>
                    <span><strong>Write blog article</strong><small>Share a destination story</small></span>
                    <i className="fa-light fa-arrow-right"></i>
                </button>
                <button type="button" onClick={() => { setNewType('Landing page'); setShowModal(true); }}>
                    <i className="fa-light fa-browser"></i>
                    <span><strong>New promotional campaign</strong><small>Build a seasonal landing page</small></span>
                    <i className="fa-light fa-arrow-right"></i>
                </button>
                <button type="button" onClick={() => { setNewType('Homepage section'); setShowModal(true); }}>
                    <i className="fa-light fa-images"></i>
                    <span><strong>Homepage featured banners</strong><small>Curate top cards & promos</small></span>
                    <i className="fa-light fa-arrow-right"></i>
                </button>
            </div>

            {/* Management Table & Filter Tabs */}
            <section className="admin-panel management-panel">
                <div className="management-toolbar">
                    <div className="management-tabs">
                        {['All', 'Published', 'Drafts', 'In review'].map(tab => (
                            <button
                                type="button"
                                key={tab}
                                className={filterTab === tab ? 'active' : ''}
                                onClick={() => setFilterTab(tab)}
                            >
                                {tab} ({tab === 'All' ? items.length : items.filter(x => x.status.toLowerCase().includes(tab.toLowerCase().slice(0, 4))).length})
                            </button>
                        ))}
                    </div>
                </div>

                <div className="admin-table-wrap management-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Author</th>
                                <th>Date</th>
                                <th>Views</th>
                                <th>Status</th>
                                <th style={{ textAlign: 'right' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredItems.map(item => (
                                <tr key={item.id}>
                                    <td><strong>{item.title}</strong></td>
                                    <td><span className="badge-tag">{item.type}</span></td>
                                    <td>{item.author}</td>
                                    <td>{item.date}</td>
                                    <td>{item.views}</td>
                                    <td>
                                        <span className={`status ${item.status.toLowerCase().replace(' ', '-')}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td style={{ textAlign: 'right' }}>
                                        <button
                                            type="button"
                                            className="table-btn-delete"
                                            onClick={() => handleDelete(item.id)}
                                            title="Delete content"
                                        >
                                            <i className="fa-light fa-trash-can"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Create Content Modal */}
            {showModal && (
                <div className="admin-modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="admin-modal-box" onClick={e => e.stopPropagation()}>
                        <div className="admin-modal-head">
                            <h3>Create New Content</h3>
                            <button type="button" onClick={() => setShowModal(false)}><i className="fa-light fa-xmark"></i></button>
                        </div>
                        <form onSubmit={handleCreate} className="admin-modal-form">
                            <label>
                                <span>Content Title</span>
                                <input
                                    type="text"
                                    placeholder="e.g. 10 Best Hidden Beaches in Greece"
                                    value={newTitle}
                                    onChange={e => setNewTitle(e.target.value)}
                                    required
                                    autoFocus
                                />
                            </label>
                            <div className="form-row-2">
                                <label>
                                    <span>Content Type</span>
                                    <select value={newType} onChange={e => setNewType(e.target.value)}>
                                        <option value="Blog article">Blog article</option>
                                        <option value="Landing page">Landing page</option>
                                        <option value="Homepage section">Homepage section</option>
                                        <option value="Policy page">Policy page</option>
                                    </select>
                                </label>
                                <label>
                                    <span>Initial Status</span>
                                    <select value={newStatus} onChange={e => setNewStatus(e.target.value)}>
                                        <option value="Published">Published</option>
                                        <option value="Draft">Draft</option>
                                        <option value="In Review">In Review</option>
                                    </select>
                                </label>
                            </div>
                            <div className="admin-modal-actions">
                                <button type="button" className="btn-cancel" onClick={() => setShowModal(false)}>Cancel</button>
                                <button type="submit" className="admin-primary-button">Publish / Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AdminShell>
    );
}

function AnalyticsPage() {
    const bars = [42, 58, 51, 72, 64, 83, 77, 92, 81, 96, 88, 100];
    return <AdminShell title="Analytics" searchPlaceholder="Search reports..."><Heading eyebrow="Performance" title="Analytics" text="Measure growth, conversion, and the journeys your guests love." action="Download report" icon="fa-arrow-down-to-line" /><Summary data={[["Gross revenue", '$148,290', '+16.8% vs last year', 'cyan'], ['Conversion rate', '4.82%', '+0.64% this period', 'green'], ['Website visitors', '92.4K', '+22.1% this period', 'purple'], ['Avg. booking value', '$2,684', '+8.3% this period', 'gold']]} /><div className="analytics-grid"><section className="admin-panel analytics-chart-card"><div className="admin-panel-head"><div><h3>Booking performance</h3><p>Monthly bookings and revenue trend</p></div><select><option>Last 12 months</option><option>This year</option></select></div><div className="analytics-bars">{bars.map((height, i) => <div key={i}><span style={{ height: `${height}%` }}></span><small>{['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'][i]}</small></div>)}</div></section><section className="admin-panel source-card"><div className="admin-panel-head"><div><h3>Booking sources</h3><p>Where customers find Wayouts</p></div></div>{[['Organic search', '38%', 'cyan'], ['Social media', '26%', 'purple'], ['Direct traffic', '21%', 'coral'], ['Referrals', '15%', 'gold']].map(x => <div className="source-row" key={x[0]}><span className={`summary-dot ${x[2]}`}></span><strong>{x[0]}</strong><b>{x[1]}</b><div><span className={x[2]} style={{ width: x[1] }}></span></div></div>)}</section></div><section className="admin-panel analytics-destinations"><div className="admin-panel-head"><div><h3>Top performing tours</h3><p>Ranked by revenue in the selected period</p></div><button className="admin-link-button">Full report <i className="fa-light fa-arrow-right"></i></button></div>{tours.slice(0, 4).map((t, i) => <div className="analytics-tour" key={t[0]}><span>0{i + 1}</span><img src={t[2]} alt="" /><div><strong>{t[0]}</strong><small>{t[1]}</small></div><b>{[82, 68, 54, 41][i]} bookings</b><strong>{['$42,680', '$37,420', '$28,910', '$22,640'][i]}</strong></div>)}</section></AdminShell>;
}

function SettingsPage() {
    const [saved, setSaved] = useState(false);
    const [email, setEmail] = useState(true);
    const [booking, setBooking] = useState(true);
    return <AdminShell title="Settings"><Heading eyebrow="Configuration" title="Settings" text="Manage your workspace preferences and business details." action={saved ? 'Changes saved' : 'Save changes'} icon={saved ? 'fa-check' : 'fa-floppy-disk'} /><div className="settings-layout"><aside className="settings-nav"><button className="active"><i className="fa-light fa-building"></i>Business profile</button><button><i className="fa-light fa-bell"></i>Notifications</button><button><i className="fa-light fa-credit-card"></i>Payments</button><button><i className="fa-light fa-users-gear"></i>Team & roles</button><button><i className="fa-light fa-shield-check"></i>Security</button></aside><section className="admin-panel settings-panel"><div className="settings-title"><h3>Business profile</h3><p>These details appear on booking confirmations and customer communications.</p></div><form onSubmit={e => { e.preventDefault(); setSaved(true) }}><div className="settings-logo"><img src="/assets/img/logo.png" alt="Wayouts" /><div><strong>Company logo</strong><small>PNG, JPG or SVG. Maximum 2 MB.</small><button type="button">Change logo</button></div></div><div className="settings-form-grid"><label>Business name<input defaultValue="Wayouts Travel Co." /></label><label>Support email<input type="email" defaultValue="hello@wayouts.com" /></label><label>Phone number<input defaultValue="+1 212 555 0184" /></label><label>Default currency<select defaultValue="USD"><option>USD — US Dollar</option><option>EUR — Euro</option><option>GBP — British Pound</option></select></label><label className="full">Business address<input defaultValue="125 Explorer Avenue, New York, NY 10001" /></label><label>Timezone<select defaultValue="est"><option value="est">Eastern Time (UTC-05:00)</option><option>Central European Time</option></select></label><label>Booking reference prefix<input defaultValue="WY" /></label></div><div className="settings-notifications"><h4>Admin notifications</h4><Toggle label="Email notifications" text="Receive daily business summaries and alerts." value={email} setValue={setEmail} /><Toggle label="New booking alerts" text="Notify the team when a new reservation arrives." value={booking} setValue={setBooking} /></div><div className="settings-save"><button type="submit" className="admin-primary-button"><i className="fa-light fa-floppy-disk"></i>Save changes</button></div></form></section></div></AdminShell>;
}

function Toggle({ label, text, value, setValue }: { label: string; text: string; value: boolean; setValue: (v: boolean) => void }) { return <div className="toggle-row"><div><strong>{label}</strong><small>{text}</small></div><button type="button" className={`toggle ${value ? 'on' : ''}`} onClick={() => setValue(!value)}><span></span></button></div> }

export default function AdminSectionPage({ params }: { params: { section: string } }) {
    const pages: Record<string, React.ReactNode> = { bookings: <BookingsPage />, tours: <ToursPage />, destinations: <DestinationsPage />, customers: <CustomersPage />, content: <ContentPage />, analytics: <AnalyticsPage />, settings: <SettingsPage /> };
    return pages[params.section] ?? notFound();
}
