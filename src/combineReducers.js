
export default function combineReducers(reducers) {
  const keys = Object.keys(reducers);
  return (state, action) => {
    let nextState = {};
    if (state === undefined) {
      state = {};
    }
    keys.forEach(key => {
      nextState[key] = reducers[key](state[key], action);
    });
    return nextState;
  };
}