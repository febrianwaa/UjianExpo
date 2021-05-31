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
            <View>
                <Text> Username </Text> 
                <TextInput
                    style={styles.input}
                    placeholder="Masukan Username"
                    onChangeText={(value)=>{this.props.JodohAction("username",value)}}
                />  
                <Text> Phone </Text> 
                <TextInput
                    style={styles.input}
                    placeholder="Masukan Phone"
                    onChangeText={(value)=>{this.props.JodohAction("phone",value)}}
                />              
                <TouchableOpacity style={styles.box} onPress={()=>{this.handleLogin()}}><Text style={styles.boxLabel}>Submit</Text></TouchableOpacity>
            
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
      }
  });