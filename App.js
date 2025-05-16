import {StatusBar} from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Header from "./app/components/Header";
import PasswordGenerator from "./app/components/PasswordGenerator";

export default function App() {

  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <View>
        <PasswordGenerator />
      </View>
      <StatusBar style="light"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A3439",
  },
});
