import React from 'react';
import {createStore, combineReducers} from '../src';
import { render } from 'react-dom';
import Root from './Root.jsx';

const numberState = [1, 2];
function number(state = numberState, action) {
  switch(action.type) {
    case 'add1':
      return [state[0] + action.number, state[1]];
    case 'add2':
      return [state[0], state[1] + action.number];
    default:
      return state;
  }
}
const textState = ['', ''];
function text(state = textState, action) {
  switch(action.type) {
    case 'change1':
      return [action.text, state[1]];
    case 'change2':
      return [state[0], action.text];
    default:
      return state;
  }
}
const store = createStore(combineReducers({number, text}));
render(<Root store={store} />, document.getElementById('root'));
