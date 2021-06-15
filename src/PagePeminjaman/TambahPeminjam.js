import React, { Component } from 'react'
import { View, Text, TextInput,StyleSheet, TouchableOpacity, Platform, Button, Image } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import axios from 'axios'
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';

export class TambahPeminjam extends Component {

    constructor(props){
        super(props);
        this.state = {
            nama:"",
            phone:"",
            databuku:[{
                id: 1,
                isbn: "123456",
                namaBuku: "Laptop",
            }],
            idbukupeminjaman:{
                id: 1,
                isbn: "123456",
                namaBuku: "Laptop",
            },
            
        }
    }

    componentDidMount(){
        this.getDataBuku()
    }

    getDataBuku(){
        axios.get('http://192.168.0.15:8080/bukupeminjaman/')
        .then((response) =>{
            let data = response.data
            console.log(data)
            this.setState({databuku:data})
        })
        .catch((error) =>{
            console.log(error)
        })
    }



    handlerSubmit(){
        
        axios.post('http://192.168.0.15:8080/datapeminjaman/',this.state)
        .then((response)=>{
            let data = response.data
            alert(data)
            this.props.navigation.replace('MenuPeminjaman')
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    pickerChange(index){
        this.state.databuku.map( (v,i)=>{
         if( index === i ){
           this.setState({
           idbukupeminjaman: this.state.databuku[index]
          })
         }
        })
    }
   

    render() {
        return (
            <View>

                <Text> Nama Peminjam </Text>
                <TextInput placeholder="masukan nama peminjam" onChangeText={(value)=>{this.setState({nama: value})}}/>
                <Text> No Hp </Text>
                <TextInput placeholder="masukan nomor handphone" onChangeText={(value)=>{this.setState({phone: value})}}/>
                <Text> Pilih Buku </Text>
                <Picker
                    selectedValue={this.state.idbukupeminjaman.namaBuku}
                    mode="dropdown"
                    style={{ height: 50, width: 300 }}
                    onValueChange={(itemValue, itemIndex) => this.pickerChange(itemIndex)}>
                        
                        {
                        this.state.databuku.map( (v)=>{
                         return <Picker.Item label={v.namaBuku} value={v} />
                        })
                        }

                </Picker>
                

                <TouchableOpacity style={styles.box} onPress={()=>{this.handlerSubmit()}}><Text style={styles.boxLabel}>Submit</Text></TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TambahPeminjam)

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