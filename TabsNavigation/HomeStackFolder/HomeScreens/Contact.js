import * as React from 'react';
import {ActivityIndicator ,ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ToastAndroid } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";



export default function Contact({navigation}) {

    var [fullName, setFullName] = React.useState("")
    var [email, setEmail] = React.useState("")
    var [message, setMessage] = React.useState("")
    var [btnState, setBtnState] = React.useState("Envoyer")

    

    return (
        <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
            <ScrollView style={{ flex: 1, flexDirection: 'column' }}>

                <View style={{ flex: 1, flexDirection: 'column', width: '100%', marginBottom:100 }}>

                    <TouchableOpacity
                    onPress={()=>{
                        navigation.pop()
                    }}
                    >
                        <Image source={require('../../../assets/back.png')} style={{position:"absolute", height:40, width:40, marginTop:30,marginStart:10}}/>
                    </TouchableOpacity>
                    <View style={{ alignSelf: 'center', marginTop: 30 }}>
                        <Image source={require('../../../assets/radiojlogo.png')} />
                    </View>

                    <View style={{ marginStart: 20, marginEnd: 20, marginTop: 80 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color:"#000000" }}>
                            Info Contacts
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 30 }}>
                        <Image source={require('../../../assets/call.png')} style={{ height: 40, width: 40, marginStart: 20 }} />
                        <Text style={{color:"#000000", alignSelf: 'center', marginStart: 50, fontWeight: 'bold', fontSize: 18 }}>
                            +212-512121212
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 30 }}>
                        <Image source={require('../../../assets/sms.png')} style={{ height: 40, width: 40, marginStart: 20 }} />
                        <Text style={{color:"#000000", alignSelf: 'center', marginStart: 50, fontWeight: 'bold', fontSize: 18 }}>
                            +212-512121212
                        </Text>
                    </View>
                    <View>
                        <Text style={{color:"#000000", marginStart: 20, marginTop: 40, fontWeight: 'bold', fontSize: 20 }}>
                            Envoyer un message
                        </Text>

                        <View>
                            <Text style={{color:"#000000", marginStart: 20, marginTop: 20, fontWeight: 'bold', fontSize: 15 }}>
                                Nom & Prénom
                            </Text>
                            <TextInput
                             style={{color:"#000000", marginStart: 20, marginEnd: 20, borderRadius: 20, borderColor: '#000000', height: 60, padding: 10, borderWidth: 1 }}
                             onChangeText={(text)=>{
                                 setFullName(text)
                             }}
                             />

                        </View>

                        <View>
                            <Text style={{color:"#000000", marginStart: 20, marginTop: 20, fontWeight: 'bold', fontSize: 15 }}>
                                Email
                            </Text>
                            <TextInput 
                            style={{color:"#000000", marginStart: 20, marginEnd: 20, borderRadius: 20, borderColor: '#000000', height: 60, padding: 10, borderWidth: 1 }}
                            onChangeText={(text)=>{
                                setEmail(text)
                            }}
                            />

                        </View>

                        <View>
                            <Text style={{color:"#000000", marginStart: 20, marginTop: 20, fontWeight: 'bold', fontSize: 15 }}>
                                Message
                            </Text>
                            <TextInput 
                            textAlignVertical='top' multiline style={{color:"#000000", marginStart: 20, marginEnd: 20, borderRadius: 20, borderColor: '#000000', height: 200, padding: 10, borderWidth: 1 }}
                            onChangeText={(text)=>{
                                setMessage(text)
                            }}
                            />

                        </View>

                        <View style={{ marginBottom: 50, marginTop: 50, marginStart: 20, marginEnd: 20, height:50, justifyContent:'center', alignItems:'center' }}>
                            <TouchableOpacity
                             style={{height:50, alignSelf: 'center', backgroundColor: '#1251A0', width: '100%', borderRadius: 20, padding: 10, justifyContent:'center', alignItems:'center'  }}
                             onPress={()=>{

                                switch(true){
                                    case(fullName == ""):{
                                        ToastAndroid.show("Ajoute Nom & Prénom", ToastAndroid.LONG)
                                        break
                                    }
                                    case(email == ""):{
                                        ToastAndroid.show("Ajoute Email", ToastAndroid.LONG)
                                        break
                                    }
                                    case(message == ""):{
                                        ToastAndroid.show("Message", ToastAndroid.LONG)
                                        break
                                    }

                                    case(message != "" && email != "" && fullName != ""):{
                                        setBtnState("Click")
                                        const object = {
                                            fullName:fullName,
                                            email: email,
                                            message: message
                                        }
                                        const json  = JSON.stringify(object)
       
                                        fetch('https://mywebsite.com/endpoint/', {
                                            method: 'POST',
                                            headers: {
                                                Accept: 'application/json',
                                                'Content-Type': 'application/json'
                                            },
                                            body: json
                                          }).then(response=>response.json())
                                          .then(jsonRes=>{
                                            setBtnState("Envoyer")
                                          }).catch(err=>{
                                              console.log(err + "99999")
                                              setBtnState("Envoyer")
                                          })
                                        break
                                    }
                                }
                                 

                             }}
                             >
                                <BtnClickState value={btnState} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );


    function BtnClickState(value){

        
        switch(value.value){
            case "Envoyer":{
                return(
                    <Text style={{ alignSelf: 'center', color: '#ffffff', fontWeight: 'bold', fontSize: 20 }}>
                    Envoyer
                    </Text>                    
                )
            }

            case "Click":{
                return(
                    <ActivityIndicator size="small" color="#ffffff" style={{alignSelf:"center"}} />
                )
            }
            
        }
    }
    
}
