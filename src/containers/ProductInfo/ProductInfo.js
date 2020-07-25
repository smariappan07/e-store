import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

class ProductInfo extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col lg={4} style={{border: '1px solid black'}}>1</Col>
                    <Col lg={8} style={{border: '1px solid black'}}>2</Col>
                </Row>
            </Container>
        );
    }
}

export default ProductInfo;