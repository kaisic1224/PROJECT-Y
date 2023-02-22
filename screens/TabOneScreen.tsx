import { StyleSheet } from "react-native";
import Theme from "../constants/Colors";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Text style={styles.title}>wen yao</Text>
      <Text style={styles.title}>zaza</Text>
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      <EditScreenInfo path='/screens/TabOneScreen.tsx' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Theme.dark.white
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%"
  }
});
