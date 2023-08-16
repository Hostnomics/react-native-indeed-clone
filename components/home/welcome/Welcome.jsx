import {useState, } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'; 

import { useRouter } from 'expo-router';


//Built out at (35:06): https://youtu.be/mJ3bGvy0WAY?t=2106 

import styles from './welcome.style'

import { icons, SIZES } from '../../../constants';

const Welcome = () => {

  const router = useRouter(); 

  return (
    <View>
        <View style={styles.container}>
          <Text style={styles.userName}>Hello George</Text>
          <Text style={styles.welcomeMessage}>Find your Job</Text>

        </View>
    </View>
  )
}

export default Welcome