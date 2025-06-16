import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import shangchiImage from '../assets/images/films/shangchi.jpg';
import spidermanImage from '../assets/images/background/spiderman.jpg';
import endgameImage from '../assets/images/films/endgame.jpg';

const SuperHero = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">SUPERHERO MOVIE</h1>
                <Row>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={shangchiImage} alt="Shacngchi Movies" className="images" />
                            <div className='bg-dark'>
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Shang-Chi</Card.Title>
                                    <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={spidermanImage} alt="Shacngchi Movies" className="images" />
                            <div className='bg-dark'>
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Shang-Chi</Card.Title>
                                    <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={endgameImage} alt="Shacngchi Movies" className="images" />
                            <div className='bg-dark'>
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Shang-Chi</Card.Title>
                                    <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={shangchiImage} alt="Shacngchi Movies" className="images" />
                            <div className='bg-dark'>
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Shang-Chi</Card.Title>
                                    <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={spidermanImage} alt="Shacngchi Movies" className="images" />
                            <div className='bg-dark'>
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Shang-Chi</Card.Title>
                                    <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={endgameImage} alt="Shacngchi Movies" className="images" />
                            <div className='bg-dark'>
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Shang-Chi</Card.Title>
                                    <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default SuperHero;