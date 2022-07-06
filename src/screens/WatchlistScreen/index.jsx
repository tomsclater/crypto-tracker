import React, { useContext } from "react";
import { View, Text } from "react-native";
import { WatchlistContext } from "../../contexts/WatchlistContext";

const WatchlistScreen = () => {
  const { value } = useContext(WatchlistContext);
  console.log(value);
  return (
    <View>
      <Text style={{ color: "white" }}>WatchlistScreen</Text>
    </View>
  );
};

export default WatchlistScreen;
