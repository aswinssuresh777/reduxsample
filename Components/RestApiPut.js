import React, {useState,useEffect} from 'react';
import {Text, View, StatusBar,TextInput,Button} from 'react-native';
const RestApiPut = () => {
  const [jsonData, setJsonData] = useState(false);
  const [postid, setPostId] = useState('');
  const [input2, setInput2] = useState('');
  
useEffect(() => {
    // PUT request using fetch with async/await
    async function updatePost() {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React Hooks PUT Request Example' })
        };
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', requestOptions);
        const data = await response.json();
        setPostId(data.title);
    }
// console.log(data)
    updatePost();
    
}, []);

  return (
    <View style={{paddingTop: 30}}>
      <Text>DATA:</Text>
      <View style={{backgroundColor:'red'}}>

      </View>
      <Text>{postid}</Text>
 
    </View>
  );
};
export default RestApiPut;