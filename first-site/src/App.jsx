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
                  <button className="btn-main">CONTACT US</button>
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
          <div className="mid-content">
            <h2>Our work Process</h2>
            <p className="center-text">
                Was years it seasons was there form he in in them together over that, third sixth gathered female creeping bearing behold years.
            </p>
          </div>
            <div className="video-container">
                тут может быть ваше видео
            </div>
        </div>


        <div className="block block-light-secondary">
          <div className="line-box">
              <div className="work-options">
              <div className="img-box black-border"> </div>
              <p className="capslock">UI/UX DESIGN</p>
              <p className="center-text mini">Be set fourth land god darkness make it wherein own</p>
          </div>

              <div className="work-options">
                  <div className="img-box black-border"> </div>
                  <p className="capslock">WEB DEVELOPMENT</p>
                  <p className="center-text mini">A she'd them bring void moving  third she'd kind fill</p>
              </div>

              <div className="work-options">
                  <div className="img-box black-border"> </div>
                  <p className="capslock">APP / MOBILE</p>
                  <p className="center-text mini">Dominion man second spirit he, earth they're creeping</p>
              </div>

              <div className="work-options">
                  <div className="img-box black-border"> </div>
                  <p className="capslock">GAME DESIGN</p>
                  <p className="center-text mini">Morning his saying moveth it  multiply appear life be</p>
              </div>

              <div className="work-options">
                  <div className="img-box black-border"> </div>
                  <p className="capslock">SEO / MARKETING</p>
                  <p className="center-text mini">Give won't after land fill creeping  meat you, may</p>
              </div>

              <div className="work-options">
                  <div className="img-box black-border"> </div>
                  <p className="capslock">PHOTOGRAPHY</p>
                  <p className="center-text mini">Creepeth one seas cattle grass  give moving saw give</p>
              </div>

              <div className="work-options">
                  <div className="img-box black-border"> </div>
                  <p className="capslock">GRAPHIC DESIGN</p>
                  <p className="center-text mini">Open, great whales air rule for,  fourth life whales</p>
              </div>

              <div className="work-options">
                  <div className="img-box black-border"> </div>
                  <p className="capslock">ILLUSTRATIONS</p>
                  <p className="center-text mini">Whales likeness hath, man kind  for them air two won't</p>
              </div>

          </div>
        </div>

        <div className="block block-active">
            <div className="mid-content">
                <h3 className="slider-text">
                    “ Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.”
                </h3>
                <p className="capslock">MICHEL HOPKINS</p>
                <div className="slider">
                  <div className="slider-btn"> </div>
                  <div className="slider-btn active"> </div>
                  <div className="slider-btn"> </div>
                </div>

            </div>
        </div>

        <div className="block block-light">
          <div className="line-box">
              <div className="work-options">
                  <div className="img-box black-border"></div>
              </div>
              <div className="work-options">
                  <div className="img-box black-border"></div>
              </div>
              <div className="work-options">
                  <div className="img-box black-border"></div>
              </div>
              <div className="work-options">
                  <div className="img-box black-border"></div>
              </div>


          </div>
        </div>

        <div className="block block-light-secondary">
          <div className="mid-content">
              <h2>Need a Project?</h2>
              <p className="center-text">
                  Let us know what you're looking for in an agency. We'll take a look and see if this could be the start of something beautiful.
              </p>
              <form action="" className="message">
                  <input className="input-message" type="text" id="name" value="Yor Name"/>
                  <input className="input-message" type="text" id="email" value="Yor Email"/>
                  <input className="input-message large" type="text" id="title" value="Yor Title"/>
                  <textarea className="textarea-message"  name="You Comment" id="comment" cols="30" rows="7" value="You Comment"></textarea>

              </form>
              <button className="btn-main">SEND MESSAGE</button>

          </div>
        </div>

   <div className="block block-dark">
           <div className="footer">
               <div className="copyright">
                   <p className="large-text">Piroll Design, Inc.</p>
                   <p>© 2017 Piroll. All rights reserved. <br/>
                       Designed by robirurk.</p>
               </div>
               <div className="contacts">
                   <p>hello@pirolltheme.com <br/>
                       +44 987 065 908 </p>

               </div>
               <div className="menu-combo">
                   <div className="footer-menu">
                       <ul className="footer-link-menu">
                           <li className="footer-link">Projects</li>
                           <li className="footer-link">About</li>
                           <li className="footer-link">Services</li>
                           <li className="footer-link">Carreer</li>
                       </ul>
                   </div>

                   <div className="footer-menu">
                       <ul className="footer-link-menu">
                           <li className="footer-link">News</li>
                           <li className="footer-link">Events</li>
                           <li className="footer-link">Contact</li>
                           <li className="footer-link">Legals</li>
                       </ul>
                   </div>
               </div>


               <div className="footer-menu">
                   <ul className="footer-link-menu">
                       <li className="footer-link">Projects</li>
                       <li className="footer-link">About</li>
                       <li className="footer-link">Services</li>
                       <li className="footer-link">Carreer</li>
                   </ul>
               </div>
           </div>

    </div>
      </div>
    );
  }
}

export default App;