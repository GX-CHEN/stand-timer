import React from "react";
import { Dropdown, Menu, Button } from "antd";

export default class Selector extends React.Component {
  render() {
    const { durationClick, totalTime } = this.props;
    const menu = (
      <Menu>
        <Menu.Item
          onClick={() => durationClick(180)}
          className="centered large-font"
        >
          180
        </Menu.Item>
        <Menu.Item
          onClick={() => durationClick(120)}
          className="centered large-font"
        >
          120
        </Menu.Item>
        <Menu.Item
          onClick={() => durationClick(60)}
          className="centered large-font"
        >
          60
        </Menu.Item>
        <Menu.Item
          onClick={() => durationClick(30)}
          className="centered large-font"
        >
          30
        </Menu.Item>
        <Menu.Item
          onClick={() => durationClick(10)}
          className="centered large-font"
        >
          10
        </Menu.Item>
      </Menu>
    );

    return (
      <Dropdown overlay={menu} placement="bottomCenter">
        <Button size="large">{totalTime} sec</Button>
      </Dropdown>
    );
  }
}
