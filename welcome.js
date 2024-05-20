import React, {useState, useEffect, useRef} from "react";
import {View, Text, StyleSheet, Image, Animated, Alert} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Welcome=()=>{
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 5000,
          useNativeDriver: true,
        }).start();
      };

    useEffect(()=>{
        setTimeout(() => {
        fadeIn()
        }, 2000);
    }, [])




return(
<SafeAreaView style={styles.container}>
    <Animated.View style={{"opacity":fadeAnim}}>
        <Text style={styles.text}>check</Text>
    </Animated.View>
    
    <Image style={styles.img} source={require("./assets/chess-solid-24.png")} />
</SafeAreaView>
)};


const styles= StyleSheet.create({
    container:{
        "flexDirection":"row",
        "alignItems":"center",
        "gap":4
    },
    text:{
        "fontWeight":"bold",
        "fontSize":70,
        "textTransform":"capitalize"
    },
    
})