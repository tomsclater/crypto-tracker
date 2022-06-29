import React from "react";
import { Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const CoinItem = ({ marketCoin }) => {
  const {
    name,
    current_price,
    market_cap,
    market_cap_rank,
    price_change_percentage_24h,
    symbol,
    image,
  } = marketCoin;

  return (
    <View style={styles.coinContainer}>
      <Image
        source={{
          uri: image,
        }}
        style={{
          height: 30,
          width: 30,
          marginRight: 10,
          alignSelf: "center",
        }}
      />
      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>{market_cap_rank}</Text>
          </View>
          <Text style={styles.text}>{symbol.toUpperCase()}</Text>
          <AntDesign
            style={styles.green}
            name="caretup"
            size={14}
            color="green"
          />
          <Text style={styles.text}>
            {price_change_percentage_24h.toFixed(2)}% today
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: "auto" }}>
        <Text style={styles.title}>{current_price}</Text>
        <Text style={styles.text}>MCap 405.02B</Text>
      </View>
    </View>
  );
};

export default CoinItem;
