import { StyleSheet, View } from "react-native";
import {ApplicationProvider,Layout, Text } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
export default function App() {
  return(
  <ApplicationProvider {...eva} theme={eva.light}> 
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to UI Kitten HiHI</Text>
    </Layout>
    <Layout style={styles.container} level="1">

    <Text style={styles.text} status="primary">Working</Text>
    <Text style={styles.text} status="success">Success</Text>
    <Text style={styles.text} status="info">Info</Text>
    <Text style={styles.text} status="warning">Warning</Text>
    <Text style={styles.text} status="danger">Danger</Text>
    <Text style={styles.text} status="basic">Basic</Text>
    <View style={styles.controlContainer}>
      <Text style={styles.text} status="control">Control</Text>
    </View>

  </Layout>
  </ApplicationProvider>//the application provider has to be in code
);
  }


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  text: {
    margin: 4,
  },
  controlContainer: {
    borderRadius: 4,
    margin: 4,
    padding: 4,
    backgroundColor: "#3366FF",
  },
});