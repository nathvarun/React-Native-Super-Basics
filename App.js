import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './components/CustomButton'
export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      productCount: 0
    }
  }

  addProduct = () => {

    this.setState((prevState) => ({ 'productCount': prevState.productCount + 1 }))


  }

  render() {
    return (
      <View style={styles.container}>
        <CustomButton onPress={this.addProduct} />
        <Text>{this.state.productCount}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
