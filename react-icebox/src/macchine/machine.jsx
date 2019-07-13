import React from 'react';
import './machine.css';

class Mashine extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      model: 'D500',
      brand: 'Zanussi',
      year: '1980',
      color: 'red',
      _wineContainer: 0,
      _logs: [],
      counter: 0,
    };
  }

  _addMessage = text => {
    const newLogs = [ ...this.state._logs ];
    newLogs.unshift(text);
    this.setState({
      _logs: newLogs
    });
  };

  _clearLogs = () => {
    this.setState({
      _logs: [],
    });
  };

  waterVolume = (ml) => {
    this.setState({
      _wineContainer: ml,
    }, () => {
      if (this.state._wineContainer >= 3000){
        this._addMessage('Начался набор воды...');

        for (let percent = 0, timer = 1000; percent <= 100; percent += 25, timer += 1000) {
          setTimeout( () => {
            if (percent === 100) {
              this._addMessage(`Бак наполнен!`);
            } else {
              this._addMessage(`Бак заполнен на ${percent}%...`);

            }
          }, timer);
        }
      } else {
        this._addMessage('Бак с водой пуст!');
      }
    });


  };

  getStart = () => {
    if (this.state._wineContainer >= 3000) {
      this._addMessage(`Стиральная машинка ${this.state.brand} (${this.state.model}) начала стирку с  ${this.state._wineContainer} ml воды`);
      this.waterVolume(0);
    } else {
      this._addMessage(`Стиральная машинка ${this.state.brand} (${this.state.model}) не может начать стирку если бак с водой пуст!`);
    }
  };

  handlePlusOne = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  };

  render () {
    return (
      <div className="machine">
        <div className="panel">
          <div className="tide_place">
            <span className="label" id="model">{this.state.model}</span>
            <span className="label" id="brand">{this.state.brand}</span>
          </div>
          <div id="display">{this.state._logs}</div>
          <div className="button_panel">
            <div className="button_place">
              <button onClick={() => this.waterVolume(5000)}>A</button>
              <span className="text">Залить воду</span>
            </div>
            <div className="button_place">
              <button onClick={this.getStart}>B</button>
              <span className="text">Начать стирку</span>
            </div>
            <div className="button_place"/>
            <div className="button_place"/>

          </div>
        </div>
        <div className="drum">
          <div className="drum_window">
            {this.state.counter}
            <button onClick={this.handlePlusOne}>+1</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Mashine;
