import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Audio } from 'expo-av';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function pressed(num) {
  for (let step = 0; step < num; step++) {
    try {
      await soundObject.replayAsync();
      await sleep(2000)   
    } catch (error) {
      console.log(`an error occured: ${error}`);
    }
  }
}

export default function App() {
  // TODO: add a picker (https://reactnative.dev/docs/picker) for nunmber of chimes
  var chimes = 10;
  return (
    <View style={styles.container}>
        <Image source={require('./assets/wills.jpg')}style={{width: 200, height: 400}}>
        </Image>
        <Button
          onPress={()=>{pressed(chimes)}} 
          title="chime">Chime</Button>
    </View>
  );
}

const soundObject = new Audio.Sound();
soundObject.loadAsync(require('./assets/sounds/george.wav'));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
