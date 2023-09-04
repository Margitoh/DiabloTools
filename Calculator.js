import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  StatusBar,
} from "react-native";
import styles from "./styles";

const Calculator = () => {
  const [items, setItems] = useState([
    { currentStats: ["", "", "", ""], maxStats: ["", "", "", ""] },
    { currentStats: ["", "", "", ""], maxStats: ["", "", "", ""] },
  ]);

  const calculatePercentages = () => {
    const updatedPercentages = items.map((item) => {
      const itemPercentages = item.currentStats.map((currentStat, index) => {
        const maxStat = parseFloat(item.maxStats[index]);
        const currentStatValue = parseFloat(currentStat.replace(",", ".")); // Replaces comma with dot
        return isNaN(maxStat) || isNaN(currentStatValue) || maxStat === 0
          ? "N/A"
          : ((currentStatValue / maxStat) * 100).toFixed(2) + "%";
      });
      return itemPercentages;
    });

    setPercentages(updatedPercentages);
  };

  const [percentages, setPercentages] = useState([]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{
          ...styles.container,
          height:
            Platform.OS === "ios"
              ? Dimensions.get("window").height - StatusBar.currentHeight
              : "100%",
        }}
        behavior="position"
      >
        <Text style={styles.compareText}>Diablo4 Item Comparing Tool</Text>
        <View style={[styles.itemContainer, { marginBottom: 10 }]}>
          <Text style={styles.itemHeader}>Item 1</Text>
          <View style={styles.statsContainer}>
            <View style={styles.column}>
              <Text style={styles.statsText}>Current Stats</Text>
              {items[0].currentStats.map((stat, statIndex) => (
                <TextInput
                  key={statIndex}
                  style={styles.input}
                  placeholder={`Stat ${statIndex + 1}`}
                  keyboardType="numeric"
                  value={
                    stat !== undefined ? stat.toString().replace(".", ",") : ""
                  }
                  onChangeText={(value) => {
                    const updatedValue = value.replace(",", ".");
                    const updatedItems = [...items];
                    updatedItems[0].currentStats[statIndex] = updatedValue;
                    setItems(updatedItems);
                  }}
                />
              ))}
            </View>
            <View style={styles.column}>
              <Text style={styles.statsText}>Max Stats</Text>
              {items[0].maxStats.map((stat, statIndex) => (
                <TextInput
                  key={statIndex}
                  style={styles.input}
                  placeholder={`Stat ${statIndex + 1}`}
                  keyboardType="numeric"
                  value={
                    stat !== undefined ? stat.toString().replace(".", ",") : ""
                  }
                  onChangeText={(value) => {
                    const updatedValue = value.replace(",", ".");
                    const updatedItems = [...items];
                    updatedItems[0].maxStats[statIndex] = updatedValue;
                    setItems(updatedItems);
                  }}
                />
              ))}
            </View>
          </View>
        </View>
        <View style={[styles.itemContainer, { marginBottom: 10 }]}>
          <Text style={styles.itemHeader}>Item 2</Text>
          <View style={styles.statsContainer}>
            <View style={styles.column}>
              <Text style={styles.statsText}>Current Stats</Text>
              {items[1].currentStats.map((stat, statIndex) => (
                <TextInput
                  key={statIndex}
                  style={styles.input}
                  placeholder={`Stat ${statIndex + 1}`}
                  keyboardType="numeric"
                  value={
                    stat !== undefined ? stat.toString().replace(".", ",") : ""
                  }
                  onChangeText={(value) => {
                    const updatedValue = value.replace(",", ".");
                    const updatedItems = [...items];
                    updatedItems[1].currentStats[statIndex] = updatedValue;
                    setItems(updatedItems);
                  }}
                />
              ))}
            </View>
            <View style={styles.column}>
              <Text style={styles.statsText}>Max Stats</Text>
              {items[1].maxStats.map((stat, statIndex) => (
                <TextInput
                  key={statIndex}
                  style={styles.input}
                  placeholder={`Stat ${statIndex + 1}`}
                  keyboardType="numeric"
                  value={
                    stat !== undefined ? stat.toString().replace(".", ",") : ""
                  }
                  onChangeText={(value) => {
                    const updatedValue = value.replace(",", ".");
                    const updatedItems = [...items];
                    updatedItems[1].maxStats[statIndex] = updatedValue;
                    setItems(updatedItems);
                  }}
                />
              ))}
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.button, { marginTop: 10 }]}
            onPress={calculatePercentages}
          >
            <Text style={styles.buttonText}>Calculate Percentages</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20 }}>
          {percentages.map((itemPercentages, index) => (
            <Text key={index} style={styles.resultText}>
              {"Item " + (index + 1) + " percentages:"}
              {"\n"}
              {itemPercentages.join(", ")}
            </Text>
          ))}
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Calculator;
