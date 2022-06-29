import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    color: "#FFF0F5",
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 3,
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
    justifyContent: "space-between",
  },
  green: {
    marginRight: 5,
    alignSelf: "center",
  },
  rank: {
    fontWeight: "bold",
    color: "white",
  },
  rankContainer: {
    backgroundColor: "#585858",
    paddingHorizontal: 5.5,
    borderRadius: 5,
    marginRight: 5,
  },
});

export default styles;
