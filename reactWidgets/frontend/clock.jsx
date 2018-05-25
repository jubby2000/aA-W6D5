import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = { time: new Date()};

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    this.intervalId = 0;
  }

  tick() {
    this.setState({time: new Date()});
  }

  render() {
    let currTime = this.state.time;
    return (
      <div className="clock-widget">
        <h1>i am a clock</h1>
        <ul>
          <li className="clock-widget-time">
            <h2>Time: </h2>
            <p>{currTime.toLocaleTimeString()}</p>
          </li>
          <li className="clock-widget-date">
            <h2>Date: </h2>
            <p>{currTime.toLocaleDateString()}</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Clock;
