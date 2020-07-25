import React from 'react';

import classes from './Input.module.css';

const input = props => {
    let inputClass = null;
    if(props.type === 'checkbox'){
       inputClass = classes.Checkbox;
    }
    else if( props.type === 'text'  ){
        inputClass = classes.Input;
    }
    else {

    }
    return (
        <div>

            <input type={props.type}
                   checked={props.checked}
                   name={props.name}
                   className={inputClass}
                   value={props.value}
                   onChange={props.changed}
                   onKeyDown={props.enter}
                   placeholder={props.placeholder}

            />
            <label className={classes.Label}>{props.label}</label>

        </div>
    );
    };

export default input;