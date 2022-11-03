import React from 'react';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import '../styles/artikelhome.css';
import { Product } from '../data/Product';

const ArtikelHome = () => {
  return (
    <div>
        <Container>
            <div className="mobile-games">
                <h2>Top Up</h2>
                <div className="slide-button">
                    <Button>All Games</Button>
                    <Button><i class="fa-light fa-caret-left"></i></Button>
                    <Button><i class="fa-light fa-caret-right"></i></Button>
                </div>
            </div>

            <Row md={4}>
                {Product.map((value) =>
                    <Col key={value.id} sm>
                        <Card bg="dark">
                            <Card.Img src={value.img} alt={value.product} />
                            <Card.Title className='card-judul'>{value.product}</Card.Title>
                            <Card.Text className='card-desc'>{value.desc}</Card.Text>
                            <Button href={value.link} variant='outline-primary' className='btn-buy'><i class="fa-regular fa-cart-shopping-fast"></i>Buy</Button>
                        </Card>
                    </Col>
                )}
            </Row>
        </Container>
    </div>
  )
}

export default ArtikelHome