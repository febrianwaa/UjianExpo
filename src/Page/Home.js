import axios from 'axios'
import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'

class Home extends Component {

    constructor (props){
        super(props)
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
                {
                    (this.props.dataRegis.isLogin ? <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("login")}}><Text style={styles.text}>Logout</Text></TouchableOpacity>
                    : 
                    <View>
                        <TouchableOpacity style={styles.box} onPress={()=>{this.props.navigation.navigate("login")}}><Text style={styles.boxLabel}>Login</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.box} onPress={()=>{this.props.navigation.navigate("registrasi")}}><Text style={styles.boxLabel}>Registrasi</Text></TouchableOpacity>
                    </View>
                    )
                }
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    dataRegis:state.UserReducer
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

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
  });