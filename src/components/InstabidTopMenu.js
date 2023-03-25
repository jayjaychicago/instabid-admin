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
                        Signed in as: {`${this.props.user.given_name} ${this.props.user.family_name}`}
                    </Navbar.Text>
                </Container>
            </Navbar>
        );
    }
}