import { View, Text } from 'react-native'
import React from 'react'

const Featpro = ({title, description}) => {
  return (
    <View>
      <Text style={{fontSize:16, fontWeight:"bold"}}>{title}</Text>
      <Text style={{fontSize:12, color:"grey"}}>{description}</Text>
    </View>
  )
}

export default Featpro