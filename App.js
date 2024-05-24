import { StatusBar } from 'expo-status-bar';
import React, {useCallback} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Welcome } from './screens/welcome';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();


export default function App() {
  const [fontLoaded,fontError]=useFonts({
    'Roboto-Black':require('./assets/fonts/Roboto-Black.ttf'),
    'Roboto-Regular':require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold':require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Italic':require('./assets/fonts/Roboto-Italic.ttf'),
    'Roboto-Medium':require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Thin':require('./assets/fonts/Roboto-Thin.ttf'),
    'Roboto-Light':require('./assets/fonts/Roboto-Light.ttf'),
    
  });


  const onLayoutRootView =useCallback(async () => {
    if (fontLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded, fontError]);


  
  return (
    
    <SafeAreaProvider style={styles.container}>
      {/* <Welcome/> */}
      <Text style={styles.title}>Hello</Text>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontFamily:"Roboto-Black",
    fontSize:64,
    fontWeight:"bold",
    color:"black"
  }
});
