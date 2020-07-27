import React from 'react';
// import classes from './List.module.css'
const list = ( props ) => (
    <dl>{props.title}
        <dt>{props.price}</dt>
        <dt>Description</dt>
        <dd>{props.description}</dd>
        <dt>Brand</dt>
        <dd>{props.brand}</dd>
        <dt>Size</dt>
        <dd>{props.size}</dd>
        <dt>Camera</dt>
        <dd>{props.camera}</dd>
        <dt>CPU</dt>
        <dd>{props.cpu}</dd>
    </dl>
);

export default list;
