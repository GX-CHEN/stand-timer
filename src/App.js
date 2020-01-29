import React from "react";
import "./App.css";
import TimerContainer from "./components/TimerContainer";
import Emoticon from "./components/Emoticon";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.audio = new Audio("go.mp3");
    this.state = {
      totalTime: 30,
      timeRemain: 30
    };
  }

  componentDidMount = () => {
    setInterval(
      () =>
        this.setState({
          timeRemain: this.state.timeRemain - 1
        }),
      1000
    );
  };

  reset = () => {
    this.setState({ timeRemain: this.state.totalTime });
  };

  render() {
    if (this.state.timeRemain === 0) {
      this.audio.play();
    }
    return (
      <div className="main-container">
        <div className="chart-container" onClick={this.reset}>
          <TimerContainer
            timeRemain={this.state.timeRemain}
            totalTime={this.state.totalTime}
          />
        </div>
        <div className="emo-container">
          <Emoticon timeRemain={this.state.timeRemain} />
        </div>
      </div>
    );
  }
}

export default App;
