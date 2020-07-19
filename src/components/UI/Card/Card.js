import React from 'react';

import classes from './Card.module.css';

const card = props => (
    <div className={classes.Card}>
        <img src={`../../../assets/images/${props.brand}.jpg`} className={classes.Image} />
        <a>{props.title}</a>
        <h4 className={classes.Content}>&#8377; {props.price.toFixed()}</h4>
    </div>
);

export default card;