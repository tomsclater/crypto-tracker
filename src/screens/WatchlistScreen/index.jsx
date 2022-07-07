import React from "react";
import { View, Text } from "react-native";
import { useWatchlist } from "../../contexts/WatchlistContext";

const WatchlistScreen = () => {
  const { value } = useWatchlist();
  console.log(value);
  return (
    <View>
      <Text style={{ color: "white" }}>WatchlistScreen</Text>
    </View>
  );
};

export default WatchlistScreen;
