import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import List from '../../components/UI/List/List';

import classes from './ProductInfo.module.css';

class ProductInfo extends Component {
    componentDidMount() {
        console.log(this.props.productsSpec,'++++')
}
    render() {
        return (
            <Container className={classes.Content}>
                {this.props.productsSpec.map( mobile => (
                <Row className={classes.Preview}>
                    <Col lg={4} className={classes.ProductImg}>
                        <img src={`../../assets/images/${mobile.brand}.jpg`} />
                    </Col>
                    <Col lg={8} className={classes.ProductInfo}>
                        <List key={mobile._id}
                                   description={mobile.description}
                                   brand={mobile.brand}
                                   title={mobile.title}
                                   price={mobile.price}
                                   size={mobile.size}
                                   camera={mobile.camera}
                                   cpu={mobile.cpu}
                                    />
                    </Col>

                </Row>
                ))}

            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        productsSpec: state.productsSpec
    }
}



export default connect(mapStateToProps, null)(ProductInfo);