import React, { Component } from 'react';

import './styles/index.scss';

class App extends Component {
  render () {
    return (
      <div className="container">
        <div>
          Меню
        </div>

        <div className="block block-secondary">
          We Design and Develop
        </div>

        <div className="block block-light">
          About Us
        </div>

        <div className="block block-light-secondary">
          Professional Skills
        </div>

        <div className="block block-active">
          4и элемента с картинками и цифрами
        </div>

        <div>
          Галлерея
        </div>

        <div className="block block-light">
          Our work Process
        </div>

        <div className="block block-light-secondary">
          8 картинок с текстом
        </div>

        <div className="block block-active">
          Слайдер
        </div>

        <div className="block block-light">
          картинки компании
        </div>

        <div className="block block-light-secondary">
          Need a Project?
        </div>

        <div className="block block-dark">
          footer
        </div>
      </div>
    );
  }
}

export default App;
