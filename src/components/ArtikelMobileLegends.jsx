import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import foto from '../assets/logo192.png';
import { ListDm } from '../data/ListDm';

const ArtikelMobileLegends = () => {
  return (
    <div>
        <Container>
            <Row md={2}>
                <Col lg={8}>
                    <Container>
                        <center>
                            <Col>
                                <Button>Pembelian</Button>
                                <Button>Memandu</Button>
                            </Col>
                        </center>
                        <h5>Masukkan Id Dan Server Anda</h5>
                        <Row>
                            <Col>
                                <form action="#">
                                    <input type="text" placeholder='Masukkan Id Disini' />
                                </form>
                            </Col>
                            <Col>
                                <input type="text" placeholder='Masukkan Server Disini' />
                            </Col>
                        </Row>
                        <h5>Silahkan Pilih Paket</h5>
                        <Row md={3}>
                            {ListDm.map((list) =>
                                <Col>
                                    <Card key={list.id}>
                                        <Card.Title>{list.product}</Card.Title>
                                        <Card.Text>{list.price}</Card.Text>
                                        <Card.Img src={list.img} alt='' />
                                    </Card>
                                </Col>
                            )}
                        </Row>
                    </Container>
                </Col>

                <Col lg={4}>
                    <img src={foto} alt="" />
                    <p>Online Battle Arena (MOBA) dikembangkan dan diterbitkan oleh Moonton. Mobile Legends tersedia untuk ponsel Android dan iOS. Gim ini memiliki pertarungan antara tim yang terdiri dari lima pemain (5v5) yang perlu menghancurkan basis musuh. Ini memiliki beberapa mode permainan seperti: Klasik, Peringkat, Brawl, VS AI, Custom, Survival, antara lain. Mobile Legends memiliki tiga peta utama, yang memiliki skenario, tujuan, dan situasi kemenangan yang berbeda. Peta keempat dibuat untuk Mode Bertahan Hidup. Peta-peta tersebut diberi nama Land of Dawn, Invasion to the West, dan peta yang sampai sekarang tidak disebutkan namanya untuk Brawl Mode.</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ArtikelMobileLegends