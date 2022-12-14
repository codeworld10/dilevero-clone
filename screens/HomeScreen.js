import { View, Text, Image, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "../Components/Categories";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import Featpro from "../Components/Featpro";
import React from "react";



const HomeScreen = () => {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: "white",
    }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 15,
        }}
      >
        <Image
          style={{ width: 25, height: 25, borderRadius: 150 }}
          source={require("../assets/usm.png")}
        />
        <View style={{ paddingHorizontal: 5, flex: 1 }}>
          <Text style={{ fontSize: 12, color: "grey" }}>Deliver now</Text>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Current Location
          </Text>
        </View>
        <FontAwesome5 name="user" size={24} color="#00CCBB" />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 15,
          marginTop: 10,
        }}
      >
        <View
          style={{
            paddingHorizontal: 5,
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#D3D3D3",
            paddingVertical: 5,
            borderRadius: 5,
          }}
        >
          <Ionicons
            style={{ paddingHorizontal: 5 }}
            name="search-outline"
            size={22}
            color="grey"
          />
          <TextInput
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search for food or restaurants"
          />
        </View>
        <Ionicons name="options-outline" size={24} color="#00CCBB" />
      </View>
      <ScrollView>
      <Categories />
      <Featpro title="Offers near you" description="Why not support your local restaurant today." />
      <Featpro title="Featured" description="Why not support your local restaurant today." />
      <Featpro title="Tasty Discounts" description="Why not support your local restaurant today." />
    </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
