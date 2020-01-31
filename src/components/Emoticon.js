import React from "react";

const happyEmos = [
  "(*^▽^*)",
  "٩(✿∂‿∂✿)۶",
  "(*≧▽≦)",
  "(•‿•)",
  "( ⋂‿⋂’)",
  "( ´͈ ◡ `͈ )"
];
const angryEmos = ["ಠ_ಠ", "ಠ▃ಠ", "(;¬_¬)", "(;° ロ°)", "(๑•﹏•)", "◑.◑"];

export default class TimerContainer extends React.Component {
  render() {
    const { timeRemain, totalTime } = this.props;
    let currentEmo = "";

    if (timeRemain < 0) {
      currentEmo = angryEmos[Math.floor(Math.random() * angryEmos.length)];
    } else if (totalTime / timeRemain > 4) {
      currentEmo = <div style={{ color: "#FF8042" }}>"⊙△⊙"</div>;
    } else {
      currentEmo = happyEmos[Math.floor(Math.random() * happyEmos.length)];
    }
    return <div className="emo-container">{currentEmo}</div>;
  }
}
