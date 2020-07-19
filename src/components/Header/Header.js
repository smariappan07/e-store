import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';



import classes from './Header.module.css';

const header = props => {
    return (
        <Container fluid className={classes.Header}>
            <Row className={classes.Logo}>
                <Col>
                    <a href="/" className={classes.LogoLink}>E-Shop</a>
                </Col>
                <Col className={classes.Cart}>
                    <a href="#" className={classes.CartLink}><span className={classes.CartIcon}><i className="material-icons" style={{fontSize: '17px'}}>shopping_cart</i></span>Cart</a>
                </Col>
            </Row>
        </Container>
    );
}





export default header;