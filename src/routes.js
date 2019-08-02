import { createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product';


export default createStackNavigator(
  {
    Main, 
    Product
  }, 
  {
    headerLayoutPreset: 'center',
    navigationOptions: {
    headerStyle: {
      backgroundColor: "#206fb6"
    },
    headerTintColor: "#FFF"
  },
});