import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { AiFillHome } from "react-icons/ai";

import { InstabidSidebar } from '../components/InstabidSidebar';
import { InstabidTopMenu } from '../components/InstabidTopMenu';
import { LandingPage } from './LandingPage';

import '../assets/styles/AdminPages.scss';

export const MyProducts = () => {
    const { user } = useAuth0();

    return (
        <>
            <InstabidTopMenu user={user} />
            <Row>
                <Col xs={2}>
                    <InstabidSidebar />
                </Col>
                <Col xs={4}>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#"><AiFillHome /></Breadcrumb.Item>
                        <Breadcrumb.Item active>My Products</Breadcrumb.Item>
                    </Breadcrumb>
                    <h1 className="page-header">My Products</h1>
                </Col>
            </Row>
        </>
    );
}

export default withAuthenticationRequired(MyProducts, {
    onRedirecting: () => <LandingPage />,
});
