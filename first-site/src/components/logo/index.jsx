import React, {Component} from 'react';
import LogoSVG from "../../assets/svg/logo.svg"
import IconMenu from "../icon-menu";


class Logo extends Component {
    constructor(props) {
        super(props);


    this.state = {
        iconMenu: true
    };
    this.handleIconMenu = () => {
        if (this.state.iconMenu = false) {

                this.setState({ iconMenu: true })

        } else {

                this.setState({ iconMenu: false })

        }
    };
    }

 render() {

     return (
         <div className="logo-image">
             {console.log(this.state.iconMenu)}
                 <img src={LogoSVG} alt="Logo" onClick={this.handleIconMenu}/>


             <IconMenu show={this.state.iconMenu}/>
         </div>
     )
 };
 }

export default Logo;