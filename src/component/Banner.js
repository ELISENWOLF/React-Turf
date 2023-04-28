import Carousel from 'react-bootstrap/Carousel';
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'

import turf1 from '../assests/turf1.webp'
import turf2 from '../assests/turf2.jpg'
import turf3 from '../assests/turf3.jpg'

import '../styles/banner.css'

const Banner = () => {
    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7} className='left-banner'>
                        <Carousel>
                            <Carousel.Item interval={2000} className='carousel-Item'>
                                <img
                                    className="d-block w-100"
                                    src={turf1}
                                    alt="First slide"
                                />
                                <Carousel.Caption style={{ color: '#051937' }}>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2000} className='carousel-Item'>
                                <img
                                    className="d-block w-100"
                                    src={turf2}
                                    alt="Second slide"
                                />
                                <Carousel.Caption style={{ color: '#051937' }}>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className='carousel-Item'>
                                <img
                                    className="d-block w-100"
                                    src={turf3}
                                    alt="Third slide"
                                />
                                <Carousel.Caption style={{ color: '#051937' }}>
                                    <h3>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col xs={12} md={6} xl={5} className='right-banner'>
                        <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <Col xl={4} md={8} sm={5} xs={10}>
                            <a href="#booknow">Book Now <ArrowRightCircle size={25} /></a>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner