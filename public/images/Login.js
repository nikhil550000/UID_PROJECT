import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        name: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    const cardStyles = {
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '15px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        padding: '2rem'
    };

    const inputStyles = {
        background: 'rgba(255, 255, 255, 0.9)',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        padding: '0.75rem',
        marginBottom: '1rem'
    };

    const buttonStyles = {
        background: 'linear-gradient(45deg, #047857, #0ea5e9)',
        border: 'none',
        padding: '0.75rem 2rem',
        fontSize: '1.1rem',
        fontWeight: 600,
        borderRadius: '50px',
        width: '100%',
        marginTop: '1rem'
    };

    return (
        <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center" 
                 style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 100%)' }}>
            <Row className="w-100 justify-content-center">
                <Col xs={12} md={6} lg={4}>
                    <Card style={cardStyles}>
                        <Card.Body>
                            <h2 className="text-center mb-4" style={{ color: '#047857' }}>
                                {isLogin ? 'Welcome Back' : 'Create Account'}
                            </h2>
                            <Form onSubmit={handleSubmit}>
                                {!isLogin && (
                                    <Form.Group>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            placeholder="Full Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            style={inputStyles}
                                            required
                                        />
                                    </Form.Group>
                                )}
                                <Form.Group>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        style={inputStyles}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        style={inputStyles}
                                        required
                                    />
                                </Form.Group>
                                {!isLogin && (
                                    <Form.Group>
                                        <Form.Control
                                            type="password"
                                            name="confirmPassword"
                                            placeholder="Confirm Password"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            style={inputStyles}
                                            required
                                        />
                                    </Form.Group>
                                )}
                                <Button type="submit" style={buttonStyles}>
                                    {isLogin ? 'Sign In' : 'Create Account'}
                                </Button>
                            </Form>
                            <div className="text-center mt-3">
                                <p className="mb-0">
                                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                                    <Button
                                        variant="link"
                                        onClick={() => setIsLogin(!isLogin)}
                                        style={{ color: '#047857', textDecoration: 'none' }}
                                    >
                                        {isLogin ? 'Register' : 'Login'}
                                    </Button>
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login; 