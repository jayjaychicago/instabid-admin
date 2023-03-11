import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { AiFillHome } from "react-icons/ai";

import { InstabidSidebar } from '../components/InstabidSidebar';
import { InstabidTopMenu } from '../components/InstabidTopMenu';

export class MyProducts extends React.PureComponent {
    render() {
        return (
            <>
                <InstabidTopMenu />
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
                // <div className="flex-full-width-row">
                // </div>
                    // <div className="flex-full-height-column">
                    // </div>
}