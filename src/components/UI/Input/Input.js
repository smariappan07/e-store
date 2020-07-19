import React from 'react';

import classes from './Input.module.css';

const input = props => (
    // let inputClass = [];
    // if(props.type === 'checkbox'){
    //
    // }
    // else if (props.type === 'radio'){
    //
    // }
    // else {
    //
    // }
    <div>
        <input type={props.type} checked={props.checked} name={props.name} className={classes.Checkbox} value={props.value} id="defaultCheck1"
               onChange={props.changed}/>
        <label htmlFor="defaultCheck1" className={classes.Label}>{props.label}</label>
    </div>
);

export default input;