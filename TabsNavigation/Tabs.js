import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, Dimensions, TouchableOpacity, Image , ToastAndroid} from 'react-native'
import Slider from '@react-native-community/slider';
import TrackPlayer, { Capability, useProgress, usePlaybackState } from 'react-native-track-player';
import { useDispatch, useSelector } from 'react-redux';


const Tab = createBottomTabNavigator();

import HomeStack from './HomeStackFolder/HomeStack';
import Live from './live';
import Programmes from './Programmes';


const Tabs = ()=>{
    const progress = useProgress()
    const playerState = usePlaybackState()
    const windowHeight = Dimensions.get("screen").height
    var [timeConverter, setTimeConverter] = React.useState("00:00")
    var [duration, setDuration] = React.useState("00:00")
    var dur = 0
    dur = progress.duration

    var value = progress.position
    var minutes = Math.floor((value*1000) / 60000);
    var seconds = (((value*1000) % 60000) / 1000).toFixed(0);

    React.useEffect(()=>{
        setTimeConverter((minutes < 10 ? '0' : '')+minutes + ":" + (seconds < 10 ? '0' : '') + seconds)
    },[value])
      
    const data = useSelector(state=>(
        state.radioState.isPlaying
    ))

    // receive podcast data
    const podcastUrl = useSelector(state=>(
        state.podcastUrlFun.data
    ))

    // play podcast data on player

    React.useEffect(()=>{

        switch(podcastUrl){
            case "Empty":{
                break
            }
            default:{
                playIt(podcastUrl)
                break
            }
        }

    },[podcastUrl])



    React.useEffect(()=>{
        switch(data){
            case "Empty":{
                break
            }
            default:{
                
                playIt(data)
                break
            }
        }
    }, [data])

    React.useEffect(()=>{
        var minutes = Math.floor((progress.duration*1000) / 60000);
        var seconds = (((progress.duration*1000) % 60000) / 1000).toFixed(0);
        setDuration((minutes < 10 ? '0' : '')+minutes + ":" + (seconds < 10 ? '0' : '') + seconds)

    }, [dur])
   

    // player of any sound url as function
    async function playIt(data_){        
        const track3 = {
            url: JSON.parse(JSON.stringify(data_)).Url,
            title: JSON.parse(JSON.stringify(data_)).Title,
            artist: JSON.parse(JSON.stringify(data_)).Podcaster,
            }
            // Podcaster
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

       
        <View style={{flex:1, flexDirection:"column-reverse"}}>
            <NavigationContainer independent={true}>
                <Tab.Navigator
                
                >
                    <Tab.Screen name="HomeStack" component={HomeStack} options={{headerShown: false, tabBarShowLabel:false, tabBarIcon:({focused, color, size})=>(
                        <View>
                            <Image source={require('../assets/home_icon.png')} style={{height:focused? 35:30,width: focused? 35:30, tintColor : focused?"#1260CC":"#CCCCCC"}}/>
                        </View>
                    )}} />
                    
                    <Tab.Screen name="Live" component={Live} options={{headerShown: false, tabBarShowLabel:false, tabBarIcon:({focused, color, size})=>(
                        <View>
                            <Image source={require('../assets/radio_icon.png')} style={{height:focused? 35:30,width: focused? 35:30, tintColor : focused?"#1260CC":"#CCCCCC"}}/>
                        </View>
                    )}} />
                    
                    <Tab.Screen name="Programmes" component={Programmes} options={{headerShown: false, tabBarShowLabel:false, tabBarIcon:({focused, color, size})=>(
                        <View>
                            <Image source={require('../assets/calender_icon.png')} style={{height:focused? 35:30,width: focused? 35:30, tintColor : focused?"#1260CC":"#CCCCCC"}}/>
                        </View>
                    )}} />
                    </Tab.Navigator>
            </NavigationContainer>

 <View style={{ width: '100%',position:'absolute', marginBottom:50, }}>

     <View style={{ justifyContent: 'space-between', flexDirection: 'column', backgroundColor: '#1251A0', height: 'auto', marginBottom: 10, marginEnd: 10, marginStart: 10, borderRadius: 20 }}>
         <View style={{ marginTop: 10, justifyContent: 'space-between', flexDirection: 'row', }}>
             <View style={{ flexDirection: 'row', backgroundColor: '#1251A0', height: '100%', borderRadius: 20 }}>
                   <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                      <Text style={{ fontSize: 14, marginStart: 15,marginBottom:5, color: '#ffffff', fontWeight: 'bold' }}>{JSON.parse(JSON.stringify(podcastUrl)).Title}</Text>
                      <Text style={{ fontSize: 12, marginStart: 15,marginBottom:5, color: '#ffffff', fontWeight: 'bold' }}>{JSON.parse(JSON.stringify(podcastUrl)).Podcaster}</Text>
                    </View>

             </View>

                         <TouchableOpacity
                             onPress={async () => {
                                 switch(playerState){
                                     case 3:{
                                         TrackPlayer.play()
                                         break
                                     }
                                     case 2:{
                                        TrackPlayer.pause()
                                        break
                                     }
                                 }

                             }}
                             style={{ alignSelf: 'center', height: 35, width: 35, marginEnd: 15 }}>

                             <Image source= {playerState == 3 ? require('../assets/play.png') : require('../assets/pauseradio.png')} style={{ alignSelf: 'center', height: 35, width: 35, marginEnd: 15 }} />

                         </TouchableOpacity>
                     </View>
                     <Slider
                                    maximumValue={progress.duration}
                                    minimumValue={0}
                                    disabled={false}
                                    value={progress.position}
                                    minimumTrackTintColor="#ffffff"
                                    maximumTrackTintColor="#ffffff"
                                    thumbTintColor="#ffffff"
                                    onValueChange={(value2)=>{
                                        var minutes = Math.floor((value2*1000) / 60000);
                                        var seconds = (((value2*1000) % 60000) / 1000).toFixed(0);
                                        setTimeConverter((minutes < 10 ? '0' : '')+minutes + ":" + (seconds < 10 ? '0' : '') + seconds)
                                        TrackPlayer.seekTo(value2)
                                        TrackPlayer.play()
                                    }}
                                    style={{ width: '100%' }}
                                />
                     
                     <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                         <Text style={{ color: '#ffffff', marginStart: 20 }}>{timeConverter}</Text>
                         <Text style={{ color: '#ffffff', marginEnd: 20 }}>{duration}</Text>
                     </View>

                 </View>
             </View>
        </View>
        
    )
}

export default Tabs