import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";

const PortfolioAssetsItem = () => {
  return (
    <View style={styles.coinContainer}>
      <Image src={{ uri: "" }} style={{ height: 30, width: 30 }} />
      <View>
        <Text style={styles.title}>Bitcoin</Text>
        <Text style={styles.ticker}>BTC</Text>
      </View>
      <View style={{ marginLeft: "auto" }}>
        <Text style={styles.title}>$4000</Text>
        <View style={{ flexDirection: "row" }}>
          <AntDesign
            style={{ alignSelf: "center", marginRight: 5 }}
            name={"caretup"}
            size={12}
            color={"white"}
          />
          <Text style={{ color: "white", fontWeight: "600" }}>1.2%</Text>
        </View>
      </View>
    </View>
  );
};

export default PortfolioAssetsItem;
