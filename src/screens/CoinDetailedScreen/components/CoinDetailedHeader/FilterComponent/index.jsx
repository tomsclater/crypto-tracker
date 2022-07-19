import React, { memo } from "react";
import { Text, Pressable } from "react-native";

const FilterComponent = (props) => {
  const { filterDay, filterText, selectedRange, setSelectedRange } = props;
  const isFilterSelected = (filter) => filter === selectedRange;

  console.log("Pressed");
  return (
    <Pressable
      style={{
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 5,
        backgroundColor: isFilterSelected(filterDay)
          ? "#1e1e1e"
          : "transparent",
      }}
      onPress={() => setSelectedRange(filterDay)}
    >
      <Text style={{ color: isFilterSelected(filterDay) ? "white" : "grey" }}>
        {filterText}
      </Text>
    </Pressable>
  );
};

export default memo(FilterComponent);
