import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';


import classes from './Home.module.css';
import Card from '../../components/UI/Card/Card';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';

import * as actionCreators from '../../store/actions/index';

class Home extends Component {

state = {
    isModal: false,
    isAddItems: false,
    brandVal: '',
    modelVal: '',
    priceVal: '',
    brandEmpty: false,
    priceEmpty: false,
    modelEmpty: false


    // addForm: {
    //     brand: {
    //         type: "text",
    //         placeholder: "Enter the Brand",
    //         value: ''
    //     },
    //     model: {
    //         type: "text",
    //         placeholder: "Enter the Model Name",
    //         value: ''
    //     },
    //     price: {
    //         type: "text",
    //         placeholder: "Enter the  Price",
    //         value: ''
    //     }
    // }
}
    componentDidMount () {
        this.props.onFetchProducts(this.props.filterStatus, this.props.filterValue, this.props.sortStatus, this.props.sortValue);
        this.props.onFetchBrands();
        console.log('mount', this.props.filterValue);
    }

    cardClickedHandler = (event, id) => {
      // alert(id);
        let val = id;
      this.props.onProductsSpec(id);
      this.props.history.push(`/model/${val}`);
    }

    filterCheckedHandler = ( event ) => {


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

    addItemHandler = () => {
        this.setState({isModal: true})
    }

    inputChangedHandler = ( event, type ) => {
        let val = null;
        if (type === 'brand') {
            val = event.target.value;
            if(val === '') {
                this.setState({brandEmpty: true, brandVal: val})
            }
            else {
                this.setState({brandEmpty: false, brandVal: val});
            }

        } else if (type === 'model') {
            val = event.target.value;
            if(val === '') {
                this.setState({modelEmpty: true, modelVal: val})
            }
            else {
                this.setState({modelEmpty: false, modelVal: val});
            }
        }
        else {
            val = event.target.value;
            if(val === '') {
                this.setState({priceEmpty: true, priceVal: val})
            }
            else {
                this.setState({priceEmpty: false, priceVal: val});
            }
        }
    }

    submitDataHandler = (e) => {
        e.preventDefault();
        let brand = this.state.brandVal;
        let model = this.state.modelVal;
        let price = this.state.priceVal;

        if(brand === ''){
            this.setState({brandEmpty: true});
        }
        else if(model === ''){
            this.setState({modelEmpty: true});
        }
        else if ( price === '' ) {
            this.setState({priceEmpty: true});
        }
        else if( brand !== '' && model !== '' && price !== ''  ) {
            this.props.onSubmitData(brand, model, price);
            this.setState({isModal: false,isAddItems: true,  brandVal: '', modelVal: '', priceVal: ''});
        }
        else {

        }
    }

    cancelItemHandler = (e) => {
            e.preventDefault();
            this.setState({isModal: false, isAddItems: false});
    }

    render () {


    let addFormArray = [];
    // let validationError = this.props.submitStatus === 'Success' ?  <p>success</p>: <p>{this.props.submitStatus}</p> ;
    for ( let key in this.state.addForm ) {
        addFormArray.push({
            id: key,
            config: this.state.addForm[key]
        });
    }
    console.log(addFormArray);

    let msg = null;
    if(this.state.isAddItems) {
        msg = <p>{this.props.submitStatus}</p>
    }

    let form = (
        <form>
            <h5>Add Mobiles</h5>
                <div>
                    <Input type="text"
                           placeholder="Enter Brand name"
                           changed={(event, type) => {this.inputChangedHandler(event,'brand')}}
                           value={this.state.brandVal}
                    />
                    {this.state.brandEmpty ? <p className={classes.Error}>Fill the Brand Name</p> : null}
                </div>
                <div>
                    <Input type="text"
                           placeholder="Enter Model name"
                           changed={(event, type) => {this.inputChangedHandler(event, 'model')}}
                           value={this.state.modelVal}
                    />
                    {this.state.modelEmpty ? <p className={classes.Error}>Fill the Model name</p> : null}
                </div>
                <div>
                    <Input type="text"
                           placeholder="Enter Price"
                           changed={(event, type) => {this.inputChangedHandler(event, 'price')}}
                           value={this.state.priceVal}
                    />
                    {this.state.priceEmpty ? <p className={classes.Error}>Fill the Price</p> : null}
                </div>
                <Button btnType="Confirm" clicked={(event) => {this.submitDataHandler(event)}} >Add</Button>
                <Button btnType="Cancel" clicked={(event) => {this.cancelItemHandler(event)}}>Cancel</Button>
            </form>

    );




       // let form = (
       //      <form onSubmit={this.submitDataHandler}>
       //          <h4 className={classes.ModalTitle}>Add Items</h4>
       //          {addFormArray.map(elem => (
       //              <Input key={elem.id}
       //                     type={elem.config.type}
       //                     placeholder={elem.config.placeholder}
       //                     changed={(event) => {
       //                         this.inputChangedHandler(event, elem.id)
       //                     }}
       //                     value={elem.config.value}
       //
       //              />
       //          ))}

        //         <Button btnType="Confirm" >Confirm</Button>
        //         <Button btnType="Cancel" clicked={this.cancelItemHandler}>Cancel</Button>
        //     </form>
        //
        // )


    let removeFilter = this.props.sortStatus ?  <Button btnType="Clear" clicked={( a ) => {this.sortHandler( a )}}>Clear</Button> : null;
        return (
           <React.Fragment>
               <Container className={classes.Content}>
                   <Row>
                       <Col sm={12} md={3} lg={3} >
                           <div className={classes.Filter}>
                              <h5>Brands</h5>

                               {this.props.brands.map( brand => (
                                   <Input type="checkbox" key={brand._id} label={brand.brand} value={brand.brand} changed={( event ) => { this.filterCheckedHandler(event) }} />
                               ) )}
                               <h5>Price</h5>
                               <span>{removeFilter}</span>
                               <Input type="radio" name="sort" value="High to Low" checked={this.props.sortValue === -1} label="High to Low" changed={ ( event ) => { this.sortHandler( event ) } } />
                               <Input type="radio" name="sort" value="Low to High" checked={this.props.sortValue === 1} label="Low to High" changed={ ( event ) => { this.sortHandler( event )  } } />
                               <div>
                                   <Button btnType="Add"  clicked={this.addItemHandler}>Add</Button>
                               </div>
                           </div>
                       </Col>
                       <Col sm={12} md={9} lg={9} >
                           <Row>
                               <Col>
                                   <Modal show={this.state.isModal} modalClosed={this.cancelItemHandler}>
                                       {form}
                                   </Modal>
                                   <Modal show={this.state.isAddItems} modalClosed={this.cancelItemHandler}>
                                       {msg}
                                   </Modal>
                               </Col>
                           </Row>
                           <Row>
                               {this.props.products.map(item => (
                                   <Col sm={6} md={6} lg={4}>

                                       <Card key={item._id} title={item.title} price={item.price} brand={item.brand} clicked={(event) => {this.cardClickedHandler(event, item._id)}} />
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
       sortValue: state.isSortFilterValue,
       modalStatus: state.isModal,
       submitStatus : state.status
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchProducts: (status, value, sortSts, sortVal ) => dispatch(actionCreators.fetchProductsList( status, value, sortSts, sortVal)),
        onFetchBrands: () => dispatch(actionCreators.fetchBrands()),
        onSortProducts: ( status, value, filtStatus, filtValue ) => dispatch(actionCreators.sortPrice(status, value, filtStatus, filtValue)),
        onSubmitData : ( brand, model, price ) => dispatch(actionCreators.submitData( brand, model, price )),
        onProductsSpec: (id) => dispatch(actionCreators.productsSpec(id))
        // onRemoveFilter: ( status,value,filtStatus, filtValue ) => dispatch(actionCreators.removeFilter(status, value, filtStatus, filtValue))
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(Home);