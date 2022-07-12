import React from "react";
import { View, Text, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const PortfolioAssetsList = () => {
  return (
    <View>
      <FlatList
        data={[]}
        renderItem={() => <Text>Item</Text>}
        ListHeaderComponent={
          <>
            <Text style={styles.currentBalance}>Current Balance</Text>
            <Text style={styles.currentBalanceValue}>$20000</Text>
            <Text style={styles.valueChange}>1000 (All Time)</Text>
            <View>
              <AntDesign
                style={{ alignSelf: "center", marginRight: 5 }}
                name={"caretup"}
                size={12}
                color={"white"}
              />
              <Text style={styles.percentageChange}>1.2%</Text>
            </View>
          </>
        }
      />
    </View>
  );
};

export default PortfolioAssetsList;
