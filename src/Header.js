import React from 'react';
import { Container, Image, Navbar } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <header>
                <Navbar sticky="top" bg="primary" variant="dark" expand="xxl">
                    <Container fluid>
                        <Navbar.Brand href="#home">
                            <Image
                                thumbnail='ture'
                                alt=''
                                src='nkust.png'
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            UCL AutoCar Page
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Hello {this.props.name}
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}

export default Header;

