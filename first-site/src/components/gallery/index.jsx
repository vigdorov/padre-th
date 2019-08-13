import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SliderImages from "./slider-images";

export class Gallery extends Component {
  static propTypes = {
    images: PropTypes.arrayOf( PropTypes.string ).isRequired,
  };

  constructor (props) {
    super(props);

    this.state = {
      imageOnScreen: 4,
      page: 0,
      pages: props.images.length - 1,
      sliderShow: false,
    };
  }

  handleShowMoreImage = () => {
    this.setState({
      imageOnScreen: this.state.imageOnScreen + 4,
    });
  };

  handleChangePage = value => {
    const { page, pages } = this.state;

    if (page === 0 && value === -1) {
      this.setState({ page: pages });
    } else if (page === pages && value === 1) {
      this.setState( { page: 0 });
    } else {
      this.setState( { page: page + value });
    }
  };

  handleCloseSlider = () => {
    this.setState({ sliderShow: false });
  };

  handleClickImage = index => {
    this.setState({
      sliderShow: true,
      page: index,
    });
  };

  render() {
    const { images: imgArray} = this.props;
    const { page } = this.state;

    const images = [];

    this.props.images.forEach( (imgSrc, index) => {
      if (index < this.state.imageOnScreen) {
        images.push(
          <div className="gallery__item"
               key={index}
               onClick={() => this.handleClickImage(index)}
          >
            <img className="gallery__img" src={imgSrc} alt="rabbit"/>
          </div>
        );
      }
    });

    return (
      <div className="gallery">
        <div className="gallery__body">
          { images }
        </div>
        <button
          className="gallery__btn"
          type="button"
          onClick={this.handleShowMoreImage}
          hidden={this.state.imageOnScreen > this.props.images.length - 1}
        >
          LOAD MORE WORK
        </button>
        <SliderImages image={imgArray[page]}
                      onChangePage={this.handleChangePage}
                      show={this.state.sliderShow}
                      onCloseSlider={this.handleCloseSlider}
        />
      </div>
    );
  }
}
