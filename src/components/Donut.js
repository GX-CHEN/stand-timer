import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 200 },
  { name: "Group B", value: 200 },
  { name: "Group C", value: 200 },
  { name: "Group D", value: 200 }
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default class Donut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeRemain: 60
    };
  }

  componentDidMount = () => {
    setInterval(() =>
      this.setState({
        timeRemain: this.state.timeRemain - 1
      }), 1000
    );
  };

  render() {
    const endAngle = 180 - this.state.timeRemain * 6;
    console.log(endAngle);
    return (
      <PieChart width={400} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          startAngle={180}
          endAngle={endAngle}
          innerRadius={120}
          outerRadius={160}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
          animationDuration={600}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}
