import React from 'react';
import Arc from '../../assets/svg/sl-arc.svg';
import Diamond from '../../assets/svg/sl-diamond.svg';
import Joy from '../../assets/svg/sl-joy.svg';
import MagicWand from '../../assets/svg/sl-magic-wand.svg';
import PaintBucket from '../../assets/svg/sl-paint-bucket.svg';
import Phone from '../../assets/svg/sl-phone.svg';
import Plane from '../../assets/svg/sl-plane.svg';
import Star from '../../assets/svg/sl-star.svg';
import PropTypes from 'prop-types';

const type = {
    'arc': Arc,
    'diamond': Diamond,
    'joy': Joy,
    'magicWand': MagicWand,
    'paintBucket': PaintBucket,
    'phone': Phone,
    'star': Star,
    'plane': Plane
};

const WorkWay = props => {
  return (
      <img src= {type[props.name]} alt={props.name}/>
  )
};

export default WorkWay;

WorkWay.propTypes = {
    name: PropTypes.oneOf(['arc', 'diamond', 'star', 'joy', 'magicWand', 'paintBucket', 'phone', 'plane']),
};