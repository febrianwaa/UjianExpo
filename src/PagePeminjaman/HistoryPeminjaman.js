import React, { Component } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, TextInput, Alert, Image } from 'react-native';
import axios from 'axios'


export default class HistoryPeminjaman extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            data: [{}]
        };

      }

    componentDidMount(){
     this.getData();
    }

    getData =()=>{  
        //Make a request for a user with a given ID
        axios.get(`http://192.168.0.15:8080/datapeminjaman/`)
        .then( (response) => {
       //   console.log(response.data)
          let data=response.data;   
          this.setState({data:data}); 
        })
        .catch(function (error) {
        // handle error
         console.log(error);
        })
        // .then(function () {
        // // always executed
        // });
    }


    renderItem = ({ item }) => (
        <View style = {{borderWidth:5, borderColor:"black"}}>
            <Text style={styles.title}>Nama : {item.nama}</Text>
            <Text style={styles.title}>Phone :{item.phone}</Text>
            <Text style={styles.title}>Nama Buku :{JSON.stringify(item.idbukupeminjaman)}</Text>
            </View>
    )

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
              />
            </SafeAreaView>
          );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 20,
    },
    button: {
      margin:10,
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
    },
    boxLabel: {
        textTransform: 'uppercase',
        fontSize: 12,
        letterSpacing: 1,
        marginBottom: 5,
      },
  });