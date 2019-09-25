import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider, connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import Navigator from './config/routes.js';
import { AlertProvider } from './components/Alert/';
import store from './config/store.js';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',
  $white: '#fff',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',
  $darkText: '#343434'
});

const App = ({ dispatch, nav }) => (
  <Navigator 
  navigation={addNavigationHelpers({
    dispatch,
    state: nav
  })}
  />
);

const mapStateToProps = (state) => ({
  nav: state.nav
});

const AppWithNavigation = connect(mapStateToProps)(App);

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <AppWithNavigation />
    </AlertProvider>
  </Provider>
  );
