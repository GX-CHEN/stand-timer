import React from "react";

const happyEmos = ['(*^▽^*)', '٩(✿∂‿∂✿)۶', '(*≧▽≦)','(•‿•)', '( ⋂‿⋂’)', '( ´͈ ◡ `͈ )'];
const angryEmos = ['ಠ_ಠ', 'ಠ▃ಠ', '(;¬_¬)', '(;° ロ°)','(๑•﹏•)','◑.◑'];

export default class TimerContainer extends React.Component {
  render() {
    const { timeRemain } = this.props;
    let currentEmo = '';

    if (timeRemain > 0) {
      currentEmo = happyEmos[Math.floor(Math.random()*happyEmos.length)];
    } else {
      currentEmo = angryEmos[Math.floor(Math.random()*angryEmos.length)];
    }
    return (
      <div className='emo-container'>
        {currentEmo}
      </div>
    );
  }
}
