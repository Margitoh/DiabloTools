import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    //marginTop: 50,
    backgroundColor: "#ffffff",
  },
  compareText: {
    fontWeight: "bold",
    fontSize: 26,
    marginBottom: 20,
    textAlign: "center",
  },
  itemContainer: {
    //marginBottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  itemHeader: {
    fontWeight: "bold",
    fontSize: 16,
    paddingBottom: 5,
  },
  statsText: {
    paddingBottom: 10,
    textAlign: "center",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0,
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
    textAlign: "center",
  },
  resultText: {
    marginTop: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  centeredText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default styles;
