import React, {Component} from 'react';


class Carousel extends Component {
    constructor(props) {
        super(props);



        this.corouselArrow = [
            '“ Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.”',
            'Тут нет текста',
            'Тут тоже нет текста'
        ];

        this.corouselAutorArrow = [
            'MICHEL HOPKINS',
            'Я сказал',
            'И это я сказал'
        ];

        this.btns = [];
       this.items = 0;
    }
            handleChangeContent (index) {
                this.items = index;

}
    render() {

            this.corouselArrow.forEach((text, index) => {
                this.btns.push(
                    <button
                        className='slider-btn'
                        type='button'
                        key={index}
                        onClick= {
                            this.handleChangeContent(index)
                        }
                    />
                )

            });

            return (
                <div className="mid-content">
                    <h3 id="cite" className="slider-text">
                        {this.corouselArrow[this.items]}
                    </h3>
                    <p id="autor" className="capslock">{this.corouselAutorArrow[this.items]}</p>
                    <div className="slider">
                        {this.btns}
                    </div>
                </div>
            );

        };

}

export default Carousel;