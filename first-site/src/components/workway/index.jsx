import React from 'react';
import Arc from '../../assets/svg/sl-arc.png';
import Diamond from '../../assets/svg/sl-diamond.png';
import Joy from '../../assets/svg/sl-joy.png';
import MagicWand from '../../assets/svg/sl-magic-wand.png';
import PaintBucket from '../../assets/svg/sl-paint-bucket.png';
import Phone from '../../assets/svg/sl-phone.png';
import Plane from '../../assets/svg/sl-plane.png';
import Star from '../../assets/svg/sl-star.png';
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