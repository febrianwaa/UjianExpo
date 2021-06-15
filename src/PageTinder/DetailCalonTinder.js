import React, { Component } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, TextInput, Alert, Image, Platform, Linking } from 'react-native';
import axios from 'axios'
import call from 'react-native-phone-call';
import { connect } from 'react-redux'
import { JodohAction } from '../Redux/Action'


 class DetailCalonTinder extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            data: [],
            phone:""
        };

      }

    componentDidMount(){
     this.getData();
    }

    getData =()=>{  
        //Make a request for a user with a given ID
        axios.get(`http://192.168.0.15:8080/jodoh/`)
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

    triggerCall(){
    
      const args = {
        number: this.props.dataTinder.phone,
        prompt: true,
      };
      // Make a call
      call(args).catch(console.error);
  };


  // renderMarker(){
  //   return (<Marker
  //         key={this.props.route.params.id}
  //         coordinate={{ latitude : parseFloat(this.props.route.params.latitude) , longitude :  parseFloat(this.props.route.params.longitude) }}
  //       />)
  // }




    renderItem = ({ item }) => (
        <View style = {{borderWidth:5, borderColor:"black"}}>
            <Text style={styles.title}>Username : {item.username}</Text>
            <Text style={styles.title}>Nama :{item.nama}</Text>
            <Text style={styles.title}>Jenis Kelamin :{item.jenisKelamin}</Text>
            <Text style={styles.title}>Phone :{item.phone}</Text>
            <Text style={styles.title}>Umur :{item.umur}</Text>

            <TouchableOpacity onPress={()=>{this.triggerCall()}}>
                        <Image style={{marginLeft:80,width:50,height:50}}
                            source={{uri:`https://freepngimg.com/download/money/75358-mobile-money-telephone-call-phones-bank-gmail.png`}}
                        />
                    </TouchableOpacity>
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

const mapStateToProps = (state) => ({
  dataTinder:state.jodohReducer
})

const mapDispatchToProps = {
  JodohAction
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailCalonTinder)

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