import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import SearchableDropDown from "react-native-searchable-dropdown";
import styles from "./styles";

const AddNewAssetScreen = () => {
  const [boughtAssetQuantity, setboughtAssetQuantity] = useState("");
  return (
    <View>
      <SearchableDropDown
        items={[]}
        onItemSelect={(item) => console.log(item)}
        containerStyle={styles.dropdownContainer}
        itemStyle={styles.item}
        itemTextStyle={{ color: "white" }}
        resetValue={false}
        placeholder={"Select a coin..."}
        placeholderTextColor="white"
        textInputProps={{
          underlineColorAndroid: "transparent",
          style: {
            padding: 12,
            borderWidth: 1.5,
            borderColor: "#444444",
            borderRadius: 5,
            backgroundColor: "#1e1e1e",
            color: "white",
          },
        }}
      />
      <View style={styles.boughtQuantityContainer}>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            style={{ color: "white", fontSize: 90 }}
            value={boughtAssetQuantity}
            placeholder="0"
            keyboardType="numeric"
            onChangeText={setboughtAssetQuantity}
          />
          <Text style={styles.ticker}>BTC</Text>
        </View>
      </View>
      <Pressable
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("AddNewAssetScreen")}
      >
        <Text style={styles.buttonText}>Add New Asset</Text>
      </Pressable>
    </View>
  );
};

export default AddNewAssetScreen;
