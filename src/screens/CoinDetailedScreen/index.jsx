import React from "react";
import { View, Text } from "react-native";
import Coin from "../../../assets/data/crypto.json";
import CoinDetailedHeader from "./components/CoinDetailedHeader";

const CoinDetailedScreen = () => {
  const {
    image: { small },
    name,
    symbol,
    market_data: { market_cap_rank, current_price },
  } = Coin;

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <CoinDetailedHeader
        image={small}
        symbol={symbol}
        marketCapRank={market_cap_rank}
      />
      <View>
        <Text style={{ color: "white", fontSize: 15 }}>{name}</Text>
        <Text
          style={{
            color: "white",
            fontSize: 30,
            fontWeight: "600",
            letterSpacing: 1,
          }}
        >
          ${current_price.usd}
        </Text>
      </View>
    </View>
  );
};

export default CoinDetailedScreen;
