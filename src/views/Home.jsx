import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'
import CardLayout from '../components/CardLayout';
import RootLayout from '../components/RootLayout';

const Home = () => {
    return (
        <>
            <RootLayout>
                <Col md={4}>
                    <Card className="bg-dark text-light border-dark rounded p-2 m-2 transition my-5">
                        <Card.Title className="text-center" style={{ fontSize: 40 }}>A rebel's approach to changing <span className="d-inline" style={{ color: 'rgb(31, 255, 160)' }}>SCI</span> care</Card.Title>
                        <Card.Body>
                            <Card.Text style={{ fontSize: 20 }}>
                                Changing acute care and care in the chronic stages of <span className="d-inline" style={{ color: 'rgb(31, 255, 160)' }}>spinal cord injury</span> through using E-Stim, ketogenic dietary strategies, and gut microbiome modifications.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="bg-dark border-dark rounded m-2 p-2 transition">
                        <Card.Img className="background-img">

                        </Card.Img>
                    </Card>
                </Col>
            </RootLayout>
            <Container>
                <Row className="my-5 d-flex align-items-center justify-content-center">
                    <h1 className="display-1">Who we are</h1>
                    <Col md={6}>
                        <Card className="bg-dark border-dark text-light rounded shadow m-2 p-2 transition">
                            <Card.Title className="text-center mt-2" style={{ fontSize: 40 }}>Who we are</Card.Title>
                            <Card.Body>
                                <Card.Text>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis excepturi commodi praesentium laboriosam! Blanditiis magnam molestias quod expedita esse. Fuga optio, numquam blanditiis beatae maiores sed temporibus assumenda culpa quos.</span>
                                </Card.Text>
                            </Card.Body>
                            <div className="m-5">
                                <a href="/people" className="join-button m-5">our team</a>
                            </div>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="bg-dark border-dark text-light rounded shadow m-2 p-2 transition">
                            <Card.Title className="text-center mt-2" style={{ fontSize: 40 }}>We are a team on a mission</Card.Title>
                            <Card.Body>
                                <div className="wheelchair-img"></div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <RootLayout>
                <h1 className="text-center text-light display-4 mt-4">Our Research</h1>
                <Row xs={1} md={2} className="g-4 transition my-4">
                    <Col>
                        <CardLayout
                            title="Research paper 1"
                            content="blah blah blah"
                            link="www.google.com"
                        />
                    </Col>
                    <Col>
                        <CardLayout
                            title="Research paper 2"
                            content="blah blah blah"
                            link="www.google.com"
                        />
                    </Col>
                    <Col>
                        <CardLayout
                            title="Research paper 3"
                            content="blah blah blah"
                            link="www.google.com"
                        />
                    </Col>
                    <Col>
                        <CardLayout
                            title="Research paper 4"
                            content="blah blah blah"
                            link="www.google.com"
                        />
                    </Col>
                </Row>
            </RootLayout>
            <Container>
                <Row className="my-5 d-flex align-items-center justify-content-center">
                    <h1 className="display-1">People and Values</h1>
                    <Col md={6}>
                        <Card className="bg-dark border-dark text-light rounded shadow m-2 p-2 transition">
                            <Card.Title className="text-center mt-2" style={{ fontSize: 40 }}>People and Values</Card.Title>
                            <Card.Body>
                                <Card.Text>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis excepturi commodi praesentium laboriosam! Blanditiis magnam molestias quod expedita esse. Fuga optio, numquam blanditiis beatae maiores sed temporibus assumenda culpa quos.</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="bg-dark border-dark text-light rounded shadow m-2 p-2 transition">
                            <Card.Title className="text-center mt-2" style={{ fontSize: 40 }}>Here you can see all of the people we help and our values</Card.Title>
                            <Card.Body>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <RootLayout>
                <h1 className="text-center text-light display-4 mt-4">Recent News</h1>
                <Row xs={1} md={2} className="g-4 transition my-4">
                    <Col>
                        <CardLayout
                            title="News article 1"
                            content="blah blah blah"
                            link="www.google.com"
                        />
                    </Col>
                    <Col>
                        <CardLayout
                            title="News article 2"
                            content="blah blah blah"
                            link="www.google.com"
                        />
                    </Col>
                    <Col>
                        <CardLayout
                            title="News article 3"
                            content="blah blah blah"
                            link="www.google.com"
                        />
                    </Col>
                    <Col>
                        <CardLayout
                            title="News article 4"
                            content="blah blah blah"
                            link="www.google.com"
                        />
                    </Col>
                </Row>
            </RootLayout>
            <Container>
                <Row className="my-5 d-flex align-items-center justify-content-center">
                    <h1 className="display-1">Resources</h1>
                    <Col md={6}>
                        <Card className="bg-dark border-dark text-light rounded shadow m-2 p-2 transition">
                            <Card.Title className="text-center mt-2" style={{ fontSize: 40 }}>Resources</Card.Title>
                            <Card.Body>
                                <Card.Text>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis excepturi commodi praesentium laboriosam! Blanditiis magnam molestias quod expedita esse. Fuga optio, numquam blanditiis beatae maiores sed temporibus assumenda culpa quos.</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="bg-dark border-dark text-light rounded shadow m-2 p-2 transition">
                            <Card.Title className="text-center mt-2" style={{ fontSize: 40 }}>Here you can see all of the resources</Card.Title>
                            <Card.Body>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;
