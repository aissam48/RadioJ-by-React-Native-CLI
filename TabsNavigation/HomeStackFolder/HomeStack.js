import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


import Home from './HomeScreens/Home';
import Actuality from './HomeScreens/Actuality';
import Contact from './HomeScreens/Contact';
import ReadTopic from './HomeScreens/ReadTopic';
import Events from './HomeScreens/PodcastScreens/Events';
import Journalistes from './HomeScreens/PodcastScreens/Jounalistes';
import PlayList from './HomeScreens/PodcastScreens/PlayList';
import Videos from './HomeScreens/VideosScreens/Videos';
import Watch from './HomeScreens/VideosScreens/Watch';



const HomeStack = ()=>{
    return(

        <NavigationContainer independent={true}>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
                    <Stack.Screen name="Actuality" component={Actuality} options={{headerShown: false}} />
                    <Stack.Screen name="Contact" component={Contact} options={{headerShown: false}} />
                    <Stack.Screen name="ReadTopic" component={ReadTopic} options={{headerShown: false}} />
                    <Stack.Screen name="Events" component={Events} options={{headerShown: false}} />
                    <Stack.Screen name="Journalistes" component={Journalistes} options={{headerShown: false}} />
                    <Stack.Screen name="PlayList" component={PlayList} options={{headerShown: false}} />
                    <Stack.Screen name="Videos" component={Videos} options={{headerShown: false}} />
                    <Stack.Screen name="Watch" component={Watch} options={{headerShown: false}} />

                </Stack.Navigator>
        </NavigationContainer>
    )
}

export default HomeStack