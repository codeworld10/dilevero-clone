import { View, Text } from "react-native";
import React from "react";
import Featpro from "./Featpro";
import { Feather } from "@expo/vector-icons";

const Featured = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical:12
      }}
    >
      <Featpro title="Offers near you!" description="Why not support your local restaurant tonight" />
      <Feather name="arrow-right" size={24} color="#00CCBB" />
    </View>
  );
};

export default Featured;
