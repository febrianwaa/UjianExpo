import React, { Component } from 'react'
import { View, Text, TextInput,StyleSheet, TouchableOpacity, Platform, Button, Image } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import axios from 'axios'
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';

export class RegisterTinder extends Component {

    constructor(props){
        super(props);
        this.state = {
            username:"",
            nama:"",
            jenisKelamin:"",
            phone:"",
            umur:"",
            image:""
        }
    }

    componentDidMount(){
        this.getPermission()
        
    }

    async getPermission(){
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    async pickImage(){
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
      
          console.log(result);
          
          if (!result.cancelled) {
              console.log(result.uri)
              this.setState({image:result.uri})
          }
    }

    handlerSubmit(){
        
        let formData = new FormData();
        let filename = this.state.image;
        console.log("nama gambar "+ filename.split('/').pop())
        formData.append('data',JSON.stringify(this.state))
        formData.append('file',{
            uri: this.state.image, //Your Image File Path
            type: 'image/jpeg', 
            name: filename.split('/').pop(),
         })

         axios.post('http://192.168.0.15:8080/jodoh/',formData,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((response)=>{
            alert(response.data)
            this.props.navigation.navigate("HomeTinder")
        })
        .catch((error)=>{
            console.log(error)
        })
    }


   

    render() {
        return (
            <View>
                <Text> Username </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Masukan Username"
                    onChangeText={(value)=>{this.setState({username:value})}}
                />

               <Text> Nama </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Masukan Nama"
                    onChangeText={(value)=>{this.setState({nama:value})}}
                />

                <Text> Jenis Kelamin </Text>
                <Picker
                    selectedValue={this.state.jenisKelamin}
                    style={{ height: 50, width: 300 }}
                    onValueChange={(itemValue) => this.setState({ jenisKelamin: itemValue })}>
                    <Picker.Item label="Masukan Pilihan"/>
                    <Picker.Item label="laki-laki" value="laki-laki" />
                    <Picker.Item label="perempuan" value="perempuan" />
                </Picker>

                <Text> Phone </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Masukan Phone"
                    onChangeText={(value)=>{this.setState({phone:value})}}
                />

                <Text> Umur </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Masukan Umur"
                    onChangeText={(value)=>{this.setState({umur:value})}}
                />

                <Button title="Pick an image from camera roll" onPress={()=>{this.pickImage()}} />
                <Image source={{ uri: this.state.image }} style={{ width: 200, height: 200,alignSelf:'center' }} />

                <TouchableOpacity style={styles.box} onPress={()=>{this.handlerSubmit()}}><Text style={styles.boxLabel}>Submit</Text></TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterTinder)

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