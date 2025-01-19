import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    paddingLeft: 10,
  },
  container: {
    flex: 1,
    alignItems: "flex-start",
  },

  listContainer: {
    alignItems: "flex-start",
    paddingBottom: 20,
    paddingLeft: 20,
  },
  itemContainer: {
    marginVertical: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  flatList: {
    width: "100%",
    height: "100%",
  },
  button: {
    backgroundColor: "green",
    borderRadius: 5,
    marginVertical: 5,
    width: 60,
    height: 70,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 25,
  },
  text: {
    fontSize: 16,
    paddingLeft: 10,
    textAlign: "left",
    lineHeight: 25,
  },
  underlined: {
    textDecorationLine: "underline",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  cell: {
    flex: 1,
    textAlign: "left",
    paddingHorizontal: 5,
    borderWidth: 0.5,
    borderColor: "black",
  },
  linkText: {
    color: "blue",
    textDecorationLine: "underline",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 8,
    marginTop: 8,
    marginBottom: 8,
  },
});
