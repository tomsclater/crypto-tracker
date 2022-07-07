import React from "react";
import { FlatList } from "react-native";
import { useWatchlist } from "../../contexts/WatchlistContext";
import CoinItem from "../../components/CoinItem";

const WatchlistScreen = () => {
  const { watchlistCoinIds } = useWatchlist();
  console.log(watchlistCoinIds);
  return (
    <FlatList
      data={watchlistCoinIds}
      // renderItem={({ item }) => <CoinItem marketCoin={item} />}
    />
  );
};

export default WatchlistScreen;
