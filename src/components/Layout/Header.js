import React from 'react';
import mealsImage from '../../assets/meals.jpg'; //A way to import images. This is supported by default project setup.
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of delicious food!"/>
            </div>
        </React.Fragment>
    );
};

export default Header;