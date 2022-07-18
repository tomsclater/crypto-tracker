import React from "react";
import { View, Text } from "react-native";

const FilterComponent = (props) => {
  const { filterDay, filterText, selectedRange } = props;
  const isFilterSelected = (filter) => filter === selectedRange;

  return (
    <View
      style={{
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 5,
        backgroundColor: isFilterSelected(filterDay)
          ? "#1e1e1e"
          : "transparent",
      }}
    >
      <Text style={{ color: "white" }}>{filterText}</Text>
    </View>
  );
};

export default FilterComponent;
