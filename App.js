import { SafeAreaView, StyleSheet, Text, View,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Categories from './src/components/Categories';
import Home from './src/screens/Home';
import Search from './src/components/Search';
import { useFonts } from "expo-font";
import Product from './src/screens/Product';
import ProductDetail from './src/screens/ProductDetail';
import RootNavigation from './src/navigation/RootNavigation';

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
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
};
