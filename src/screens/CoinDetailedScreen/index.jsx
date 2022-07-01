import React from "react";
import { View, Text, Image } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import Coin from "../../../assets/data/crypto.json";
import styles from "./styles";

const CoinDetailedScreen = () => {
  const {
    image: { small },
    name,
    symbol,
    market_data: { market_cap_rank },
  } = Coin;

  return (
    <View style={styles.headerContainer}>
      {/* <Text style={{ color: "white" }}>Detailed Screen</Text> */}
      <Ionicons name="chevron-back-sharp" size={24} color="white" />
      <View style={styles.tickerContainer}>
        <Image source={{ uri: small }} style={{ width: 25, height: 25 }} />
        <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
          #{market_cap_rank}
        </Text>
      </View>
      <EvilIcons name="user" size={30} color="white" />
    </View>
  );
};

export default CoinDetailedScreen;
