import React from "react";
import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Coin from "../../../assets/data/crypto.json";

const CoinDetailedScreen = () => {
  const {
    image: { small },
    name,
    market_data: { market_cap_rank },
  } = Coin;
  return (
    <View>
      <Text style={{ color: "white" }}>Detailed Screen</Text>
      <Ionicons name="chevron-back-sharp" size={24} color="white" />
      <Image source={{ uri: small }} style={{ width: 25, height: 25 }} />
      <Text style={{ color: "white" }}>{name}</Text>
      <Text style={{ color: "white" }}>#{market_cap_rank}</Text>
    </View>
  );
};

export default CoinDetailedScreen;
