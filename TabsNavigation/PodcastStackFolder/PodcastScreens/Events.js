import * as React from 'react';

import { SafeAreaView } from "react-native-safe-area-context"
import { useState } from 'react';
import { View, Text, Image, Dimensions, TextInput, FlatList, TouchableOpacity} from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';



const Events = ({navigation})=>{

    
    const windowWith = Dimensions.get("screen").width
    var [fetchState, setFetchState]=useState("fetch")

    const data = ["lsdfj", "sdfsdlkf", "sdmlf,", "^mqsle", "^pdspfkkr", "kfpzfk", "mzdmds,"]

    React.useEffect(()=>{
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
            }).catch(err=>{
                 console.log(err + "99999")
                 setFetchState("fetched")
            })
    }, [])

    return(

        <ControllUI value={fetchState}/>
     
    )


    function ControllUI(value){
        switch(value.value){
            
            case "fetch":{
                return(
                    <SkeletonPlaceholder>
                        <View style={{ flexDirection:'column', justifyContent:"flex-start", alignItems:"center"}}>

                            <View style={{flexDirection:"row", marginTop:70, position:"relative", }}>
                                <View style={{height:45, width:windowWith-50, marginStart:15,marginEnd:15, borderRadius:20}}/>
                                
                            </View>
                            <View style={{flexDirection:"row",justifyContent:"space-around", height: windowWith/4+ 20,width:windowWith, position:"relative",marginTop:20}}>
                                <View style={{borderRadius: 10,  height:windowWith/4+ 20, margin:5, width:windowWith/3-20}}></View>
                                <View style={{borderRadius: 10,  height:windowWith/4+ 20, margin:5, width:windowWith/3-20}}></View>
                                <View style={{borderRadius: 10,  height:windowWith/4+ 20, margin:5, width:windowWith/3-20}}></View>
                            </View>
                            <View style={{flexDirection:"row",justifyContent:"space-around", height: windowWith/4+ 20,width:windowWith, position:"relative",marginTop:10}}>
                                <View style={{borderRadius: 10,  height:windowWith/4+ 20, margin:5, width:windowWith/3-20}}></View>
                                <View style={{borderRadius: 10,  height:windowWith/4+ 20, margin:5, width:windowWith/3-20}}></View>
                                <View style={{borderRadius: 10,  height:windowWith/4+ 20, margin:5, width:windowWith/3-20}}></View>

                            </View>
                            <View style={{flexDirection:"row",justifyContent:"space-around", height: windowWith/4+ 20,width:windowWith, position:"relative",marginTop:10}}>
                                <View style={{borderRadius: 10,  height:windowWith/4+ 20, margin:5, width:windowWith/3-20}}></View>
                                <View style={{borderRadius: 10,  height:windowWith/4+ 20, margin:5, width:windowWith/3-20}}></View>
                                <View style={{borderRadius: 10,  height:windowWith/4+ 20, margin:5, width:windowWith/3-20}}></View>
                            </View>

                            <View style={{flexDirection:"row",justifyContent:"space-around", height: windowWith/4+ 20,width:windowWith, position:"relative",marginTop:10}}>
                                <View style={{borderRadius: 10,  height:windowWith/4+ 20, margin:5, width:windowWith/3-20}}></View>
                                <View style={{borderRadius: 10,  height:windowWith/4+ 20, margin:5, width:windowWith/3-20}}></View>
                                <View style={{borderRadius: 10,  height:windowWith/4+ 20, margin:5, width:windowWith/3-20}}></View>
                            </View>

                            <View style={{flexDirection:"row",justifyContent:"space-around", height: windowWith/4+ 20,width:windowWith, position:"relative",marginTop:10}}>
                                <View style={{borderRadius: 10,  height:windowWith/4+ 20, margin:5, width:windowWith/3-20}}></View>
                                <View style={{borderRadius: 10,  height:windowWith/4+ 20, margin:5, width:windowWith/3-20}}></View>
                                <View style={{borderRadius: 10,  height:windowWith/4+ 20, margin:5, width:windowWith/3-20}}></View>
                            </View>

                            <View style={{flexDirection:"row",justifyContent:"space-around", height: windowWith/4+ 20,width:windowWith, position:"relative",marginTop:10}}>
                                <View style={{borderRadius: 10,  height:windowWith/4+ 20, margin:5, width:windowWith/3-20}}></View>
                                <View style={{borderRadius: 10,  height:windowWith/4+ 20, margin:5, width:windowWith/3-20}}></View>
                                <View style={{borderRadius: 10,  height:windowWith/4+ 20, margin:5, width:windowWith/3-20}}></View>
                            </View>
                            

                        </View>
                    </SkeletonPlaceholder>
                )
            }
            case "fetched":{
                return(
                    <SafeAreaView style={{flex:1, flexDirection:'column'}}>
            <View style={{flex:1, flexDirection:'column'}}>
                <View style={{flexDirection:'row', marginTop:40}}>
                    <Text style={{color:"#1260CC",fontSize:25,fontWeight:'bold', textAlignVertical:'center', alignSelf:'center', position:'absolute', justifyContent:'center', width:'100%', textAlign:'center'}}>Podcast</Text>
                </View>

                <View style={{ width:"100%", alignItems:"center", marginTop:30 }}>
                    <View style={{backgroundColor:"#EBECF0",  flexDirection:"row", width:windowWith-40, borderRadius:20 }}>
                         <Image source={require('../../../assets/search.png')} style={{height:30, width:30, alignSelf:'center'}}/>
                         <TextInput placeholder='Rechercher' placeholderTextColor={"#CCCCCC"} style={{ width:windowWith-100, color:"#000000"}}/>
                    </View>
                </View>  

                <View style={{  marginTop:30, justifyContent:"center", alignSelf:'center' }}>
                    <FlatList
                    data={data}
                    numColumns={3}
                    keyExtractor={(item)=>item}
                    renderItem={(item)=>{

                        return(
                            <View style={{backgroundColor:"#CCCCCC", height:windowWith/4+ 20, margin:5, width:windowWith/3-20, borderRadius:20}}>
                                <TouchableOpacity
                                style={{width:"100%", height:"100%"}}
                                onPress={()=>{
                                    navigation.navigate("PlayList")
                                }}
                                >

                                </TouchableOpacity>
                            </View>
                        )
                        
                    }}
                    />

                </View>
            </View>
        </SafeAreaView>
                )
            }
        }
    }
}

export default Events