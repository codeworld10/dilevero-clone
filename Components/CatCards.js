import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CatCards = ({imgUrl, title}) => {
  return (
    <TouchableOpacity style={{paddingHorizontal:5}}>
    <Image source={{uri: imgUrl}} style={{width: 100, height: 100, borderRadius:10}} />
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default CatCards