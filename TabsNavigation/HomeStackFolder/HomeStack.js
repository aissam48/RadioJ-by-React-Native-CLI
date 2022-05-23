import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


import Home from './HomeScreens/Home';
import Actuality from './HomeScreens/Actuality';
import Contact from './HomeScreens/Contact';
import ReadTopic from './HomeScreens/ReadTopic';


const HomeStack = ()=>{
    return(

        <NavigationContainer independent={true}>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
                    <Stack.Screen name="Actuality" component={Actuality} options={{headerShown: false}} />
                    <Stack.Screen name="Contact" component={Contact} options={{headerShown: false}} />
                    <Stack.Screen name="ReadTopic" component={ReadTopic} options={{headerShown: false}} />
                </Stack.Navigator>
        </NavigationContainer>
    )
}

export default HomeStack