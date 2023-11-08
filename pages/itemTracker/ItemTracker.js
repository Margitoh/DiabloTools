import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import itemImages from "./ItemImages";

const bosses = [
  "Grigoire",
  "Varshan",
  "The Beast",
  "Lord Zir",
  "Duriel",
  "Duriel Uber Unique",
];

const itemsByBoss = {
  Grigoire: [
    "Penitent Greaves",
    "Staff of Lam Esen",
    "Iceheart Brais",
    "Gloves of the Illuminator",
    "Ramaladni's Magnum Opus",
    "Rage of Harrogath",
    "Ancients' Oath",
    "Battle Trance",
    "The Butcher's Cleaver",
    "Word of Hakan",
    "Grasp of Shadow",
    "Windforce",
    "Insatiable Fury",
    "Hunter's Zenith",
    "Waxing Gibbous",
    "The Butcher's Cleaver",
    "Blood Artisan's Cuirass",
    "Howl from Below",
    "Greaves of the Empty Tomb",
  ],
  Varshan: [
    "Frostburn",
    "Mother's Embrace",
    "Staff of Endless Rage",
    "Esu's Heirloom",
    "Raiment of the Infinite",
    "Tal Rahsa's Iridescent Loop",
    "Fields of Crimson",
    "100000 Steps",
    "Gohr's Devastating Grips",
    "Ring of Red Furor",
    "Condemnation",
    "Eyes in the Dark",
    "Skyhunter",
    "Writhing Band of Trickery",
    "Mad Wolf's Glee",
    "Vasily's Prayer",
    "Greatstaff of the Crone",
    "Airidah's Inexorable Will",
    "Bloodless Scream",
    "Deathless Visage",
    "Deathspeaker's Pendant",
    "Ring of the Sacrilegious Soul",
  ],
  "The Beast": [
    "Frostburn",
    "Mother's Embrace",
    "Fists of Fate",
    "Tassets of the Dawning Sky",
    "Staff of Lam Esen",
    "Esu's Heirloom",
    "Gloves of the Illuminator",
    "The Oculus",
    "Fields of Crimson",
    "100,000 Steps",
    "Ancients' Oath",
    "Battle Trance",
    "Hellhammer",
    "Condemnation",
    "Word of Hakan",
    "Windforce",
    "Eaglehorn",
    "Insatiable Fury",
    "Hunter's Zenith",
    "Waxing Gibbous",
    "Storm's Companion",
    "Bloodless Scream",
    "Howl from Below",
    "Deathspeaker's Pendant",
    "Ring of Mendeln",
  ],
  "Lord Zir": [
    "Penitent Greaves",
    "Razorplate",
    "Temerity",
    "Staff of Endless Rage",
    "Iceheart Brais",
    "Raiment of the Infinite",
    "Esadora's Overflowing Cameo",
    "Ramaladni's Magnum Opus",
    "Rage of Harrogath",
    "Gohr's Devastating Grips",
    "Overkill",
    "The Butcher's Cleaver",
    "Grasp of Shadow",
    "Eyes in the Dark",
    "Skyhunter",
    "Asheara's Khanjar",
    "Mad Wolf's Glee",
    "Vasily's Prayer",
    "Greatstaff of the Crone",
    "Fleshrender",
    "The Butcher's Cleaver",
    "Blood Artisan's Cuirass",
    "Deathless Visage",
    "Greaves of the Empty Tomb",
    "Lidless Wall",
  ],
  Duriel: [
    "Godslayer Crown",
    "Flickerstep",
    "Tibault's Will",
    "X'Fal's Corroded Signet",
    "Soulbrand",
    "Banished Lord's Talisman",
    "Flamescar",
    "Blue Rose",
    "Azurewrath",
    "Tuskhelm of Joritz the Mighty",
    "Cowl of the Nameless",
    "Scoundrel's Leathers",
    "Tempest Roar",
    "Dolmen Stone",
    "Black River",
    "Blood Moon Breeches",
  ],
  "Duriel Uber Unique": [
    "Melted Heart of Selig",
    "Andariel's Visage",
    "Harlequin Crest",
    "Ring of Starless Skies",
    "Ahavarion, Spear of Lycander",
    "Doombringer",
    "The Grandfather",
    "Spear of Lycander",
  ],
};

class ItemTracker extends Component {
  constructor() {
    super();
    this.state = {
      selectedBoss: "Grigoire",
      items: itemsByBoss["Grigoire"].map((name) => ({
        name,
        status: "Normal",
      })),
    };
  }

  toggleItemStatus = (itemIndex) => {
    const items = [...this.state.items];
    const item = items[itemIndex];

    if (item.status === "Normal") {
      item.status = "Owned";
    } else if (item.status === "Owned") {
      Alert.alert(
        "Confirmation",
        "Are you sure you want to remove this item?",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => {
              item.status = "Normal";
              this.setState({ items });
            },
          },
        ]
      );
    }

    this.setState({ items });
  };

  handleBossChange = (selectedBoss) => {
    this.setState({
      selectedBoss,
      items: itemsByBoss[selectedBoss].map((name) => ({
        name,
        status: "Normal",
      })),
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.selectedBoss}
          onValueChange={this.handleBossChange}
        >
          {bosses.map((boss) => (
            <Picker.Item key={boss} label={boss} value={boss} />
          ))}
        </Picker>
        <ScrollView>
          {this.state.items.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.item,
                item.status === "Owned" && styles.itemOwned,
                item.status === "Normal" && styles.itemNormal,
              ]}
              onPress={() => this.toggleItemStatus(index)}
            >
              <View style={styles.iconContainer}>
                <Image
                  source={
                    itemImages[item.name]
                      ? itemImages[item.name]
                      : itemImages["NotFound"]
                  }
                  style={styles.itemImage}
                />
              </View>
              <Text style={styles.itemName}>{item.name}</Text>
              {item.status === "Owned" && (
                <Text style={styles.checkmark}>✔</Text>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 0,
    padding: 0,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  itemNormal: {
    backgroundColor: "white",
  },
  itemOwned: {
    backgroundColor: "#79AC78",
  },
  itemName: {
    flex: 1,
    fontSize: 16,
  },
  checkmark: {
    color: "white",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  iconContainer: {
    marginRight: 10,
  },
  itemImage: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
});

export default ItemTracker;
