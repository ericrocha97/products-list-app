import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { Button } from 'react-native';


const AppStack = createStackNavigator();

import Main from './pages/Main';
//import Product from './pages/Product';

export default function Routes(){
    return(
        <NavigationContainer>
             <AppStack.Navigator  screenOptions={{
                 headerTitle: 'Lista de produtos',
                 headerTitleAlign: 'center',
                 headerTintColor: '#fff',
                 headerStyle: {backgroundColor: '#206fb6'},
             }}>
                <AppStack.Screen name='Main' component={Main}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}