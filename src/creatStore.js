export default function createStore(reducers) {
  const currentListeners = [];
  let currentState;
  let currentReducer = reducers;
  currentState = currentReducer(currentState, {type: '@@zRedux/init'});
  const self = {
    getState: () => currentState,
    dispatch(action) {
      currentState = currentReducer(currentState, action);
      currentListeners.forEach((listener) => listener());
    },
    replaceReducer(nextReducer) {
      currentReducer = nextReducer;
      self.dispatch(currentState, {type: '@@zRedux/replace'});
    },
    subscribe(listener) {
      currentListeners.push(listener);
      return function unsubscribe() {
        const index = currentListeners.indexOf(listener);
        currentListeners.splice(index, 1);
      }
    },
  }
  return self;
}