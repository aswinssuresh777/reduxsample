import React, {useState,useEffect} from 'react';
import {Text, View, StatusBar,TextInput,Button} from 'react-native';
const RestApiPost = () => {
  const [jsonData, setJsonData] = useState(false);
  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: 'elaya'
       
        })
      })
      .then(response => response.json())
      .then(json => {
        setJsonData(json.title),
        console.log("JSON: ",json)
      })
      .catch(error => {
        console.error("ERROR",error);
      });
  }, []);

  return (
    <View style={{paddingTop: 30}}>
      <Text>DATA:</Text>
      <View style={{backgroundColor:'red'}}>

      </View>
      <Text>{jsonData}</Text>
      <TextInput
             onChangeText={setInput}
             value={input}
             placeholder="useless placeholder"
      
      />
      <Button
      title='add to json'
      onPress={()=>setInput2(input)}
      />
    </View>
  );
};
export default RestApiPost;