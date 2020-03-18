import React from 'react';

export default (props) => {
  return <div>
    <span>{props.num}</span><button onClick={props.onClick}>+1</button>
  </div>
}