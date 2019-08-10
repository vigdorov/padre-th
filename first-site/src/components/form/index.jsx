import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Form extends Component {
constructor(props){
    super (props);

   };


render() {
    return (
        <div className="form_container">
            <form action="" className="message">
                <input className="input-message"
                       type="text"
                       id="name"
                       value={this.props.name}
                       onChange={this.props.change}/>
                <input className="input-message"
                       type="text"
                       id="email"
                       value={this.props.email}
                       onChange={this.props.change}/>
                <input className="input-message large"
                       type="text"
                       id="title"
                       value={this.props.title}
                       onChange={this.props.change}/>
                <textarea className="textarea-message"
                          name="You Comment"
                          id="comment"
                          cols="30"
                          rows="7"
                          value={this.props.comment}
                          onChange={this.props.change}>
                    </textarea>

            </form>

        </div>
    )

}


}
