import 'react-native-gesture-handler';
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Service } from './Service';

import { Provider } from 'react-redux';
import { store } from './src/Redux/store';

import { Routes } from './src/Router/Routes';

console.disableYellowBox = true;

export default class App extends React.Component {

  state = {
    spinner: false,
  };

  componentDidMount() {
    Service.show_spinner(status => {
      this.setState({ spinner: status });
    });
  }

  render() {
    const { spinner } = this.state;
    return (
      <>
        <Provider store={store}>
          <Routes />
          {spinner && (
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 2,
                opacity: 0.4,
                backgroundColor: '#000000',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <ActivityIndicator size={'large'} color={'red'} />
            </View>
          )}
        </Provider>
      </>
    );
  }

}
