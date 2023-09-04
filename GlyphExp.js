import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";

const GlyphExpCalculator = () => {
  const [glyphTier, setGlyphTier] = useState("");
  const [calculatedGlyphExp, setCalculatedGlyphExp] = useState("");

  const calculateGlyphExp = () => {
    if (glyphTier !== "") {
      const calculatedExp = parseInt(glyphTier, 10) * 2 + 2;
      setCalculatedGlyphExp(calculatedExp.toString());
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.compareText}>Glyph Experience</Text>
        <Text style={styles.itemHeader}>
          Enter the Nightmare Dungeon Sigil Tier to calculate Glyph Exp.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter Sigil Tier"
          onChangeText={(text) => setGlyphTier(text)}
          value={glyphTier}
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={[styles.button, { marginBottom: 20 }]}
          onPress={calculateGlyphExp}
        >
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>
        {calculatedGlyphExp !== "" && (
          <Text style={styles.centeredText}>
            Glyph Experience: {calculatedGlyphExp}
          </Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default GlyphExpCalculator;
