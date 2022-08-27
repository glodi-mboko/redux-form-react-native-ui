import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Provider as PaperProvider, Title } from "react-native-paper";
import theme from "./Theme";
import FormComponent from "./src/components/FormComponent";
import store from "./src/store/configureStore";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          <Title style={{padding:32}}>React Native with redux-form and material-ui</Title>
          <FormComponent />
          <StatusBar style="auto" />
        </View>
      </PaperProvider>
    </Provider>
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
