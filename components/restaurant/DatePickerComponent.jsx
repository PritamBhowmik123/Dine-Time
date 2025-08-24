import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DatePickerComponent = ({ date, setDate }) => {
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const handlePress = () => setShow(true);

  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={handlePress} style={styles.dateButton}>
        {Platform.OS === "android" && (
          <Text style={styles.dateText}>
            {date ? date.toLocaleDateString() : "Select date"}
          </Text>
        )}
        {Platform.OS === "android" && show && (
          <DateTimePicker
            accentColor="#f49b33"
            textColor="#f49b33"
            value={date}
            mode="date"
            onChange={onChange}
            display="default"
            minimumDate={new Date()}
            maximumDate={new Date(new Date().setDate(new Date().getDate() + 7))}
          />
        )}
        {Platform.OS === "ios" && (
          <DateTimePicker
            accentColor="#f49b33"
            textColor="#f49b33"
            value={date}
            mode="date"
            onChange={onChange}
            display="default"
            minimumDate={new Date()}
            maximumDate={new Date(new Date().setDate(new Date().getDate() + 7))}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateButton: {
    borderRadius: 8,
    backgroundColor: "#474747",
    paddingHorizontal: 14,
    paddingVertical: 6,
    justifyContent: "center",
    minWidth: 120,
  },
  dateText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 1,
  },
});

export default DatePickerComponent;
