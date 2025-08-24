import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const GuestPickerComponent = ({ selectedNumber, setSelectedNumber }) => {
  const decrement = () => {
    if (selectedNumber > 1) setSelectedNumber(selectedNumber - 1);
  };
  const increment = () => {
    if (selectedNumber < 12) setSelectedNumber(selectedNumber + 1);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={decrement} style={styles.decrementButton}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.numberText}>{selectedNumber}</Text>
      <TouchableOpacity onPress={increment} style={styles.incrementButton}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",           // flex flex-row 
    alignItems: "center",           // items-center
    borderRadius: 8,                // rounded-lg
    backgroundColor: "transparent",
  },
  decrementButton: {
    borderTopLeftRadius: 8,         // rounded-l-lg
    borderBottomLeftRadius: 8,
    borderWidth: 1,
    borderColor: "#f49b33",
    backgroundColor: "transparent",
  },
  incrementButton: {
    borderTopRightRadius: 8,        // rounded-r-lg
    borderBottomRightRadius: 8,
    borderWidth: 1,
    borderColor: "#f49b33",
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",                 // text-white
    fontSize: 18,                  // text-lg approx
    paddingHorizontal: 12,          // px-3 (~12)
    paddingVertical: 4,             // py-1 (~4)
    textAlign: "center",
  },
  numberText: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#474747",
    backgroundColor: "#474747",
    color: "white",
    fontSize: 16,
    textAlign: "center",
    borderRadius: 10,
  },
});

export default GuestPickerComponent;
