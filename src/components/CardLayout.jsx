import React from 'react';
import { Card } from 'react-bootstrap';

const CardLayout = ({title, content, link}) => {
    return (
        <Card className="bg-dark text-light p-2 m-2">
            <Card.Title className="mt-3" style={{fontSize: 30}}>{title}</Card.Title>
            <Card.Body>
                <Card.Text>
                    <span>{content}</span>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <a className="text-decoration-none" href={link} target="_blank" rel="noopener noreferrer">{link}</a>
            </Card.Footer>
        </Card>
    )
}

export default CardLayout;
