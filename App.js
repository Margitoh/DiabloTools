import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Calculator from "./Calculator";
import DungTier from "./DungTier";
import styles from "./styles";
import CustomHeader from "./CustomHeader";
import GlyphExpCalculator from "./GlyphExp";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: CustomHeader,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Calculator" component={Calculator} />
        <Stack.Screen name="DungTier" component={DungTier} />
        <Stack.Screen name="GlyphExp" component={GlyphExpCalculator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={[homeStyles.container, homeStyles.centeredContainer]}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Calculator")}
          style={[styles.button, homeStyles.button, { marginBottom: 20 }]}
        >
          <Text style={styles.buttonText}>Item Comparison</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("DungTier")}
          style={[styles.button, homeStyles.button, { marginBottom: 20 }]}
        >
          <Text style={styles.buttonText}>Nightmare Dungeon Tier</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("GlyphExp")}
          style={[styles.button, homeStyles.button]}
        >
          <Text style={styles.buttonText}>Glyph Experience</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  centeredContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default App;
