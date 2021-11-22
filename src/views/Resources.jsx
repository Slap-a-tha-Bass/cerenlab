import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Resources = () => {
    return (
        <Container>
            <Row className="my-5 d-flex align-items-center justify-content-center my-4">
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
    )
}

export default Resources;
