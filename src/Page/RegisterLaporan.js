import React, { Component } from 'react'
import { View, Text, TextInput,StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { LaporanAction, UserAction } from '../Redux/Action'
import axios from 'axios'

class RegisterLaporan extends Component {

    constructor(props){
        super(props)
    }

    handleInputData(){
        axios.post("http://192.168.0.15:8080/laporan/addLaporan/",this.props.dataRegis)
        .then((response)=>{
            alert(JSON.stringify(response.data));
            this.props.navigation.replace("menu")
        }).catch((err)=>{
            console.log(err)
        })
    }

    render() {
        return (
            <View>
                {/* <Text> Status Kejadian </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Masukan Kejadian"
                    onChangeText={(value)=>{this.props.LaporanAction("statusKejadian",value)}}
                />
                <Text> Alamat </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Masukan Alamat"
                    onChangeText={(value)=>{this.props.LaporanAction("alamat",value)}}
                /> */}
                <Text> Latitude </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Masukan latitude"
                    onChangeText={(value)=>{this.props.LaporanAction("latitude",value)}}
                />
                <Text> Longitude </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Masukan Longitude"
                    onChangeText={(value)=>{this.props.LaporanAction("longitude",value)}}
                />
                <TouchableOpacity style={styles.box} onPress={()=>{this.handleInputData()}}><Text style={styles.boxLabel}>Submit</Text></TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    dataRegis:state.LaporanReducer
})

const mapDispatchToProps = {
    LaporanAction
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterLaporan)

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
        fontSize: 16,
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