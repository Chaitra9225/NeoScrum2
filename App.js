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
 import {store,persistor} from './Src/Redux/Store/StorePractice';
 import { PersistGate } from 'redux-persist/integration/react';
 
 
 
 
 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   
   return (
    
    <Provider store={store}>
      <Navigation/>
      </Provider>
    
   );
 };
 
 
 
 export default App;
 