import React from 'react';
import { View } from 'react-native';
import Router from './src/navigation'
import { Font } from 'expo'

import Reducers from './src/reducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { thunk } from 'redux-thunk'

const middleware = applyMiddleware(thunk)
const store = createStore(Reducers)

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
      'lobster': require('./assets/fonts/Lobster-Regular.ttf')
    })
    this.setState({ fontLoaded: true })
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex:1 }}>
          {
            this.state.fontLoaded ? (
              <Router />
            ) : null
          }
        </View>
      </Provider>
    );
  }
}

