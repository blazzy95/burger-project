import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SlideDrawer.css';

const slideDrawer = (props) => {
    return(
        <div className={classes.slideDrawer}>
            <div className = {classes.Logo}>
                <Logo/>
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default slideDrawer;