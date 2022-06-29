import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.coinContainer}>
        <Image
          source={{
            uri: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
          }}
          style={{
            height: 30,
            width: 30,
            marginRight: 10,
            alignSelf: "center",
          }}
        />
        <View>
          <Text style={styles.title}>Bitcoin</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>BTC</Text>
            <Text style={styles.text}>0.63%</Text>
          </View>
        </View>
        <StatusBar style="light" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
  },
  title: {
    color: "#FFF0F5",
    fontSize: 16,
    fontWeight: "800",
  },
  text: {
    color: "#FFF0F5",
    marginRight: 5,
  },
  coinContainer: {
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#282828",
    padding: 15,
  },
});
