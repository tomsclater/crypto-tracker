import React from "react";
import { View, Text } from "react-native";

const FilterComponent = (props) => {
  const { filterDay, filterText } = props;
  return (
    <View
      style={{
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 5,
        backgroundColor: "#404040",
      }}
    >
      <Text style={{ color: "white" }}>{filterText}</Text>
    </View>
  );
};

export default FilterComponent;
