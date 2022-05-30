import * as React from 'react';


import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, Image, Dimensions, ScrollView, ToastAndroid } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function Actuality({ navigation }) {

    var [backColor, setBackColor] = useState('#1251A0')
    var [actualities, setActualities] = useState([])
    var [fetchState, setFetchState]= useState("fetch")
    var [filterList, setFilterList] = useState([]) 

    var screenDevice = Dimensions.get("screen").width

    var listItems = [
        {des:"dsjkgkjs", type:"Culture"},
        {des:"dsjkgkjs", type:"France"},
        {des:"dsjkgkjs", type:"International"},
        {des:"dsjkgkjs", type:"Israel"},
        {des:"dsjkgkjs", type:"Judaisme"},
        {des:"dsjkgkjs", type:"France"},
        {des:"dsjkgrfgqskjs", type:"Israel"},
        {des:"dsjkgqdsrkjs", type:"Judaisme"},
        {des:"dsjkdfqgkjs", type:"France"},
        
    ]
    var [clickItem, setClickItem] = useState('Toutes')

    React.useEffect(()=>{
        setActualities(listItems)
        setFilterList(listItems)
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
                 setFetchState("fetched")
            })
    }, [])

    const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
          contentSize.height - paddingToBottom;
      };

    const listCategories = ["Toutes", "Culture", "France", "International", "Israel", "Judaisme"]
    return (

        <SafeAreaView style={{ flex: 1, flexDirection: 'column', }}>
              
            <ScrollView nestedScrollEnabled onScroll={({nativeEvent}) => {
                            if (isCloseToBottom(nativeEvent)) {
                                ToastAndroid.show("bottom", ToastAndroid.SHORT)
                            }
            }} style={{ flex: 1,}}>
            <View style={{ flex: 1,}}>
                        <View style={{ marginTop:40, width:"100%"}}>
                            <View style={{flexDirection:'row',}}>
                                <Text style={{color:"#1260CC",fontSize:25,fontWeight:'bold', textAlignVertical:'center', alignSelf:'center', position:'absolute', justifyContent:'center', width:'100%', textAlign:'center'}}>Actualités</Text>
                                <TouchableOpacity
                                    style={{ height:40, width:40,}}
                                    onPress={()=>{
                                        navigation.pop()
                                    }}
                                >
                                    <Image source={require('../../../assets/back.png')} style={{ height:40, width:40,}}/>
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
                                        switch(item){
                                            case "Toutes":{
                                                setFilterList(actualities)
                                                break
                                            }
                                            default:{
                                                setFilterList(actualities.filter(elem=> elem.type == item))
                                                break
                                            }
                                        }
                                    }}
                                >
                                    <Text style={{ fontWeight: 'bold', marginStart: 15, marginEnd: 15, backgroundColor: item == clickItem ? backColor : '#ffffff', color: item == clickItem ? '#ffffff' : '#000000', borderRadius: 10, paddingTop: 10, paddingBottom: 10, paddingStart: 20, paddingEnd: 20 }}>{item}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
            </View> 
            <ControllUI value={fetchState}/>
            </View> 
            </ScrollView>
        </SafeAreaView>
        
    );


    function ControllUI(value){

        switch(value.value){
            case "fetch":{
                return(
                    <SkeletonPlaceholder  >
                        <View style={{ flexDirection:'column', justifyContent:"flex-start"}}>

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
                    

            <View style={{ width: '100%', marginTop: 20, flex: 1 , marginBottom:150}}>

                <FlatList
                    numColumns={2}
                    data={filterList}
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
       
                )
            }
        }
    }
}

