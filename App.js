import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,} from 'react-native';
import { colors } from "./src/theme/colors";
import Header from './src/components/Header';
import Categories from './src/components/Categories';
import Home from './src/screens/Home';
import Search from './src/components/Search';

import { useFont } from "expo-font";
import Product from './src/screens/Product';

export default function App() {
  //const [fontsLoaded] = useFont({});

  return (
    <View>
      <Product category="smartphones" />
    </View>
  );
};
