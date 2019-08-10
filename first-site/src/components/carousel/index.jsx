import React, {Component} from 'react';

const content = [
  { quote: '“ Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.”',
   author: 'MICHEL HOPKINS'},
    { quote: '“Смысл цитаты отсутствует.”',
     author: 'Ивушкин Александр'},
    {quote: '“Третий элемент массива в карусели.”',
     author: 'Искуственный интелект'},
];


class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
          currentPage: 0,
        };


    }
    handleChangeContent (index) {
        this.setState({currentPage: index})
    };
    // todo: переписать метод чтобы менял стейт setState

    render() {
      const btns = [];

            content.forEach((text, index) => {
                btns.push(
                    <button
                        className='slider-btn'
                        type='button'
                        key={index}
                        onClick= {
                            () => this.handleChangeContent(index)
                      }
                    />
                )

            });

            const { currentPage: i } = this.state;
            const height = {
              minHeight: "100px"
            };

            return (
                <div className="mid-content" >
                    <h3 className="slider-text" style={height}>
                        {content[i].quote}
                    </h3>
                    <p className="capslock">{content[i].author}</p>
                    <div className="slider">
                        {btns}
                    </div>
                </div>
            );

        };

}

export default Carousel;
