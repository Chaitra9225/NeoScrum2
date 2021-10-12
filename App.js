/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import Navigation from './Src/Navigation/StackNavigation';
import persist from './Src/Config/Store';
import { PersistGate } from 'redux-persist/integration/react';



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const persistStore = persist();
  return (
    <Provider Store={ persist.Store }>
      <PersistGate loading={null} persistor={ persist.persistor }>
   <Navigation/>
   </PersistGate>
   </Provider>
  );
};



export default App;
