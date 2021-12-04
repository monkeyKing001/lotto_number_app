import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const[lotto, setLotto] = useState([]);

  function makeLotto(){
    let i = 0;
    let lnumber = [];
    let ran_num;
    for (i = 0; i < 6; i++)
    {
      ran_num = Math.floor(Math.random()* 45 + 1);
      if(lnumber.includes(ran_num))
       i--; 
      else
      lnumber.push(ran_num);      
    }
    setLotto(lnumber);
  }
  useEffect(()=>{
    makeLotto();
  },[]);

  return(
    <View style={styles.container}>
      <Text style={{fontSize : 25, marginBottom: 150}}>Welcome to Lotto Number</Text>
      <Button title = "무료 추천 번호 받기" onPress={()=>makeLotto()}/>
      <Text style={{fontSize : 25, marginBottom: 150}}> {lotto.toLocaleString()}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
