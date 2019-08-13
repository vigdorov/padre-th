import React, {Component} from 'react';
import LogoSVG from "../../assets/svg/logo.svg"
import IconMenu from "../icon-menu";


class Logo extends Component {
    constructor(props) {
        super(props);


    this.state = {
        iconMenu: false
    };

    this.handleIconMenu = () => {
        if (this.state.iconMenu === false) {
            return (
                this.setState({ iconMenu: true })
            )
        } else {
            return (
                this.setState({ iconMenu: false })
            )

        }
    };
    }

 render() {

     return (
         <div className="logo-image">
                 <img src={LogoSVG} alt="Logo" onClick={this.handleIconMenu}/>


             <IconMenu show={this.state.iconMenu}/>
         </div>
     )
 };
 }

export default Logo;