import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


import Events from './PodcastScreens/Events'
import Journalistes from './PodcastScreens/Jounalistes'
import PlayList from './PodcastScreens/PlayList'


const PodcastStack = ()=>{
    return(

        <NavigationContainer independent={true}>
                <Stack.Navigator>
                    <Stack.Screen name="Events" component={Events} options={{headerShown: false}} />
                    <Stack.Screen name="Journalistes" component={Journalistes} options={{headerShown: false}} />
                    <Stack.Screen name="PlayList" component={PlayList} options={{headerShown: false}} />
                </Stack.Navigator>
        </NavigationContainer>
    )
}

export default PodcastStack