import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import "./Donut.css";

const data = [
  { name: "Group A", value: 200 },
  { name: "Group B", value: 200 },
  { name: "Group C", value: 200 },
  { name: "Group D", value: 200 }
];
const COLORS = ["#FF8042", "#FFBB28", "#00C49F", "#0088FE"];

export default class Donut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.setState({ timeRemain: 60 });
  };

  render() {
    const { timeRemain } = this.state;
    const endAngle = 180 - timeRemain * 6;
    const textColor =
      timeRemain > 0 ? COLORS[timeRemain % COLORS.length] : "red";

    const fillColor =
      timeRemain > 0
        ? COLORS[Math.floor((timeRemain - 1) / 15) % COLORS.length]
        : "red";
    return (
      <React.Fragment>
        <div className="number-count-container">
          <div className="number-count" style={{ color: textColor }}>
            {this.state.timeRemain}
          </div>
        </div>

        <PieChart width={300} height={300} onClick={this.reset}>
          <Pie
            data={data}
            cx={150}
            cy={150}
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
      </React.Fragment>
    );
  }
}
