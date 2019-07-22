import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Gallery extends Component {
  static propTypes = {
    images: PropTypes.arrayOf( PropTypes.string ).isRequired,
  };

  constructor (props) {
    super(props);

    this.state = {
      imageOnScreen: 4,
    };
  }

  handleShowMoreImage = () => {
    this.setState({
      imageOnScreen: this.state.imageOnScreen + 4,
    });
  };

  render() {
    const images = [];

    this.props.images.forEach( (imgSrc, index) => {
      if (index < this.state.imageOnScreen) {
        images.push(
          <div className="gallery__item" key={index}>
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
      </div>
    );
  }
}
