import React, {Component, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Button,
  Alert,
} from 'react-native';

const App = () => {
  const [image, setImage] = useState(
    'https://cdn.ferrari.com/cms/network/media/img/resize/649947ec9148ac002333bf48-ferrari-sf90-xx-stradale-intro-desk-new-2',
  );
  onPress = value => {
    if (value === 'SF90XX') {
      setImage(
        'https://cdn.ferrari.com/cms/network/media/img/resize/649947ec9148ac002333bf48-ferrari-sf90-xx-stradale-intro-desk-new-2',
      );
    } else if(value === 'GT3 RS'){
      setImage(
        'https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO8xz60KBAhQ52DdgfN9300DynvAT89ErfIjCzaDrx5108uJWRaVWCAxFH2OEo8VP3TexLeuqXWIJeFgf%25oWjrHwo0nq8J',
      );
    }else{
      setImage(
        'https://mclaren.scene7.com/is/image/mclaren/Mclaren-P1-GTR-everything-tile-1200x1200:crop-4x3?wid=1920&hei=1440'
      )
    }
  };
  return (
    
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Image style={styles.image} source={{uri: image}} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('Ferrari SF90 XX') + onPress('SF90XX')}>
          <Text style={styles.text}>SF90 XX</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onPress('GT3 RS') + console.log('Porche 911 GT3 RS')}>
          <Text style={styles.text}>GT3 RS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onPress('P1 GTR') + console.log('McLaren P1 GTR')}>
          <Text style={styles.text}>P1 GTR</Text> 
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 5,
    margin: 3,
    // Other styles for the button container
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'gray',
  },
  text: {
    fontSize: 80,
    color: 'red',
  },
  image: {
    width: 192 * 2.05,
    height: 160 * 2.05,
  },
});
export default App;
/*import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Page content</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 50,
    fontWeight: '500',
  },
});

export default App;*/