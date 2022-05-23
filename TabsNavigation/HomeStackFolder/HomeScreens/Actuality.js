import * as React from 'react';


import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function Actuality({ navigation }) {

    var [backColor, setBackColor] = useState('#1251A0')
    var [actualities, setActualities] = useState([])
    var [fetchState, setFetchState]=useState("fetch")

    var screenDevice = Dimensions.get("screen").width

    var listItems = ["dsjkgkjs", "dsjkgkjs", "dsjkgkjs", "dsjkgkjs", "dsjkgkjs", "dsjkgkjs", "dsjkgkjs", "dsjkgkjs", "dsjkgkjs", "dsjkgkjs",
        "dsjkgkjs",
        "dsjkgkjs",
        "dsjkgkjs",
        "dsjkgkjs",
    ]
    var [clickItem, setClickItem] = useState('Toutes')

    React.useEffect(()=>{
        setActualities(listItems)
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

    const listCategories = ["Toutes", "Culture", "France", "International", "Israel", "Judaisme"]
    return (
        <ControllUI value={fetchState}/>
    );


    function ControllUI(value){

        switch(value.value){
            case "fetch":{
                return(
                    <SkeletonPlaceholder  >
                        <View style={{ flexDirection:'column', justifyContent:"flex-start"}}>

                            <View style={{flexDirection:"row", marginTop:90, position:"relative"}}>
                                <View style={{height:45, width:80, marginStart:15,marginEnd:15, borderRadius:10}}/>
                                <View style={{height:45, width:80, marginStart:15,marginEnd:15, borderRadius:10}}/>
                                <View style={{height:45, width:80, marginStart:15,marginEnd:15, borderRadius:10}}/>
                                <View style={{height:45, width:80, marginStart:15,marginEnd:15, borderRadius:10}}/>
                            </View>
                            <View style={{flexDirection:"row", height: 200,width:screenDevice, position:"relative",marginTop:20}}>
                                <View style={{borderRadius: 10,  height: 200,width:screenDevice/2 - 10, margin: 5}}></View>
                                <View style={{borderRadius: 10,  height: 200,width:screenDevice/2 - 10, margin: 5}}></View>
                            </View>
                            <View style={{flexDirection:"row", height: 200,width:screenDevice, position:"relative",marginTop:10}}>
                                <View style={{borderRadius: 10,  height: 200,width:screenDevice/2 - 10, margin: 5}}></View>
                                <View style={{borderRadius: 10,  height: 200,width:screenDevice/2 - 10, margin: 5}}></View>
                            </View>
                            <View style={{flexDirection:"row", height: 200,width:screenDevice, position:"relative",marginTop:10}}>
                                <View style={{borderRadius: 10,  height: 200,width:screenDevice/2 - 10, margin: 5}}></View>
                                <View style={{borderRadius: 10,  height: 200,width:screenDevice/2 - 10, margin: 5}}></View>
                            </View>
                            

                        </View>
                    </SkeletonPlaceholder>
                )
            }

            case "fetched":{
                return(
                    <SafeAreaView style={{ flex: 1, flexDirection: 'column', }}>
                        <View style={{ flex: 1,}}>
                        <View style={{ backgroundColor:"red", marginTop:40, width:"100%"}}>
                            <View style={{flexDirection:'row',}}>
                                <Text style={{color:"#1260CC",fontSize:25,fontWeight:'bold', textAlignVertical:'center', alignSelf:'center', position:'absolute', justifyContent:'center', width:'100%', textAlign:'center'}}>Actualités</Text>
                                <TouchableOpacity
                                    onPress={()=>{
                                        navigation.pop()
                                    }}
                                >
                                    <Image source={require('../../../assets/back.png')} style={{position:"absolute", height:40, width:40,marginStart:10}}/>
                                </TouchableOpacity>
                            </View>
                        </View>

            <View style={{ marginTop: 55}}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={listCategories}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <TouchableOpacity
                                    onPress={() => {
                                        setClickItem(item)
                                        setBackColor('#1251A0')
                                    }}
                                >
                                    <Text style={{ fontWeight: 'bold', marginStart: 15, marginEnd: 15, backgroundColor: item == clickItem ? backColor : '#ffffff', color: item == clickItem ? '#ffffff' : '#000000', borderRadius: 10, paddingTop: 10, paddingBottom: 10, paddingStart: 20, paddingEnd: 20 }}>{item}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
            </View>

            <View style={{ width: '100%', marginTop: 20, flex: 1 , marginBottom:150}}>

                <FlatList
                    numColumns={2}
                    data={actualities}
                    keyExtractor={(item, index) => index}

                    renderItem={({ item }) => {

                        return (
                            <View style={{ borderRadius: 10, flex: 1, height: 200, backgroundColor: "#ffffff", margin: 5 }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate('ReadTopic')
                                    }}
                                    style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', height: '100%', width: '100%' }}
                                >

                                    <View style={{ backgroundColor: '#000000', height: '60%', width: '90%', borderRadius: 20, marginTop: 10 }}>
                                        <Image source={require('../../../assets/search.png')} style={{ borderRadius: 20, height: '100%', width: '100%' }} />
                                    </View>

                                    <Text style={{color:"#000000"}}>
                                        Yom Hazikaron : « Notre peuple aspire à l’unité », déclare Naftali Bennett
                                    </Text>

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

