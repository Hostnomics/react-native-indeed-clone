import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {


//Built out around 33rd min: https://youtu.be/mJ3bGvy0WAY?t=1980
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
        <Image 
          source={iconUrl}
          resizeMode="cover"
          style={styles.btnImg(dimension)}
        />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn