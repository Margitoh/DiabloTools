import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styles from "./styles";

const DungTier = () => {
  const [currentLevel, setCurrentLevel] = useState("");
  const [dungeonTier, setDungeonTier] = useState("");

  const calculateDungeonTier = () => {
    const calculatedTier = (54 - (parseInt(currentLevel, 10) + 10)) * -1;
    setDungeonTier(calculatedTier.toString());
  };

  const calculatedMonsterLevel = dungeonTier ? parseInt(dungeonTier) + 54 : "";

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.compareText}>Nightmare Dungeon Tool</Text>
        <Text style={styles.itemHeader}>
          Enter your level to calculate the dungeon tier needed for 15% bonus
          exp.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your level"
          onChangeText={(text) => setCurrentLevel(text)}
          value={currentLevel}
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={[styles.button, { marginBottom: 20 }]}
          onPress={calculateDungeonTier}
        >
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>
        <Text style={styles.centeredText}>
          15% exp at Nightmare Sigil Tier: {dungeonTier}
        </Text>
        <Text style={dungTierstyles.disclaimer}>
          Monsters at Nightmare Sigil Tier {dungeonTier} will be level:{" "}
          {calculatedMonsterLevel}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const dungTierstyles = StyleSheet.create({
  disclaimer: {
    paddingTop: 20,
    textAlign: "center",
    fontSize: 14,
    color: "#B6B6B6",
  },
});

export default DungTier;
