import * as React from 'react';

import { SafeAreaView } from "react-native-safe-area-context"
import { View, Text, Image, TextInput, Dimensions, ScrollView, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import { useDispatch } from 'react-redux';




const Home = ({navigation})=>{

    const videosData = ["sfjdfsq", "pljlk", "uhuhu", "cpodskl"]
    const dispatch = useDispatch()
    const windowWith = Dimensions.get("screen").width

    return(

        <SafeAreaView style={{flex:1, flexDirection:"column"}}>

            <ScrollView style={{flex:1}} nestedScrollEnabled>
                <View style={{flex:1, flexDirection:"column", marginTop:30, marginStart:10, marginEnd:10}}>
                    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                        <View style={{margin:15}}>
                            <Text style={{color:"#1260CC", fontWeight:"bold", fontSize:35}}>Radio J</Text>
                            <Text style={{color:"#CCCCCC", fontSize:20, fontWeight:"bold"}}>Ecouter Radio en ligne</Text>
                            </View>
                        <View>
                             <Image source={require('../../../assets/notification.png',)} style={{height:40, width:40, margin:15}} />
                        </View>
                        </View>
<View style={{ width:"100%", alignItems:"center" }}>
    <View style={{backgroundColor:"#EBECF0",  flexDirection:"row", width:windowWith-20, borderRadius:20 }}>
        <Image source={require('../../../assets/search.png')} style={{height:30, width:30, alignSelf:'center'}}/>
        <TextInput placeholder='Rechercher' placeholderTextColor={"#CCCCCC"} style={{ width:windowWith-100, color:"#000000"}}/>
    </View>
</View>

<View style={{marginTop:30, }}>
    <ScrollView horizontal>



    <View style={{flexDirection:"row"}} >

    

    
    
    <TouchableOpacity
    onPress={()=>{
        navigation.navigate("Actuality")
    }}
    >
    <View style={{alignItems:"center", backgroundColor:"#29C5F6", marginStart:10, marginEnd:10, borderRadius:10, padding:10}}>
<Image source={require('../../../assets/topic_white.png')} style={{height:45, width:45}}/>
<Text style={{color:"#ffffff", fontWeight:"bold"}}>Actualités</Text> 
</View>
    </TouchableOpacity>

    

    <TouchableOpacity
    onPress={()=>{
        navigation.navigate("Contact")
    }}
    >
    <View style={{alignItems:"center", backgroundColor:"#29C5F6", marginStart:10, marginEnd:10, borderRadius:10, padding:10}}>
<Image source={require('../../../assets/contact_white.png')} style={{height:45, width:45}}/>
<Text style={{color:"#ffffff", fontWeight:"bold"}}>Contact</Text> 
</View>
    </TouchableOpacity>

</View>

    </ScrollView >
</View>

<View style={{marginTop:15,}}>
    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <Text style={{color:"#1260CC", fontWeight:"bold", fontSize:20}}>Videos</Text>
        <Text style={{color:"#CCCCCC"}}>Voir plus</Text>
    </View>
    <View>

        <FlatList
        horizontal
        data={videosData}
        keyExtractor={(item)=>item}
        renderItem={(item)=>{

            return(
                <View style={{width:windowWith/2, height:windowWith/2, backgroundColor:"#CCCCCC", margin:5}}>

                </View>

            )
        }}
        />

    </View>
</View>

<View style={{marginTop:15}}>
    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <Text style={{color:"#1260CC", fontWeight:"bold", fontSize:20}}>Acualities</Text>
        <Text style={{color:"#CCCCCC"}}>Voir plus</Text>
    </View>
    <View>

        <FlatList
        horizontal
        data={videosData}
        keyExtractor={(item)=>item}
        renderItem={(item)=>{

            return(
                <View style={{width:windowWith/4, height:windowWith/4, backgroundColor:"#CCCCCC", margin:5}}>

                </View>

            )
        }}
        />

    </View>
</View>

<View style={{marginTop:15}}>
    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <Text style={{color:"#1260CC", fontWeight:"bold", fontSize:20}}>Vos derniers podcasts</Text>
        <Text style={{color:"#CCCCCC"}}>Voir plus</Text>
    </View>
    <View style={{marginBottom:150}}>

        <FlatList
        nestedScrollEnabled
        data={videosData}
        keyExtractor={(item)=>item}
        renderItem={(item)=>{

            return(
                <View style={{borderRadius:20,width:windowWith-40,alignSelf:'center', height:windowWith/4, backgroundColor:"white", margin:5, flexDirection:'row', justifyContent:"space-between"}}>

                    <View style={{flexDirection:"row"}}>
                        <Image source={require('../../../assets/back.png')}/>
                        <View style={{flexDirection:'column', justifyContent:"space-evenly"}}>
                           <Text style={{color:"#000000"}}>Hello now</Text>
                            <Text style={{color:"#000000"}}>Hello now</Text>
                        </View>
                    </View>

                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <TouchableOpacity
                        onPress={()=>{
                            //ToastAndroid.show("heelo", ToastAndroid.LONG)
                            dispatch({type:'startRadio', data:{url :"http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"}})
                        }}
                        >
                             <Image source={require('../../../assets/podcasticon.png')} style={{height:40, width:40, alignSelf:"center"}}/>
                        </TouchableOpacity>
                    </View>
                </View>

            )
        }}
        />

    </View>
</View>



</View>
            </ScrollView>

            
        </SafeAreaView>
    )
}

export default Home