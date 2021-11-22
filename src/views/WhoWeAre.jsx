import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'

const WhoWeAre = () => {
    return (
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
    )
}

export default WhoWeAre;
