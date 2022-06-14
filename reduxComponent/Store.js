import * as redux from 'redux';
import {COUNTER_DECREMENT, COUNTER_INCREMENT, COUNTER_RESET} from './Action';
// export const COUNTER_INCREMENT = "COUNTER_INCREMENT";
// export const COUNTER_DECREMENT = "COUNTER_DECREMENT";
// export const COUNTER_RESET = "COUNTER_RESET";

export const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case COUNTER_DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case COUNTER_RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};

const rootReducer = (state = {}, action) => {
  return {
    counter: counterReducer(state.counter, action),
  };
};

const store = redux.legacy_createStore(rootReducer);

//const store = redux.createStore(rootReducer);

export default store;