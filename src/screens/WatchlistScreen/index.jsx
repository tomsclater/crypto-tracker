import React, { useState, useEffect } from "react";
import { FlatList, Text } from "react-native";
import { useWatchlist } from "../../contexts/WatchlistContext";
import CoinItem from "../../components/CoinItem";
import { getWatchlistedCoins } from '../../services/requests'

const WatchlistScreen = () => {
  const { watchlistCoinIds } = useWatchlist();

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const transformCoinIds = () => watchlistCoinIds.join('%2C');

  const fetchWatchlistedCoins =  async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const watchlistedCoinsData = await getWatchlistedCoins(1, transformCoinIds());
    setCoins([...coins, ...watchlistedCoinsData]);
    setLoading(false);
  }

  useEffect(() => {
    fetchWatchlistedCoins()
  }, [])
  return (
    <FlatList
      data={coins}
      renderItem={({ item }) => <CoinItem marketCoin={item} />}
    />
  );
};

export default WatchlistScreen;
