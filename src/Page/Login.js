import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { UserAction } from '../Redux/Action'
import axios from 'axios'

class Login extends Component {
    constructor(props){
        super(props)
    }

    // handleLogin(){
    //     axios.get(`http://192.168.0.15:8080/biodata/nama/${this.props.dataNama}`)
    //     .then((response)=>{
    //         alert("Selamat datang " + response.data.nama)
    //         this.props.UserAction("id",response.data.id)
    //         this.props.UserAction("nama",response.data.nama)
    //         this.props.UserAction("email",response.data.email)
    //         this.props.UserAction("phone",response.data.phone)
    //         this.props.UserAction("address",response.data.address)
    //         this.props.UserAction("isLogin",true)

    //         this.props.navigation.navigate("menu")
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // }


    handleLogin(){
        axios.get('http://192.168.0.15:8080/biodata/login/',{
            params:{
                nama:this.props.dataNama,
                phone:this.props.dataPhone,
            }
        })
        .then((response) =>{
            let data=response.data;
            if(data !== ""){
                this.props.UserAction("isLogin", true)
                this.props.UserAction(data,"dataUser")
                alert("Login Berhasil")
                this.props.navigation.navigate('menu')
            }else{
                alert("Login Gagal")
                this.props.UserAction("isLogin",false)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }



    render() {
        return (
            <View>
                <Text> Nama </Text> 
                <TextInput
                    style={styles.input}
                    placeholder="Masukan Nama"
                    onChangeText={(value)=>{this.props.UserAction("nama",value)}}
                />  
                <Text> Phone </Text> 
                <TextInput
                    style={styles.input}
                    placeholder="Masukan Phone"
                    onChangeText={(value)=>{this.props.UserAction("phone",value)}}
                />              
                <TouchableOpacity style={styles.box} onPress={()=>{this.handleLogin()}}><Text style={styles.boxLabel}>Submit</Text></TouchableOpacity>
            
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    dataNama:state.UserReducer.nama,
    dataPhone:state.UserReducer.phone
})

const mapDispatchToProps = {
    UserAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

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