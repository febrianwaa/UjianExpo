import React, { Component } from 'react'
import { View, Text, TextInput,StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { LaporanAction, UserAction } from '../Redux/Action'
import axios from 'axios'

class DataBukuPeminjaman extends Component {

    constructor(props){
        super(props);
        this.state={
            namaBuku:"",
            isbn:""
        }
    }

    handleInputData(){
        axios.post("http://192.168.0.15:8080/bukupeminjaman/",this.state)
        .then((response)=>{
            alert(JSON.stringify(response.data));
            this.props.navigation.replace("MenuPeminjaman")
        }).catch((err)=>{
            console.log(err)
        })
    }

    render() {
        return (
            <View>
                <Text> Nama Buku </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Masukan Nama Buku"
                    onChangeText={(value)=>{this.setState({namaBuku:value})}}
                />
                <Text> ISBN </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Masukan ISBN"
                    onChangeText={(value)=>{this.setState({isbn:value})}}
                />
                
                <TouchableOpacity style={styles.box} onPress={()=>{this.handleInputData()}}><Text style={styles.boxLabel}>Submit</Text></TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
   
}

export default connect(mapStateToProps, mapDispatchToProps)(DataBukuPeminjaman)

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