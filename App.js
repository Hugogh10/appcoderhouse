import { SafeAreaView, StyleSheet, Text, View,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from "expo-font";
import TabNav from './src/navigation/TabNav';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {
  const [fontsLoaded] = useFonts({
    Kanit: require("./assets/Font/Kanit-Light.ttf"),
    Monserrat: require("./assets/Font/Montserrat-Italic-VariableFont_wght.ttf"),
    Ubuntu: require("./assets/Font/Ubuntu-Light.ttf"),
  });

  if(fontsLoaded === false) {
    return;
  }

  return (
    <Provider store={store}>
    <NavigationContainer>
      <TabNav />
    </NavigationContainer>
    </Provider>
  );
};
