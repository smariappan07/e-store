import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import Input from '../UI/Input/Input';


import * as actionCreators from '../../store/actions/index';

import classes from './Header.module.css';

class Header extends Component {


    searchHandler = (event) => {
        // alert('search');

        let searchStatus = this.props.searchStatus;
        let searchValue = this.props.searchValue ;
        let searchValue = this.props.searchValue ;
        console.log(searchStatus);
        console.log(searchValue)
        this.props.onSearch(searchStatus, searchValue)
    }

    render() {

        return (
            <Container fluid className={classes.Header}>
                <Row className={classes.Logo}>
                    <Col>
                        <a href="/" className={classes.LogoLink}>E-Shop</a>
                    </Col>
                    <Col>
                         <Input type="search"  changed={(event) => { this.searchHandler(event)}} />
                    </Col>
                    <Col className={classes.Cart}>
                        <a href="#" className={classes.CartLink}><span className={classes.CartIcon}><i
                            className="material-icons" style={{fontSize: '17px'}}>shopping_cart</i></span>Cart</a>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        searchStatus: state.isSearchFilter,
        searchValue: state.isSearchFilterValue
    }
}

const mapDispatchToProps = dispatch => {
    return{
            onSearch: ( status, val ) => dispatch(actionCreators.searchProducts( status, val ))
    }
}



export default connect( mapStateToProps, mapDispatchToProps )(Header);