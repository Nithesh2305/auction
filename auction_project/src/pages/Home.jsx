import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import CustomNavbar from '../components/Navbar';

// Import images
import watchImage from '../assets/watch.jpg';
import vaseImage from '../assets/vase.jpg';
import paintingImage from '../assets/painting.jpg';

const Home = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Vintage Watch', description: 'A classic vintage watch.', currentBid: 120, image: watchImage },
    { id: 2, name: 'Antique Vase', description: 'An elegant antique vase.', currentBid: 200, image: vaseImage },
    { id: 3, name: 'Rare Painting', description: 'A rare painting by a famous artist.', currentBid: 500, image: paintingImage },
  ]);

  const [bidAmount, setBidAmount] = useState('');

  const handleBid = (itemId) => {
    const updatedItems = items.map(item =>
      item.id === itemId ? { ...item, currentBid: item.currentBid + parseInt(bidAmount) } : item
    );
    setItems(updatedItems);
    setBidAmount('');
  };

  return (
    <div>
      <CustomNavbar />
      <Container className="mt-5">
        <Row className="g-4">
          {items.map(item => (
            <Col key={item.id} md={4} sm={6} xs={12}>
              <Card className="h-100 shadow-sm card-custom">
                <Card.Img variant="top" src={item.image} alt={item.name} className="card-img" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="card-title">{item.name}</Card.Title>
                  <Card.Text className="card-description">{item.description}</Card.Text>
                  <Card.Text className="card-bid mt-auto">
                    <strong>Current Bid:</strong> ${item.currentBid}
                  </Card.Text>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="number"
                      placeholder="Enter your bid"
                      value={bidAmount}
                      onChange={(e) => setBidAmount(e.target.value)}
                      className="bid-input"
                    />
                  </Form.Group>
                  <Button variant="primary" onClick={() => handleBid(item.id)} className="bid-button">
                    Place Bid
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;