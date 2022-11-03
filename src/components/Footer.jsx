import React from 'react';
import { Col, Row, Container,Button,Form } from 'react-bootstrap';
import '../styles/footer.css';

const Footer = () => {
  return (
    <div>
        <Container>
            <footer className='footer'>
                <Row md={3}>
                    <Col className='brand' lg={3}>
                        <h2>Jirama Store</h2>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </Col>

                    <Col className='contact' lg={3}>
                        <h2>Contact Us</h2>
                        <p>ehhramaa212@gmail.com <br />
                        Kp.Cibarengkok, Ds.Jatiwangi <br />Kec.Cikarang Barat <br />
                        +6281317398575
                        </p>
                    </Col>

                    <Col className='subscribe'>
                        <h2>Subscribe</h2>
                        <Form.Label htmlFor="email">Enter Your Email To Get Notif Our Event/Promo</Form.Label>
                        <div className='form-subscribe'>
                        <Form.Control type="text" aria-describedby="email" placeholder='Enter Email'/>
                        <Button variant='outline-primary'><i class="fa-regular fa-paper-plane-top"></i></Button>
                        </div>
                    </Col>
                    <h2 className='copyright'>@ 2022 Copyright Jirama Store</h2>
                </Row>
            </footer>
        </Container>
    </div>
  )
}

export default Footer