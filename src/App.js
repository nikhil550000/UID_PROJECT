import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Navbar from './Navbar';
import MedicineList from './pages/MedicineList';
import Orders from './pages/Orders';
import './styles.css';

// HeroSlide Component
const HeroSlide = ({ image, alt, title, description }) => {
    const slideStyles = {
        width: '100%',
        height: '100vh',
        objectFit: 'cover',
        filter: 'brightness(0.8)',
    };

    const captionStyles = {
        bottom: '10px',
        right: '10px',
        left: 'auto',
        textAlign: 'right',
        width: '50%',
        textShadow: '0 2px 6px rgba(0, 0, 0, 0.5)',
    };

    const titleStyles = {
        fontSize: '2rem',
        fontWeight: 600,
        textShadow: '0 0 5px #6ee7b7',
    };

    const descriptionStyles = {
        fontSize: '1.2rem',
        fontWeight: 400,
    };

    return (
        <>
            <img src={image} alt={alt} style={slideStyles} className="d-block w-100" />
            <div style={captionStyles} className="carousel-caption">
                <h5 style={titleStyles}>{title}</h5>
                <p style={descriptionStyles}>{description}</p>
            </div>
        </>
    );
};

// HeroSection Component
const HeroSection = () => {
    const [isPaused, setIsPaused] = useState(false);

    const slides = [
        {
            image: 'https://via.placeholder.com/1920x1080?text=Herbal+Innovation',
            alt: 'Herbal Innovation',
            title: 'Innovating Natural Healthcare',
            description: 'Crafting herbal solutions with AI-driven precision.',
        },
        {
            image: 'https://via.placeholder.com/1920x1080?text=Sustainable+Future',
            alt: 'Sustainable Future',
            title: 'Committed to Sustainability',
            description: 'Eco-friendly practices for a healthier planet.',
        },
        {
            image: 'https://via.placeholder.com/1920x1080?text=Trusted+Quality',
            alt: 'Trusted Quality',
            title: 'Trusted Quality',
            description: 'Delivering safe, effective botanical therapies.',
        },
    ];

    const sectionStyles = {
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    };

    const carouselStyles = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
    };

    const contentStyles = {
        zIndex: 1,
        color: '#ffffff',
        textShadow: '0 2px 6px rgba(0, 0, 0, 0.5)',
        background: 'rgba(0, 0, 0, 0.3)',
        padding: '1.5rem',
        borderRadius: '10px',
    };

    const titleStyles = {
        fontSize: '3.5rem',
        fontWeight: 700,
        marginBottom: '1rem',
        letterSpacing: '1px',
    };

    const descriptionStyles = {
        fontSize: '1.25rem',
        fontWeight: 400,
        marginBottom: '2rem',
        opacity: 0.9,
    };

    const buttonStyles = {
        background: 'linear-gradient(45deg, #047857, #0ea5e9)',
        border: 'none',
        padding: '0.75rem 2rem',
        fontSize: '1.1rem',
        fontWeight: 600,
        borderRadius: '50px',
        transition: 'all 0.3s ease',
        color: '#fff',
        textDecoration: 'none',
    };

    const buttonHoverStyles = {
        boxShadow: '0 0 20px #6ee7b7',
        transform: 'translateY(-3px)',
    };

    return (
        <section
            style={sectionStyles}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="hero-section"
        >
            <Carousel
                id="heroCarousel"
                interval={isPaused ? null : 5000}
                controls={true}
                indicators={false}
                pause={false}
                style={carouselStyles}
            >
                {slides.map((slide, index) => (
                    <Carousel.Item key={index} className={index === 0 ? 'active' : ''}>
                        <HeroSlide
                            image={slide.image}
                            alt={slide.alt}
                            title={slide.title}
                            description={slide.description}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
            <div style={contentStyles} className="container hero-content">
                <h1 style={titleStyles}>PharmaCo: Pioneering Natural Healthcare</h1>
                <p style={descriptionStyles}>
                    Transforming lives through botanical innovations and AI-driven research
                </p>
                <a
                    href="#services"
                    style={buttonStyles}
                    onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyles)}
                    onMouseLeave={(e) => Object.assign(e.target.style, buttonStyles)}
                >
                    Discover Our Solutions
                </a>
            </div>
        </section>
    );
};

// NotificationItem Component
const NotificationItem = ({ type, title, description, badge, badgeClass, isVisible }) => {
    const itemStyles = {
        borderLeft: '5px solid transparent',
        padding: '1.25rem',
        transition: 'all 0.3s ease',
        background: 'rgba(254, 252, 232, 0.95)',
        marginBottom: '0.5rem',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        opacity: isVisible ? 1 : 0,
        height: isVisible ? 'auto' : 0,
        margin: isVisible ? '0.5rem 0' : 0,
        padding: isVisible ? '1.25rem' : 0,
        overflow: 'hidden',
    };

    const typeStyles = {
        'notification-danger': { borderLeftColor: '#ef4444' },
        'notification-warning': { borderLeftColor: '#f59e0b' },
        'notification-info': { borderLeftColor: '#0ea5e9' },
    };

    const hoverStyles = {
        background: 'linear-gradient(to right, #d4f4e2, #6ee7b7)',
        transform: 'translateX(5px)',
        boxShadow: '0 6px 20px #6ee7b7',
    };

    return (
        <div
            style={{ ...itemStyles, ...typeStyles[type] }}
            className={`notification-item ${type} ${isVisible ? '' : 'hidden'}`}
            onMouseEnter={(e) => Object.assign(e.target.style, hoverStyles)}
            onMouseLeave={(e) => Object.assign(e.target.style, { ...itemStyles, ...typeStyles[type] })}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <div style={{ fontWeight: 'bold' }}>{title}</div>
                    <div style={{ fontSize: '0.9rem', color: '#4b5563' }}>{description}</div>
                </div>
                <span
                    style={{
                        fontSize: '0.8rem',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                    }}
                    className={`badge ${badgeClass}`}
                >
                    {badge}
                </span>
            </div>
        </div>
    );
};

// NoticesSection Component
const NoticesSection = () => {
    const [filter, setFilter] = useState('all');

    const notices = [
        {
            type: 'notification-danger',
            title: 'Critical Low Stock: Herbal Pain Relief',
            description: 'Current stock: 25 units (Reorder point: 100)',
            badge: 'Action Required',
            badgeClass: 'bg-danger',
        },
        {
            type: 'notification-warning',
            title: 'Upcoming Expiry: Echinacea Extract',
            description: 'Batch #E429 expiring in 30 days',
            badge: 'Warning',
            badgeClass: 'bg-warning text-dark',
        },
        {
            type: 'notification-info',
            title: 'New Supplier Contract',
            description: 'Signed with GreenMedi on May 10',
            badge: 'Info',
            badgeClass: 'bg-info',
        },
    ];

    const sectionStyles = {
        background: '#d4f4e2',
        padding: '3rem 0',
        position: 'relative',
        overflow: 'hidden',
    };

    const beforeStyles = {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 50% 50%, rgba(110, 231, 183, 0.2), transparent 70%)',
        zIndex: -1,
    };

    const titleStyles = {
        fontWeight: 700,
        fontSize: '1.8rem',
        color: '#1f2937',
        textShadow: '0 0 10px #6ee7b7',
        position: 'relative',
        display: 'inline-block',
        textAlign: 'center',
    };

    const titleAfterStyles = {
        content: '""',
        position: 'absolute',
        bottom: '-5px',
        left: '50%',
        width: '50%',
        height: '3px',
        background: 'linear-gradient(90deg, #047857, #0ea5e9)',
        transform: 'translateX(-50%)',
    };

    const cardStyles = {
        background: 'linear-gradient(145deg, #fefce8, #d4f4e2)',
        border: '1px solid #10b981',
        borderRadius: '16px',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        padding: '1.5rem',
    };

    const cardBeforeStyles = {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '4px',
        background: 'linear-gradient(90deg, #047857, #0ea5e9)',
        opacity: 0.8,
    };

    const cardHoverStyles = {
        transform: 'translateY(-8px)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15), 0 0 15px #6ee7b7',
    };

    const buttonStyles = {
        margin: '0.5rem',
        padding: '0.5rem 1rem',
        borderRadius: '20px',
        transition: 'all 0.3s ease',
        border: '1px solid #10b981',
        background: 'transparent',
        color: '#1f2937',
        cursor: 'pointer',
    };

    const activeButtonStyles = {
        background: '#047857',
        color: '#fff',
        boxShadow: '0 0 10px #6ee7b7',
    };

    return (
        <section style={sectionStyles} className="bulletin-section">
            <div style={beforeStyles}></div>
            <div className="container">
                <h2 style={titleStyles} className="section-title mb-4 fade-in">
                    Internal Notices
                    <span style={titleAfterStyles}></span>
                </h2>
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }} className="fade-in delay-1">
                    {['all', 'notification-danger', 'notification-warning', 'notification-info'].map((type) => (
                        <button
                            key={type}
                            style={filter === type ? { ...buttonStyles, ...activeButtonStyles } : buttonStyles}
                            className={`filter-btn ${filter === type ? 'active' : ''}`}
                            onClick={() => setFilter(type)}
                        >
                            {type === 'all' ? 'All' : type.split('-')[1].charAt(0).toUpperCase() + type.split('-')[1].slice(1)}
                        </button>
                    ))}
                </div>
                <div
                    style={cardStyles}
                    className="futuristic-card notice-list fade-in delay-1"
                    onMouseEnter={(e) => Object.assign(e.target.style, cardHoverStyles)}
                    onMouseLeave={(e) => Object.assign(e.target.style, cardStyles)}
                >
                    <div style={cardBeforeStyles}></div>
                    {notices.map((notice, index) => (
                        <NotificationItem
                            key={index}
                            type={notice.type}
                            title={notice.title}
                            description={notice.description}
                            badge={notice.badge}
                            badgeClass={notice.badgeClass}
                            isVisible={filter === 'all' || filter === notice.type}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

// App Component
const App = () => {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={
                        <div className="hero-section">
                            <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="image.png" alt="Herbal Innovation" className="d-block" />
                                        <div className="carousel-caption">
                                            <h5>Innovating Natural Healthcare</h5>
                                            <p>Crafting herbal solutions with AI-driven precision.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="Sustainable Pharma Celebrating Progress and Confronting Challenges on Earth Day-2.webp" alt="Sustainable Future" className="d-block" />
                                        <div className="carousel-caption">
                                            <h5>Committed to Sustainability</h5>
                                            <p>Eco-friendly practices for a healthier planet.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="pharma-manufacturing-production-monitoring.webp" alt="Trusted Quality" className="d-block" />
                                        <div className="carousel-caption">
                                            <h5>Trusted Quality</h5>
                                            <p>Delivering safe, effective botanical therapies.</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="container hero-content">
                                <h1>PharmaCo: Pioneering Natural Healthcare</h1>
                                <p>Transforming lives through botanical innovations and AI-driven research</p>
                                <a href="/login" className="btn">Discover Our Solutions</a>
                            </div>
                        </div>
                    } />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={
                        <>
                            <Navbar />
                            <Home />
                        </>
                    } />
                    <Route path="/medicinelist" element={
                        <>
                            <Navbar />
                            <MedicineList />
                        </>
                    } />
                    <Route path="/orders" element={
                        <>
                            <Navbar />
                            <Orders />
                        </>
                    } />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;