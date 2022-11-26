import { View, Text, Image, TouchableOpacity, } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

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
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Restaurant", {
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
    })} style={{margin:3, backgroundColor:"white", shadowOpacity:100, shadowColor:"grey"}}>
    <View style={{paddingHorizontal:5, height:270}}>
    <Image
    style={{width: 200, height: 200, borderRadius:10,}}
    source={{uri: imgUrl}}
    />
    <Text style={{fontSize:16, fontWeight:"bold", paddingVertical:3,}}>{title}</Text>
    <Text>{rating} . {genre}</Text>
    <Text>{adress}</Text>
    
    </View>
    </TouchableOpacity>
  )
}

export default Rescards