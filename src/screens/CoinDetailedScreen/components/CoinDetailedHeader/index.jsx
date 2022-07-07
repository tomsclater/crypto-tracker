import React from "react";
import { View, Text, Image } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useWatchlist } from "../../../../contexts/WatchlistContext";

const CoinDetailedHeader = (props) => {
  const { coinId, image, symbol, marketCapRank } = props;
  const navigation = useNavigation();
  const { watchlistCoinIds, storeWatchlistCoinId } = useWatchlist();

  const checkIfCoinIsWatchlisted = () =>
    watchlistCoinIds.some((coinIdValue) => coinIdValue === coinId);
  return (
    <View style={styles.headerContainer}>
      {/* <Text style={{ color: "white" }}>Detailed Screen</Text> */}
      <Ionicons
        name="chevron-back-sharp"
        size={24}
        color="white"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.tickerContainer}>
        <Image source={{ uri: image }} style={{ width: 25, height: 25 }} />
        <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
        <View style={styles.rankContainer}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            #{marketCapRank}
          </Text>
        </View>
      </View>
      <MaterialCommunityIcons
        name={checkIfCoinIsWatchlisted() ? "star" : "star-circle-outline"}
        size={25}
        color={checkIfCoinIsWatchlisted() ? "gold" : "white"}
      />
    </View>
  );
};

export default CoinDetailedHeader;
