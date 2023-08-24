import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50, // Add margin top
    backgroundColor: "#ffffff",
  },
  compareText: {
    fontWeight: "bold",
    fontSize: 26,
    marginBottom: 30,
    textAlign: "center",
  },
  itemContainer: {
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  itemHeader: {
    fontWeight: "bold",
    fontSize: 16,
    paddingBottom: 10,
  },
  statsText: {
    paddingBottom: 10,
    textAlign: "center",
  },
  statsContainer: {
    flexDirection: "row", // Display columns side by side
    justifyContent: "center", // Center blocks horizontally
    alignItems: "center", // Center blocks vertically
    marginBottom: 0, // Add a bit of space between the blocks
  },
  column: {
    flex: 1,
    paddingHorizontal: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#93B1A6",
    padding: 10,
    marginBottom: 10,
    width: "100%",
    textAlign: "center",
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 0,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
  resultText: {
    marginTop: 10,
    textAlign: "center",
  },
});

export default styles;
