import React, { Component } from 'react'
import { View, Text, TextInput,StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { LaporanAction, UserAction } from '../Redux/Action'
import axios from 'axios'

class Register extends Component {

    constructor(props){
        super(props)
    }

    handleInputData(){
        axios.post("http://192.168.0.15:8080/biodata/addBiodata/",this.props.dataRegis)
        .then((response)=>{
            alert(JSON.stringify(response.data));
            this.props.navigation.replace("home")
        }).catch((err)=>{
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
                <Text> Email </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Masukan Email"
                    onChangeText={(value)=>{this.props.UserAction("email",value)}}
                />
                <Text> Phone </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Masukan Phone"
                    onChangeText={(value)=>{this.props.UserAction("phone",value)}}
                />
                <Text> Address </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Masukan Address"
                    onChangeText={(value)=>{this.props.UserAction("address",value)}}
                />
                <TouchableOpacity style={styles.button} onPress={()=>{this.handleInputData()}}><Text style={styles.text}>Submit</Text></TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    dataRegis:state.UserReducer
})

const mapDispatchToProps = {
    UserAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)

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
        fontSize: 12,
        letterSpacing: 1,
        marginBottom: 5,
      },
  });