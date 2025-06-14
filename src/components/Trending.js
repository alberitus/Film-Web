import { Container, Row, Col, Button } from 'react-bootstrap';

const Trending = () => {
    return (
        <div className='intro'>
            <Container className='text-white text-center d-flex justify-content-center align-items-center'>
            <Row>
                <Col>
                <div className='title'>FIND YOUR MOVIE</div>
                <div className='title'>AND ENJOY YOUR POPCORN</div>
                <div className='introButton mt-4 text-center'>
                    <Button variant='dark'>Watch here</Button>
                </div>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Trending;