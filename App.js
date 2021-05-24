// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'deeppink',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React,{useState} from 'react';
import { View,Text } from 'react-native';
import {
  NavigationContainer,
  useFocusEffect,
  
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PageOneScene from './screen/pageOneScene'

function ProfileScreen() {
  useFocusEffect(
    React.useCallback(() => {
      alert('Screen was focused');
      // Do something when the screen is focused
      return () => {
        alert('Screen was unfocused');
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );

  return <View />;
}

function HomeScreen() {
  const [number,setNumber]=useState(0)
  
  useFocusEffect( 
    React.useCallback(()=>{
      setNumber(number++)
      return()=>{
        console.log("number",number)
      }
    },[])
  )
  
  return (
    <View>
      <View style={{backgroundColor:"green"}}>
        <Text>Home.....Screen</Text>
        <PageOneScene number={number} />
      </View>
    </View>
  )
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="PageOne" component={PageOneScene}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}