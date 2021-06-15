import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { JodohAction } from '../Redux/Action'
import axios from 'axios'

class LoginTinder extends Component {
    constructor(props){
        super(props)
    }


    handleLogin(){
        axios.get('http://192.168.0.15:8080/jodoh/login/',{
            params:{
                username:this.props.dataUsername,
                phone:this.props.dataPhone,
            }
        })
        .then((response) =>{
            let data=response.data;
            if(data !== ""){
                this.props.JodohAction("isLogin", true)
                this.props.JodohAction(data,"dataJodoh")
                alert("Login Berhasil")
                this.props.navigation.navigate('MenuTinder')
            }else{
                alert("Login Gagal")
                this.props.JodohAction("isLogin",false)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }



    render() {
        return (
            <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        {/* <Image style={styles.logo}/> */}
                        <Text style={styles.logoText}>Moisture Detector</Text>
                    </View>


                <View style={styles.inputContainer}> 
                <TextInput
                    style={styles.inputText}
                    placeholder="Username"
                    onChangeText={(value)=>{this.props.JodohAction("username",value)}}
                    placeholderTextColor={'rgba(255,255,255,0.7)'}
                />
                </View> 
                <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Phone"
                    secureTextEntry={true} TouchableOpacity={(value)=>{this.props.JodohAction("phone",value)}}
                    placeholderTextColor={'rgba(255,255,255,0.7)'}
                />   
                </View>
                <TouchableOpacity style={styles.loginBtn} onPress={()=>{this.handleLogin()}}><Text style={{color:'white', fontSize:16}}>Submit</Text></TouchableOpacity>
            
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    dataUsername:state.jodohReducer.username,
    dataPhone:state.jodohReducer.phone
})

const mapDispatchToProps = {
    JodohAction
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginTinder)

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
    button:{
        padding:20,
    },
    text:{
        textAlign:'center',
        borderWidth:5,
    },
    boxLabel: {
        textTransform: 'uppercase',
        fontSize: 17,
        letterSpacing: 1,
        marginBottom: 5,
      },
      box: {
        borderWidth: 3,
        borderColor: '#ddd',
        padding: 15,
        marginBottom: 10,
        alignItems: 'center',
      },


      InputText:{
          color: 'rgba(255,255,255,0.7)',
          fontSize: 16,
          paddingLeft: 20,
          marginHorizontal: 20
      },
      signup:{
          fontSize:16,
          color:'#003f5c'
      },
      loginBtn:{
        width:'70%',
        backgroundColor:'#465881',
        borderRadius:25,
        height: 50,
        alignItems: 'center',
        marginBottom:10,
        justifyContent:'center',
        marginTop:40
      },
      inputContainer:{
          width:'60%',
          backgroundColor:'#465881',
          borderRadius:20,
          height: 60,
          marginBottom:20,
          justifyContent:'center',
          padding:20
      },
      container:{
          flex:1,
          backgroundColor:'green',
          justifyContent: 'center',
          alignItems:'center'
      },
      logoText:{
          fontSize:20,
          fontWeight:'500',
          marginBottom:40,
          marginTop:10,
          color:'white',
          opacity:1.0
      },
      logo:{
          width:120,
          height:120
      },
      logoContainer: {
          alignItems:'center'
      }
  });