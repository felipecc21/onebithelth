import { StyleSheet, View } from "react-native";
import Title from "./src/components/title/index.js";
import Main from "./src/components/main/index.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
