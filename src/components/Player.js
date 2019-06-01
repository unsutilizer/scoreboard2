import React from 'react';
import {Counter} from "./Counter";

export class Player extends React.Component {
  render() {
    console.log(this.props.name, ' redered');

    return (
      <div className='player'>
    <span className='player-name'>
      <button className='remove-player'
              onClick={() => this.props.removePlayer(this.props.id)}>x</button>
    </span>
        <span className='player-name'>{this.props.name}</span>
        <Counter score={this.props.score} id={this.props.id} changeScore={this.props.changeScore}/>
      </div>
    );
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log(nextProps);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log(nextProps);
    // 변경될 props를 비교하영 true or false 리턴
    return nextProps.score !== this.props.score;
  }
}