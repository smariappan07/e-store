import {Col, Row} from "react-bootstrap";
import Card from "./components/UI/Card/Card";
import React from "react";

let card = null;
let filteredList  = this.props.products.filter( pd => pd.id === 2 );
console.log('++', filteredList);
card = (
    <Row>
        {this.props.products.map(item => (
            <Col lg={4}>
                <Card key={item.id} title={item.title} price={item.price} description={item.description}/>
            </Col>
        ))}
    </Row>
);
if(this.props.checked) {
    card = (
        <Row>
            {this.props.products.map(item => (
                <Col lg={4}>
                    <Card key={item.id} title={item.title} price={item.price} description={item.description}/>
                </Col>
            ))}
        </Row>
    );
}
else {
    card = (
        <Row>
            {filteredList.map(item => (
                <Col lg={4}>
                    <Card key={item.id} model={item.id} price={item.name} description={item.email}/>
                </Col>
            ))}
        </Row>
    );
}