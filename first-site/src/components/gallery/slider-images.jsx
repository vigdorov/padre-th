import React from 'react';
import PropTypes from 'prop-types';

const SliderImages = props => {

  const handleChangePage = event => {
    const { name } = event.target;

    if (name === 'left-btn') {
      props.onChangePage(-1);
    } else if (name === 'right-btn') {
      props.onChangePage(1);
    }
  };

  const handleBackgroundClick = event => {
    const { className } = event.target;

    if (className === 'slider-images') {
      props.onCloseSlider();
    }
  };

  return (
    <div className="slider-images"
         style={{ display: props.show ? 'flex' : 'none' }}
         onClick={handleBackgroundClick}
    >
      <div className="slider-images__body">
        <button name="left-btn"
                className="slider-images__button__left"
                onClick={handleChangePage}
        >
        </button>

        <img src={props.image} alt="кролик" className="slider-images__img"/>

        <button name="right-btn"
                className="slider-images__button__right"
                onClick={handleChangePage}
        >

        </button>
      </div>
    </div>
  );
};

export default SliderImages;

SliderImages.propTypes = {
  image: PropTypes.string.isRequired,
  onChangePage: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  onCloseSlider: PropTypes.func.isRequired,
};

