import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CoinDetailedScreen = () => {
  return (
    <View>
      <Text style={{ color: "white" }}>Detailed Screen</Text>
      <Ionicons name="chevron-back-sharp" size={24} color="white" />
    </View>
  );
};

export default CoinDetailedScreen;
