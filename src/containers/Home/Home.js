import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';


import classes from './Home.module.css';
import Card from '../../components/UI/Card/Card';
import Input from '../../components/UI/Input/Input';
import * as actionCreators from '../../store/actions/productsList';

class Home extends Component {

    componentDidMount () {

        this.props.onFetchProducts(this.props.filterStatus, this.props.filterValue, this.props.sortStatus, this.props.sortValue);
        this.props.onFetchBrands();
        console.log('mount', this.props.filterValue);
    }

    filterCheckedHandler = ( event ) => {

// alert('filter')
        let filterArray = this.props.filterValue;
        let filterStatus = this.props.filterStatus;
        let sortPriceValue = this.props.sortValue;
        let sortPriceStatus = this.props.sortStatus;

        let getCheckedStatus = event.target.checked;
        let curVal = event.target.value;

        if(getCheckedStatus) {
            filterArray.push(curVal);
            console.log(filterArray,'filterArray');
            filterStatus = getCheckedStatus;
        }

        else  {
            let removeItem = filterArray.filter( e => e !== curVal );
            if(!removeItem.length){
                filterStatus = false;
            }
            console.log('pop',removeItem);
            filterArray =  removeItem;
        }

        this.props.onFetchProducts(filterStatus, filterArray,sortPriceStatus, sortPriceValue);
    }

    sortHandler = ( event ) => {

        let checkedStatus = event.target.checked;
        let checkedValue = event.target.value;

        let filterArray = this.props.filterValue;
        let filterStatus = this.props.filterStatus;
        let sortPriceValue = this.props.sortValue;
        let sortPriceStatus = this.props.sortStatus;
        sortPriceStatus = checkedStatus;

        if(checkedStatus && checkedValue === 'High to Low') {

            sortPriceValue = -1;

        }
        else if(checkedStatus && checkedValue === 'Low to High' ){

             sortPriceValue = 1;
        }
        else {
            sortPriceStatus = false;
            sortPriceValue = null;
        }

      this.props.onSortProducts( sortPriceStatus, sortPriceValue, filterStatus, filterArray  );

    }

    render () {
        let removeFilter = this.props.sortStatus ?  <button onClick={( a ) => {this.sortHandler( a )}}>Remove Filter</button> : null;
        return (
           <React.Fragment>
               <Container className={classes.Content}>
                   <Row>
                       <Col lg={3} >
                           <div className={classes.Filter}>
                              <h5>Brands</h5>
                               {this.props.brands.map( brand => (
                                   <Input type="checkbox" key={brand._id} label={brand.brand} value={brand.brand} changed={( event ) => { this.filterCheckedHandler(event) }} />
                               ) )}
                               <h5>Price</h5>
                               <span>{removeFilter}</span>
                               <Input type="radio" name="sort" value="High to Low" checked={this.props.sortValue === -1} label="High to Low" changed={ ( event ) => { this.sortHandler( event ) } } />
                               <Input type="radio" name="sort" value="Low to High" checked={this.props.sortValue === 1} label="Low to High" changed={ ( event ) => { this.sortHandler( event )  } } />
                         </div>
                       </Col>
                       <Col lg={9} >
                           <Row>
                               {this.props.products.map(item => (
                                   <Col lg={4}>

                                       <Card key={item._id} title={item.title} price={item.price} brand={item.brand} />
                                   </Col>
                               ))}
                           </Row>
                       </Col>
                   </Row>
               </Container>
           </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
       products: state.productsList,
       brands: state.brands,
       filterStatus: state.isBrandFilterSelected,
       filterValue: state.isBrandFilterSelectedValue,
       sortStatus: state.isSortFilter,
       sortValue: state.isSortFilterValue
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchProducts: (status, value, sortSts, sortVal ) => dispatch(actionCreators.fetchProductsList( status, value, sortSts, sortVal)),
        onFetchBrands: () => dispatch(actionCreators.fetchBrands()),
        onSortProducts: ( status, value, filtStatus, filtValue ) => dispatch(actionCreators.sortPrice(status, value, filtStatus, filtValue)),
        // onRemoveFilter: ( status,value,filtStatus, filtValue ) => dispatch(actionCreators.removeFilter(status, value, filtStatus, filtValue))
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(Home);