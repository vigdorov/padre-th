import React from 'react';
import Portfolio from '../../assets/svg/portfolio.png';
import Clock from '../../assets/svg/clock.png';
import Star from '../../assets/svg/star.png';
import Like from '../../assets/svg/like.png';
import PropTypes from 'prop-types';

const type = {
    'portfolio': Portfolio,
    'clock': Clock,
    'like': Like,
    'star': Star
};


const NumberImg = props => {
    return (
        <img src={type[props.name]} alt={props.name} />
    )
};

export default NumberImg;

NumberImg.propTypes = {
  name: PropTypes.oneOf(['portfolio', 'clock', 'star', 'like']),
};
