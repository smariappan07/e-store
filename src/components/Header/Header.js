import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import Input from '../UI/Input/Input';


import * as actionCreators from '../../store/actions/index';

import classes from './Header.module.css';

class Header extends Component {


    searchHandler = (event) => {
        let searchStatus = this.props.searchStatus;
        let searchValue = event.target.value;

        console.log(searchStatus);
        console.log(searchValue);

        this.props.onSearch(searchStatus, searchValue )
    }

    enterHandler = ( event ) => {
        if(event.key === 'Enter') {
            let searchStatus = this.props.searchStatus;
            let searchValue = event.target.value ;
            this.props.onSearch(searchStatus, searchValue)
        }
    }

    render() {

        return (
            <Container fluid className={classes.Header}>
                <Row className={classes.Logo}>
                    <Col lg={3} md={3} sm={3}>
                        <a href="/" className={classes.LogoLink}>E-Shop</a>
                    </Col>
                    <Col lg={6} md={6} sm={4}>
                         <Input type="search"  changed={(event) => { this.searchHandler(event)}}
                                enter={(event) => {this.enterHandler( event )} }  />
                        <span><i
                            className="material-icons" style={{fontSize: '17px',position: 'fixed',top: '18px',left: '40%'}}>search</i></span>

                    </Col>
                    <Col lg={3} md={3} sm={3} className={classes.Cart}>
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
        searchValue: state.isSearchFilterValue,
        filterStatus: state.isBrandFilterSelected,
        filterValue: state.isBrandFilterSelectedValue,
    }
}

const mapDispatchToProps = dispatch => {
    return{
            onSearch: ( status, val ) => dispatch(actionCreators.searchProducts( status, val ))
    }
}



export default connect( mapStateToProps, mapDispatchToProps )(Header);