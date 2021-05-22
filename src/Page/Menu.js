import axios from 'axios'
import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { UserAction } from '../Redux/Action'
import PropTypes from 'prop-types'

class Menu extends Component {

    constructor (props){
        super(props)
    }

    handleLogout(){
        alert("Anda telah logout")
        this.props.UserAction("isLogin",false)
        this.props.navigation.navigate("login")
    }

    componentDidMount(){
        console.log(JSON.stringify(this.props))
    }
    getData = ()=>{
        axios.get("")
    }
    render() {
        return (
            <View>
            <TouchableOpacity style={styles.box} onPress={()=>{this.props.navigation.navigate("historyuser")}}><Text style={styles.boxLabel}>History User</Text></TouchableOpacity>   
            <TouchableOpacity style={styles.box} onPress={()=>{this.props.navigation.navigate("petaa")}}><Text style={styles.boxLabel}>MAPS</Text></TouchableOpacity>
            <TouchableOpacity style={styles.box} onPress={()=>{this.handleLogout()}}><Text style={styles.boxLabel}>Logout</Text></TouchableOpacity>
            
                
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu)

const styles = StyleSheet.create({
    button:{
        padding:10,
    },
    text:{
        textAlign:'center',
        borderWidth:5,
    },
    box: {
        borderWidth: 7,
        borderColor: '#ddd',
        padding: 15,
        marginBottom: 10,
        alignItems: 'center',
      },
      boxLabel: {
        textTransform: 'uppercase',
        fontSize: 16,
        letterSpacing: 1,
        marginBottom: 5,
      },
      boxText: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      image: {
        width: 50,
        height: 40,
        alignContent: 'center',
      },
  });





  {/*<View>
                {
                    (this.props.dataRegis.isLogin ? <TouchableOpacity style={styles.button}><Text style={styles.text}>Logout</Text></TouchableOpacity>
                    : 
                    <View>
                        <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("login")}}><Text style={styles.text}>Login</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("registrasi")}}><Text style={styles.text}>Registrasi</Text></TouchableOpacity>
                    </View>
                    )
                }
            </View>*/}


           {/*} <Image style={styles.image} source={{ uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png` }} />*/}