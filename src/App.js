import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import TimerContainer from "./components/TimerContainer";
import Emoticon from "./components/Emoticon";
import Selector from "./components/Selector";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.audio = new Audio("timeup.mp3");
    this.state = {
      totalTime: 60,
      timeRemain: 60
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
        <div className="selector-container">
          <Selector
            totalTime={this.state.totalTime}
            durationClick={seconds => {
              this.setState({ totalTime: seconds, timeRemain: seconds });
            }}
          />
        </div>
        <div className="chart-container" onClick={this.reset}>
          <TimerContainer
            timeRemain={this.state.timeRemain}
            totalTime={this.state.totalTime}
          />
        </div>
        <div className="emo-container" onClick={this.reset}>
          <Emoticon
            timeRemain={this.state.timeRemain}
            totalTime={this.state.totalTime}
          />
        </div>
      </div>
    );
  }
}

export default App;
