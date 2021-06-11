import React from 'react';
import firebase from 'firebase'
import db from '../config'
import {StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView,TextInput, Keyboard} from 'react-native';
import MyHeader from '../components/MyHeader'
export default class ExchangeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            userId:firebase.auth().currentUser.email,
            itemName:'',
            description:'',
            
        }
    }
    createUniqueId(){
        return Math.random().toString(36).substring(7)
    }
    addItem=(itemName, description)=>{
        var userId=this.state.userId
        var requestId=this.createUniqueId()
        db.collection('items').add({
            user_Id:userId,
            item_name:itemName,
            description:description,
            request_id:requestId
        })
        this.setState({
            description:'',
            itemName:''

        })
        alert('Item added succesfully')
        
    }
    render(){
        return(
            <View style={{flex:1}}>
               <MyHeader title={'Exchange'} navigation={this.props.navigation}/>
               <KeyboardAvoidingView style={styles.keyBoardStyle}>
               <TextInput placeholder={'Item Name'} style={styles.formTextInput} value={this.state.itemName}
               onChangeText={(text)=>{
                this.setState({
                    itemName:text
                })
               }}/>
               <TextInput placeholder={'Description'} style={[styles.formTextInput,{height:300,}]} value={this.state.description}
               multiline={true}numberOfLines={8}
               onChangeText={(text)=>{
                this.setState({
                    description:text
                })
               }}/>
               <TouchableOpacity style={styles.button} onPress={()=>{
                   this.addItem(this.state.itemName,this.state.description)
               }}>
                   <Text>
                       Add Item
                   </Text>
                   </TouchableOpacity>
               </KeyboardAvoidingView>
                </View>
        )
    }
    
}
const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
      },
    }
)