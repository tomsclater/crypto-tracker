import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import SearchableDropDown from "react-native-searchable-dropdown";
import styles from "./styles";
import { useRecoilState } from 'recoil';
import { allPortfolioBoughtAssetsInStorage } from '../../atoms/PortfolioAssets';

const AddNewAssetScreen = () => {
  const [allCoins, setAllCoins] = useState([])
  const [boughtAssetQuantity, setBoughtAssetQuantity] = useState("");
  const [assetsInStorage, setAssetsInStorage] = useRecoilState(
    allPortfolioBoughtAssetsInStorage
  );

  const onAddNewAsset = () => {

  }

  return (
    <View style={{ flex: 1 }}>
      <SearchableDropDown
        items={allCoins}
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
            onChangeText={setBoughtAssetQuantity}
          />
          <Text style={styles.ticker}>BTC</Text>
        </View>
        <Text style={styles.pricePerCoin}>$20000 per coin</Text>
      </View>
      <Pressable
        style={styles.buttonContainer}
        onPress={onAddNewAsset}
      >
        <Text style={styles.buttonText}>Add New Asset</Text>
      </Pressable>
    </View>
  );
};

export default AddNewAssetScreen;
