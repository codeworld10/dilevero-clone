import { View, Text, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "../Components/Categories";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
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
          <Ionicons style={{paddingHorizontal:5}} name="search-outline" size={22} color="grey" />
          <TextInput
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search for food or restaurants"
          />
        </View>
        <Ionicons
         
          name="options-outline"
          size={24}
          color="#00CCBB"
        />
      </View>
      <Categories />
    </SafeAreaView>
  );
};

export default HomeScreen;
