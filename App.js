import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

class App extends Component {
  state = {
    count: 0,
    textColor: '#000000', // Initial text color
  };

  onPress = () => {
    const randomColor = this.generateRandomColor();
    this.setState((prevState) => ({
      count: prevState.count + 1,
      textColor: randomColor,
    }));
  };

  onClear = () => {
    this.setState({
      count: 0,
      textColor: '#000000', // Reset text color to black
    });
  };

  generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  render() {
    const { count, textColor } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonA} onPress={this.onPress}>
            <Text style={styles.buttonText}>Click me</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onClear}>
            <Text style={styles.buttonText}>Clear</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={[styles.text, { color: textColor }]}>
            You clicked {count} times
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    borderWidth: 5,
    borderRadius: 20,
  },
  buttonA: {
    right: 0,
    alignItems: 'center',
    backgroundColor: '#AABBCC',
    padding: 10,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#AABBCC',
    padding: 10,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  buttonText: {
    fontSize: 30,
    color: 'black',
  },
  text: {
    fontSize: 30,
    color: 'black',
  },
});

export default App;