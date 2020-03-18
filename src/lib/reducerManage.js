let gReducers = {};
let gState = {};
export default {
  init(reducers) {
    gReducers = reducers;
    gState = reducers();
  },
  getState() {
    return gState;
  },
  dispatch(action) {
    gState = gReducers(gState, action);
    return gState;
  },
};