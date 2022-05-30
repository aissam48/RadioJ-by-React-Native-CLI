import * as React from 'react';

import { SafeAreaView } from "react-native-safe-area-context"
import { useState } from 'react';
import { View, Text, Image, Dimensions, TextInput, FlatList, TouchableOpacity, ToastAndroid, ScrollView} from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';



const Events = ({navigation})=>{

    const windowWith = Dimensions.get("screen").width
    var [fetchState, setFetchState]=useState("fetch")
    var [listPodcasts, setListPodcasts] = useState([])
    var [filterPodcasts, setFilterPodcasts] = useState([])

    const data = ["lsdfj", "sdfsdlkf", "sdmlf,", "^mqsle", "^pdspfkkr", "kfpzfk", "mzdmds,", "lsdfj", "sdfsdlkf", "sdmlf,", "^mqsle", "^pdspfkkr", "kfpzfk", "mzdmds,"]

    React.useEffect(()=>{
        setListPodcasts(data)
        setFilterPodcasts(data)
        fetch('https://mywebsite.com/endpoint/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: null
            }).then(response=>response.json())
            .then(jsonRes=>{
                setFetchState("fetched")
                // here add new list of podcasts which come from server
            }).catch(err=>{
                 console.log(err + "99999")
                 setFetchState("fetched")
            })
    }, [])

    const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
          contentSize.height - paddingToBottom;
    };

    return(

        <SafeAreaView style={{flex:1, flexDirection:'column',}}>
            <ScrollView onScroll={({nativeEvent}) => {
                            if (isCloseToBottom(nativeEvent)) {
                                ToastAndroid.show("bottom", ToastAndroid.SHORT)
                            }
            }} nestedScrollEnabled>
            <View style={{flexDirection:'column', marginBottom:150}}>
                <View style={{flexDirection:'row', marginTop:40}}>
                    <Text style={{color:"#1260CC",fontSize:25,fontWeight:'bold', textAlignVertical:'center', alignSelf:'center', position:'absolute', justifyContent:'center', width:'100%', textAlign:'center'}}>Podcast</Text>
                    <TouchableOpacity
                     style={{height:40, width:40}}
                     onPress={()=>{
                         navigation.pop()
                     }}
                    >
                    <Image source={require('../../../../assets/back.png')} style={{height:40, width:40}}/>
                    </TouchableOpacity>
                </View>
                <View style={{ width:"100%", alignItems:"center", marginTop:30 }}>
                                <View style={{backgroundColor:"#EBECF0",  flexDirection:"row", width:windowWith-40, borderRadius:20 }}>
                                    <Image source={require('../../../../assets/search.png')} style={{height:30, width:30, alignSelf:'center'}}/>
                                    <TextInput 
                                    placeholder='Rechercher' 
                                    placeholderTextColor={"#CCCCCC"} 
                                    style={{ width:windowWith-100, color:"#000000"}}
                                    onChangeText={(text)=>{
                                        switch(text){
                                            case "":{
                                                setFilterPodcasts(listPodcasts)
                                                break
                                            }
                                            default:{
                                                setFilterPodcasts(listPodcasts.filter(elem=> elem == text))
                                                break
                                            }
                                        }
                                    }}
                                    />
                                </View>
                </View>

                <ControllUI value={fetchState}/>
            </View>
            </ScrollView>
            
        </SafeAreaView>
     
    )


    function ControllUI(value){
        console.log("15")
        switch(value.value){
            
            case "fetch":{
                return(
                    <SkeletonPlaceholder>
                        <View style={{ flexDirection:'column', justifyContent:"flex-start", alignItems:"center"}}>

                            <View style={{flexDirection:"row",justifyContent:"space-around", height: windowWith/3,width:windowWith, position:"relative",marginTop:20}}>
                                <View style={{borderRadius: 10,  height:windowWith/3, margin:5, width:windowWith/3-20}}></View>
                                <View style={{borderRadius: 10,  height:windowWith/3, margin:5, width:windowWith/3-20}}></View>
                                <View style={{borderRadius: 10,  height:windowWith/3, margin:5, width:windowWith/3-20}}></View>
                            </View>
                            <View style={{flexDirection:"row",justifyContent:"space-around", height: windowWith/3,width:windowWith, position:"relative",marginTop:10}}>
                                <View style={{borderRadius: 10,  height:windowWith/3, margin:5, width:windowWith/3-20}}></View>
                                <View style={{borderRadius: 10,  height:windowWith/3, margin:5, width:windowWith/3-20}}></View>
                                <View style={{borderRadius: 10,  height:windowWith/3, margin:5, width:windowWith/3-20}}></View>

                            </View>
                            <View style={{flexDirection:"row",justifyContent:"space-around", height: windowWith/3,width:windowWith, position:"relative",marginTop:10}}>
                                <View style={{borderRadius: 10,  height:windowWith/3, margin:5, width:windowWith/3-20}}></View>
                                <View style={{borderRadius: 10,  height:windowWith/3, margin:5, width:windowWith/3-20}}></View>
                                <View style={{borderRadius: 10,  height:windowWith/3, margin:5, width:windowWith/3-20}}></View>
                            </View>

                            <View style={{flexDirection:"row",justifyContent:"space-around", height: windowWith/3,width:windowWith, position:"relative",marginTop:10}}>
                                <View style={{borderRadius: 10,  height:windowWith/3, margin:5, width:windowWith/3-20}}></View>
                                <View style={{borderRadius: 10,  height:windowWith/3, margin:5, width:windowWith/3-20}}></View>
                                <View style={{borderRadius: 10,  height:windowWith/3, margin:5, width:windowWith/3-20}}></View>
                            </View>

                            <View style={{flexDirection:"row",justifyContent:"space-around", height: windowWith/3,width:windowWith, position:"relative",marginTop:10}}>
                                <View style={{borderRadius: 10,  height:windowWith/3, margin:5, width:windowWith/3-20}}></View>
                                <View style={{borderRadius: 10,  height:windowWith/3, margin:5, width:windowWith/3-20}}></View>
                                <View style={{borderRadius: 10,  height:windowWith/3, margin:5, width:windowWith/3-20}}></View>
                            </View>

                            <View style={{flexDirection:"row",justifyContent:"space-around", height: windowWith/3,width:windowWith, position:"relative",marginTop:10}}>
                                <View style={{borderRadius: 10,  height:windowWith/3, margin:5, width:windowWith/3-20}}></View>
                                <View style={{borderRadius: 10,  height:windowWith/3, margin:5, width:windowWith/3-20}}></View>
                                <View style={{borderRadius: 10,  height:windowWith/3, margin:5, width:windowWith/3-20}}></View>
                            </View>
                            

                        </View>
                    </SkeletonPlaceholder>
                )
            }
            case "fetched":{
                return(
                      

                
                    <View style={{  marginTop:30, justifyContent:"center", alignSelf:'center', }}>
                    <FlatList
                    nestedScrollEnabled={true}
                    data={filterPodcasts}
                    numColumns={3}
                    keyExtractor={(item)=>item}
                    renderItem={(item)=>{

                        return(
                            <View style={{backgroundColor:"#ffffff", height:windowWith/2-10, margin:5, width:windowWith/3-20, borderRadius:20,alignItems:"center"}}>
                                <TouchableOpacity
                                style={{width:"100%", height:"100%", alignItems:"center"}}
                                onPress={()=>{
                                    navigation.navigate("PlayList")
                                }}
                                >
                                    <Image source={require('../../../../assets/search.png')} style={{height:windowWith/4,marginTop:10, width:windowWith/3-40,}}/>
                                    <Text numberOfLines={3} style={{color:"black", height:windowWith/7,marginTop:10, width:windowWith/3-40,}}>
                                        hgsmlfgkjgdslrfùeslf, fjkqfjdsf,sd gskoaef,s gsqmolazrfs g,sgqj
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )
                        
                    }}
                    />

                </View>
                     
                )
            }
        }
    }
}

export default Events