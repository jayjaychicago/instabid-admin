import React from "react";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export class InstabidTopMenu extends React.PureComponent {
    render() {
        return (
            <Navbar expand="xl" variant="dark" bg="instabid">
                <Container>
                    <Navbar.Brand bsPrefix="instabid-nav-brand" href="#"><span>Instabid</span>Admin</Navbar.Brand>
                    <Navbar.Text>
                    Signed in as: <a href="#login">Julien Jacquet</a>
                    </Navbar.Text>
                </Container>
            </Navbar>
        );
    }
}