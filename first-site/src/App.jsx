import React, { Component } from 'react';

import './styles/index.scss';

class App extends Component {
  render () {
    return (
      <div className="container">
        <div className="header">
          <div className="logo">Logo</div>
            <div className="menu">
                <ul className="menu-nav">
                <li className="link"><a href="#" className="menu-item">home</a></li>
                <li className="link"><a href="#" className="menu-item">about</a></li>
                <li className="link"><a href="#" className="menu-item">work</a></li>
                <li className="link"><a href="#" className="menu-item">process</a></li>
                <li className="link"><a href="#" className="menu-item">services</a></li>
                <li className="link"><a href="#" className="menu-item">testimonials</a></li>
                <li className="link"><a href="#" className="menu-item">contact</a></li>
            </ul></div>
        </div>

        <div className="block block-secondary">
          <div className="end-block">
              <div className="block-content">
                  <h1 className="title-main">We Design and Develop</h1>
                  <p className="mid-text">We are a new design studio based in USA. We have over <br/> years of combined experience, and know a thing or two <br/> about designing websites and mobile apps.</p>
                  <button className="btn-main">contact us</button>
              </div>

          </div>

        </div>

        <div className="block block-light">
            <div className="mid-content">
                <h2>About Us</h2>
                <p className="center-text">Divide have don't man wherein air fourth. Own itself make have night won't make. A you under Seed appear which good give. Own give air without fowl moveth dry first heaven fruit, dominion she'd won't very all.
                </p>
                <div>Картинка роспись</div>
            </div>
        </div>

        <div id="bg" className="block block-light-secondary">
            <div className="left-block">
                <h2>Professional Skills</h2>
                <p className="capslock" >UI/UX DESIGN 75%</p>
                <div className="percent-75"></div>
                <p className="capslock">WEB DEVELOPMENT 90%</p>
                <div className="percent-90"></div>
                <p className="capslock">MARKETING 65%</p>
                <div className="percent-65"></div>
            </div>
        </div>

        <div className="block block-active">
            <div className="box">
            <div className="line-box">
                <div className="work-result">
                    <div className="img-box"> </div>
                    <div className="img-description">
                        <p className="number">548</p>
                        <p className="capslock">PROJECTS COMPLETED</p>
                    </div>
                </div>
                <div className="work-result">
                    <div className="img-box"> </div>
                    <div className="img-description">
                        <p className="number">1465</p>
                        <p className="capslock">WORKING HOURS</p>
                    </div>
                </div>
                <div className="work-result">
                    <div className="img-box"> </div>
                    <div className="img-description">
                        <p className="number">612</p>
                        <p className="capslock">POSITIVE FEEDBACKS</p>
                    </div>
                </div>
                <div className="work-result">
                    <div className="img-box"> </div>
                    <div className="img-description">
                        <p className="number">735</p>
                        <p className="capslock">HAPPY CLIENTS</p>
                    </div>
                </div>
            </div>
            </div>
        </div>

        <div id="gallery">
          <div className="img-container1"></div>
            <div className="img-container2"></div>
            <div className="img-container1"></div>
            <div className="img-container2"></div>
            <div className="img-container2"></div>
            <div className="img-container1"></div>
            <div className="img-container2"></div>
            <div className="img-container1"></div>
        </div>
          <button id="gal-btn" className="btn-gallery" >
              LOAD MORE WORK
          </button>

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
