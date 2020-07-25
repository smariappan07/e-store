import React from 'react';

import classes from './Card.module.css';

const card = props => {

return (
    <div className={classes.Card} onClick={props.clicked}>
        <img src={`../../../assets/images/${props.brand}.jpg`} className={classes.Image} />
        <p className={classes.CardContent}>{props.title}</p>
        <h4 className={classes.Content}>&#8377; {Math.trunc(props.price)}</h4>
    </div>
);
};

export default card;