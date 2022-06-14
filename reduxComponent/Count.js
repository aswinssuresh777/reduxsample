import React, {useState} from 'react';
// import store, {
//   COUNTER_DECREMENT,
//   COUNTER_INCREMENT,
//   COUNTER_RESET,
// } from './Store';
import store from './Store';
import {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  COUNTER_RESET,
} from './Action';
import {View, Text, Button} from 'react-native';

function Count() {
  const [count, setCount] = useState(store.getState().counter.count);

  const increment = () => {
    store.dispatch({type: COUNTER_INCREMENT});
    setCount(store.getState().counter.count);
    console.log('>> Inc <<', store.getState().counter.count);
  };

  const decrement = () => {
    store.dispatch({type: COUNTER_DECREMENT});
    setCount(store.getState().counter.count);
    console.log('>> Dec <<', store.getState().counter.count);
  };
  const creset = () => {
    store.dispatch({type: COUNTER_RESET});
    setCount(store.getState().counter.count);
    console.log('>> Count is RESET to 0 <<', store.getState().counter.count);
  };

  return (
    <View>
      <Text>For Count Value: {count}</Text>
      <Button title="Increment" onPress={increment} />

      <Button title="Decrement" onPress={decrement} />

      <Button title="Reset" onPress={creset} />
    </View>
  );
}

export default Count;