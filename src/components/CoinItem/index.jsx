import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const CoinItem = ({ marketCoin }) => {
  const {
    id,
    name,
    current_price,
    market_cap_rank,
    price_change_percentage_24h,
    symbol,
    market_cap,
    image,
  } = marketCoin;

  const navigation = useNavigation();

  const percentageColor =
    price_change_percentage_24h < 0 ? "#ea3943" : "#16c784" || "white";

  const rocketColor =
    price_change_percentage_24h < 0 ? "#7B3F00" : "#16c784" || "white";

  const normalizeMarketCap = (marketCap) => {
    if (marketCap > 1e12) {
      return `${(marketCap / 1e12).toFixed(1)} T`;
    }
    if (marketCap > 1e9) {
      return `${(marketCap / 1e9).toFixed(1)} B`;
    }
    if (marketCap > 1e6) {
      return `${(marketCap / 1e6).toFixed(1)} M`;
    }
    if (marketCap > 1e3) {
      return `${(marketCap / 1e3).toFixed(1)} K`;
    }
    return marketCap;
  };

  return (
    <Pressable
      style={styles.coinContainer}
      onPress={() => navigation.navigate("CoinDetailedScreen", { coinId: id })}
    >
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
            name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
            size={14}
            color={percentageColor}
          />
          <MaterialCommunityIcons
            style={styles.green}
            name={
              price_change_percentage_24h < 0
                ? "emoticon-poop"
                : "rocket-launch"
            }
            size={14}
            color={rocketColor}
          />

          <Text style={{ color: percentageColor }}>
            {price_change_percentage_24h?.toFixed(2)}% today
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: "auto", alignItems: "flex-end" }}>
        <Text style={styles.title}>${current_price}</Text>
        <Text style={{ color: "white" }}>
          MCap {normalizeMarketCap(market_cap)}
        </Text>
      </View>
    </Pressable>
  );
};

export default CoinItem;
