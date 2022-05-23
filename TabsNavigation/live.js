import * as React from 'react';

import { SafeAreaView } from "react-native-safe-area-context"
import { View, Text, Image, TouchableOpacity, ToastAndroid} from 'react-native'
import TrackPlayer, {Capability} from 'react-native-track-player';


const Live = ()=>{


    async function playIt(){        

        //await TrackPlayer.stop()
        const track3 = {
            url: 'https://listen.radioking.com/radio/261427/stream/306436',
            title: 'RadioJLive',
            artist: 'deadmau5',
             // Load artwork from the file system:
            }
        await TrackPlayer.reset()
        await TrackPlayer.add([ track3]);
        await TrackPlayer.updateOptions({
            capabilities: [
                Capability.Play,
            ],

            color: 99410543
        })

        await TrackPlayer.play()
    }

    return(

        <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{justifyContent:'center', alignItems:'center', flex:1, flexDirection:'column'}}>
                <TouchableOpacity
                onPress={async()=>{
                    playIt()
                    //await TrackPlayer.play()
                }}
                >
                <Text style={{color:"#000000"}}>Live</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Live