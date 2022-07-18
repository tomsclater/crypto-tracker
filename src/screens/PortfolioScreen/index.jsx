import React, { Suspense } from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-web";
import PortfolioAssetsList from "./components/PortfolioAssetsList";

const PortfolioScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Suspense
        fallback={<Text style={{ color: "white" }}>Loading Please Wait</Text>}
      >
        <PortfolioAssetsList />
      </Suspense>
    </View>
  );
};

export default PortfolioScreen;
