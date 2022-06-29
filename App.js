import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import CoinItem from "./src/components/CoinItem";
import cryptocurrencies from "./assets/data/cryptocurrencies.json";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={cryptocurrencies}
        renderItem={({ item }) => <CoinItem marketCoin={item} />}
      />

      {/* <CoinItem name={"Thomas"} />
      <CoinItem name={"Mariana"} /> */}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
  },
});
