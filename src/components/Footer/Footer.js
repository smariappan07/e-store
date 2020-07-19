import React from 'react';

import classes from './Footer.module.css'

const footer = props => (
    <div className={classes.Footer}>
       <p className={classes.FooterContent}>&copy; 2007-2020 E-Shop.com</p>
    </div>
);

export default footer;