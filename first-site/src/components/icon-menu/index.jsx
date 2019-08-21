import React from 'react';
import Star from '../../assets/menu-icons/menu-star.png';
import Home from '../../assets/menu-icons/menu-home.png';
import Contact from '../../assets/menu-icons/menu-contact.png';
import Present from '../../assets/menu-icons/menu-present.png';
import Money from '../../assets/menu-icons/menu-money.png';
import Stat from '../../assets/menu-icons/menu-stat.png';
import List from '../../assets/menu-icons/menu-list.png';


const link = [
    '#home',
    '#about',
    '#work',
    '#process',
    '#services',
    '#testimonials',
    '#contact'
];


const name = [
    Home,
    Money,
    List,
    Stat,
    Star,
    Present,
    Contact

];

const arr = [];

// TODO: заменить на forEach
name.forEach ((item, index) => {
    arr.push (
        <a href={link[index]}>
         <img className="iconMenu__img"
                                    src={item}
                                    alt={item}/>
        </a>
    )
});

export const IconMenu = (props) => {
    // TODO: писать логику класса внутри класса, а не снаружи
return (
    <div className="iconMenu"
         style={{ display: props.show ? 'flex' : 'none'}}>
        {arr}
    </div>
);
};

export default IconMenu;
