import React, {Component} from 'react';

const content = [
  { quote: '', author: ''},
];


class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
          currentPage: 0,
          totalPages: content.length,
        };



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


       this.items = 0;
    }

    // todo: переписать метод чтобы менял стейт setState
            handleChangeContent (index) {
                this.items = index;

}
    render() {
      const btns = [];

            this.corouselArrow.forEach((text, index) => {
                btns.push(
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

            const { currentPage: i } = this.state;

            return (
                <div className="mid-content">
                    <h3 id="cite" className="slider-text">
                        {content[i].quote}
                    </h3>
                    <p id="autor" className="capslock">{this.corouselAutorArrow[this.items]}</p>
                    <div className="slider">
                        {btns}
                    </div>
                </div>
            );

        };

}

export default Carousel;
