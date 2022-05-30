import * as React from 'react';

import { SafeAreaView } from "react-native-safe-area-context"
import { View, Text, Image, TouchableOpacity, ToastAndroid} from 'react-native'
import TrackPlayer, {Capability} from 'react-native-track-player';
import { useDispatch } from 'react-redux';
import { usePlaybackState } from 'react-native-track-player';


const Live = ()=>{


    const dispatch = useDispatch()
    var playbackState = useDispatch()
    
    async function playIt(){        

        //await TrackPlayer.stop()
        const track3 = {
            url: 'https://listen.radioking.com/radio/261427/stream/306436',
            title: 'Live',
            artist: 'RadioJ',
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

    const isPlaying = true

    return(

        <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{justifyContent:'flex-start',marginTop:100, alignItems:'center', flex:1, flexDirection:'column'}}>
                <View style={{ flexDirection: 'column-reverse', paddingBottom: 50, marginTop: 20 }}>

                        <View style={{ backgroundColor: 'white', padding: 100, borderRadius: 50 }}>
                            <TouchableOpacity
                            onPress={()=>{
                                //navigation.navigate('Videos')
                                
                            }} 

                            >
                            <Image source={require('../assets/radiojlogo.png')} />

                            </TouchableOpacity>
                        </View>

                        <View style={{ alignSelf: 'center', position: 'absolute', backgroundColor: '#000000', height: 70, width: 70, justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>

                            <TouchableOpacity
                                disabled={false}
                                onPress={async () => {
                                    //setClickAble(true)
                                    //await radio.pauseAsync()
                                    playIt()
                                    dispatch({type:"playPodcast", data:{Podcaster:"Live Stream", Url:'https://listen.radioking.com/radio/261427/stream/306436', Title:"RadioJ", Duration:"0"}})
                                }}
                            >
                                <Image
                                    source={ playbackState == 2 ? require('../assets/pauseradio.png') : require('../assets/play.png')}
                                    style={{ height: 40, width: 40 }} />
                            </TouchableOpacity>


                        </View>

                    </View>

                    <View style={{ marginTop: 15 }}>
                        <Text style={{ color: '#1251A0', fontWeight: 'bold', fontSize: 18 }}>
                            ECOUTER EN DIRECT
                        </Text>
                    </View>
            </View>
        </SafeAreaView>
    )
}

export default Live