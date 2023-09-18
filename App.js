import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

class App extends Component {
  state = {
    count: 0,
    expression: '', // Expression to evaluate
  };

  handleButtonPress = value => {
    const {expression} = this.state;

    if (value === '=') {
      // Evaluate the expression
      try {
        const result = eval(expression);
        this.setState({expression: String(result)});
      } catch (error) {
        this.setState({expression: 'Error'});
      }
    } else if (value === 'C') {
      // Clear the expression
      this.setState({expression: ''});
    } 
    else if (value === 'DEL') {
      // Delete the last word
      const updatedExpression = expression.slice(0, -1);
      this.setState({ expression: updatedExpression });
    }else {
      // Append the value to the expression
      this.setState({expression: expression + value});
    }
  };

  render() {
    const {expression} = this.state;

    return (
      <View style={{flex: 1,backgroundColor:'black'}}>
        <View style={styles.container}>
          <Text style={styles.text}>{expression}</Text>
        </View>
        <View style={styles.number}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handleButtonPress('7')}>
              <Text style={styles.buttonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handleButtonPress('8')}>
              <Text style={styles.buttonText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handleButtonPress('9')}>
              <Text style={styles.buttonText}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handleButtonPress('*')}>
              <Text style={styles.buttonText}>*</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handleButtonPress('4')}>
              <Text style={styles.buttonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handleButtonPress('5')}>
              <Text style={styles.buttonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handleButtonPress('6')}>
              <Text style={styles.buttonText}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handleButtonPress('-')}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handleButtonPress('1')}>
              <Text style={styles.buttonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handleButtonPress('2')}>
              <Text style={styles.buttonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handleButtonPress('3')}>
              <Text style={styles.buttonText}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handleButtonPress('+')}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handleButtonPress('C')}>
              <Text style={styles.buttonText}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handleButtonPress('DEL')}>
              <Text style={styles.buttonText}>DEL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handleButtonPress('0')}>
              <Text style={styles.buttonText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handleButtonPress('=')}>
              <Text style={styles.buttonText}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  number: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'black',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#AABBCC',
    padding: 10,
    borderWidth: 8,
    borderRadius: 20,
    borderColor:'white',
    margin: 3,
  },
  buttonText: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold'
  },
  text: {
    backgroundColor:'black',
    fontSize: 60,
    color: 'white',
    alignItems:'flex-end',
    fontWeight: 'bold'
  },
});

export default App;
