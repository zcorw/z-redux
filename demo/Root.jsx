import React from 'react';
import { Provider, connect } from 'react-redux';
import Button from './Button.jsx';
import Text from './Text.jsx';
import * as actions from './action';

const Btn1 = connect(({number}) => ({num: number[0]}))(Button);
const Btn2 = connect(({number}) => ({num: number[1]}))(Button);
const Text1 = connect(({text}) => ({value: text[0]}))(Text);
const Text2 = connect(({text}) => ({value: text[1]}))(Text);
export default (props) => {
  const click = (index) => props.store.dispatch(actions.click(index));
  const change = (index, e) => {
    const value = e.target.value;
    props.store.dispatch(actions.change(index, value));
  };
  const keyUp = (index, e) => {
    if (e.keyCode === 13) {
      const text = props.store.getState().text[index - 1];
      props.store.dispatch(actions.enter(index, parseInt(text)));
      props.store.dispatch(actions.change(index, ''));
    }
  }
  return <Provider store={props.store}>
    <Text1 onChange={(e) => change(1, e)} onKeyUp={(e) => keyUp(1, e)} />
    <Btn1 onClick={() => click(1)} />
    <Text2 onChange={(e) => change(2, e)} onKeyUp={(e) => keyUp(2, e)} />
    <Btn2 onClick={() => click(2)} />
  </Provider>
}