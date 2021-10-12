import React,{Component} from 'react';
import { Text, View,TextInput,ScrollView, Button } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';           

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

class HomePage extends Component{
    render(){
        return(
          <View>
         </View>
            )
    }
  }
            
            function HomeScreen() {
              return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  
                </View>
              );
            }
            
            function SettingsScreen() {
              return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text>Settings!</Text>
                </View>
              );
            }
            
            const Tab = createBottomTabNavigator();
            
             function App() {
              return (
                  <View>
                    
                <NavigationContainer>
                  <Tab.Navigator
                    screenOptions={({ route }) => ({
                      tabBarIcon: ({ focused, color, size }) => {
                        if (route.name === 'Home') {
                          return (
                            <FontAwesome5
                              name={
                                focused
                                  ? 'home'
                                  : 'home'
                              }
                              size={size}
                              color={color}
                            />
                          );
                        } else if (route.name === 'comments') {
                          return (
                            <FontAwesome5
                              name={focused ? 'comment' : 'comment-slash'}
                              size={size}
                              color={color}
                            />
                          );
                        }
                      },
                      tabBarInactiveTintColor: 'gray',
                      tabBarActiveTintColor: 'blue',
                    })}
                  >
                    <Tab.Screen
                      name="Home"
                      component={HomeScreen}
                      options={{   }}
                    />
                    <Tab.Screen name="comments" component={SettingsScreen} />
                  </Tab.Navigator>
                </NavigationContainer>
                </View>
              );
            }
            
export default HomePage