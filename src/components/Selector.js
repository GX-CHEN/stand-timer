import React from "react";
import { Dropdown, Menu, Button } from "antd";

export default class Selector extends React.Component {
  render() {
    const { durationClick } = this.props;
    const menu = (
      <Menu>
        <Menu.Item onClick={() => durationClick(180)}>180 seconds</Menu.Item>
        <Menu.Item onClick={() => durationClick(120)}>120 seconds</Menu.Item>
        <Menu.Item onClick={() => durationClick(60)}>60 seconds</Menu.Item>
        <Menu.Item onClick={() => durationClick(30)}>30 seconds</Menu.Item>
        <Menu.Item onClick={() => durationClick(10)}>10 seconds</Menu.Item>
      </Menu>
    );

    return (
      <Dropdown overlay={menu} placement="bottomCenter">
        <Button>Select Time</Button>
      </Dropdown>
    );
  }
}
