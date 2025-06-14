import { Navbar, Container, Nav } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Movie App</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#">TOP 10 MOVIE</Nav.Link>
                        <Nav.Link href="#">SUPERHERO</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;
