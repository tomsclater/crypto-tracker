import React, { useEffect, useState } from "react";
import { View, Text, FlatList, RefreshControl } from "react-native";
import CoinItem from "../../components/CoinItem";
import { getMarketData } from "../../services/requests";

const HomeScreen = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCoins = async (pageNumber) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coinsData = await getMarketData(pageNumber);
    setCoins((existingCoins) => [...existingCoins, ...coinsData]);
    setLoading(false);
  };

  const refetchCoins = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coinsData = await getMarketData();
    setCoins(coinsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 20,
          paddingBottom: 10,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            paddingTop: 6,
          }}
        >
          💎
        </Text>
        <Text
          style={{
            fontFamily: "BarlowCondensed",
            color: "white",
            fontSize: 29,
            letterSpacing: 1,
          }}
        >
          {"  "}
          Crypto Trends {"  "}
        </Text>

        <Text
          style={{
            color: "lightgrey",
            fontSize: 10,
            paddingTop: 10,
            fontWeight: "200",
            paddingRight: 50,
          }}
        >
          🦎 {"  "}Powered by Coin Gecko
        </Text>
      </View>
      <View
        style={{ flexDirection: "row", justifyContent: "space-between" }}
      ></View>
      <FlatList
        data={coins}
        renderItem={({ item }) => <CoinItem marketCoin={item} />}
        onEndReached={() => fetchCoins(coins.length / 50 + 1)}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            tintColor="white"
            onRefresh={refetchCoins}
          />
        }
      />
    </View>
  );
};

export default HomeScreen;
