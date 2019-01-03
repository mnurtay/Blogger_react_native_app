import React from 'react';
import { View } from 'react-native';
import Router from './src/navigation'
import { Font } from 'expo'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      fontLoaded: false
    }
  }
  async componentDidMount(){
    await Font.loadAsync({
      'charmBold': require('./assets/fonts/Charm-Bold.ttf'),
      'charm': require('./assets/fonts/Charm-Regular.ttf'),
      'happyMonkey': require('./assets/fonts/HappyMonkey-Regular.ttf'),
    })
    this.setState({ fontLoaded: true })
  }

  render() {
    return (
      <View style={{ flex:1 }}>
        {
          this.state.fontLoaded ? (
            <Router />
          ) : null
        }
      </View>
    );
  }
}

