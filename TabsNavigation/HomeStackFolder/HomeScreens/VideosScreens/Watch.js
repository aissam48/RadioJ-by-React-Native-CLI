
import { SafeAreaView } from "react-native-safe-area-context"
import { View, Text, Image, Dimensions} from 'react-native'
import React from 'react';
import YoutubePlayer from "react-native-youtube-iframe";



const Watch = ()=>{

    const screenWidth = Dimensions.get('screen').width 

    return(

        <SafeAreaView style={{flex:1, flexDirection:"column"}}>
            <View style={{flex:1, flexDirection:"column"}}>
                <YoutubePlayer
                videoId="iee2TATGMyI"
                height={300}
                width={screenWidth}
                />
            </View>
            
        </SafeAreaView>
    )
}

export default Watch