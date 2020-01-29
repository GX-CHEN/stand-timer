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
  render() {
    const { timeRemain, totalTime } = this.props;
    const endAngle = 180 - timeRemain * (360 / totalTime);

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

        <PieChart width={300} height={300}>
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
