import { View, Text, Image, TouchableOpacity, } from 'react-native'
import React from 'react'

const Rescards = ({
    id,
    imgUrl, 
    title,
    rating,
    genre,
    adress,
    shortDescription,
    dishes,
    long,
    lat,
}) => {
  return (
    <TouchableOpacity style={{margin:3, backgroundColor:"white", shadowOpacity:100, shadowColor:"grey"}}>
    <View style={{paddingHorizontal:5,}}>
    <Image
    style={{width: 200, height: 200, borderRadius:10,}}
    source={{uri: imgUrl}}
    />
    <Text style={{fontSize:16, fontWeight:"bold", paddingVertical:3}}>{title}</Text>
    <Text>{rating} . {genre}</Text>
    <Text>{adress}</Text>
    <Text>{shortDescription}</Text>
    <Text>{dishes}</Text>
    <Text>{long}</Text>
    <Text>{lat}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default Rescards