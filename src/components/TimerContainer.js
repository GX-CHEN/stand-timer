import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import "./TimerContainer.css";

const data = [
  { name: "Group A", value: 200 },
  { name: "Group B", value: 200 },
  { name: "Group C", value: 200 },
  { name: "Group D", value: 200 }
];
const COLORS = ["#FF8042", "#FFBB28", "#00C49F", "#0088FE"];

export default class TimerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.finalGifs = [
      "./images/minion-what.gif",
      "./images/timeup.gif",
      "./images/too-much-info.gif",
      "./images/please-stop.gif"
    ];

    this.imgSrc = this.finalGifs[
      Math.floor(Math.random() * this.finalGifs.length)
    ];
  }

  render() {
    const { timeRemain, totalTime } = this.props;
    const endAngle = 180 - timeRemain * (360 / totalTime);
    const showGif = timeRemain < 1 && timeRemain > -6;

    const urlParams = new URLSearchParams(window.location.search);
    const isJack = urlParams ? urlParams.get("mode") === "jake" : false;
    if (isJack) {
      this.imgSrc = "./images/jack.gif";
    }

    const fillColor =
      timeRemain > 0
        ? COLORS[Math.floor((timeRemain - 1) / (totalTime / 4)) % COLORS.length]
        : "red";
    return (
      <React.Fragment>
        <div className="number-count-container">
          <div className="number-count" style={{ color: fillColor }}>
            {timeRemain}
          </div>
        </div>

        {showGif && (
          <div className="gif-container">
            <img src={this.imgSrc} alt="time is up" className="gif-img" />
          </div>
        )}

        {!showGif && (
          <PieChart width={260} height={260}>
            <Pie
              data={data}
              cx={130}
              cy={130}
              startAngle={180}
              endAngle={endAngle}
              innerRadius={90}
              outerRadius={120}
              fill="#8884d8"
              paddingAngle={2}
              dataKey="value"
              animationDuration={600}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={fillColor} />
              ))}
            </Pie>
          </PieChart>
        )}
      </React.Fragment>
    );
  }
}
