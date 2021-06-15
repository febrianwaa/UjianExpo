import axios from 'axios'
import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { connect } from 'react-redux'
import { JodohAction } from '../Redux/Action'
import PropTypes from 'prop-types'


class MenuPeminjaman extends Component {

    constructor (props){
        super(props)
        
    }
    componentDidMount(){
    }

    render() {
        return (
            <View>
            <TouchableOpacity style={styles.box} onPress={()=>{this.props.navigation.navigate("DataBukuPeminjaman")}}><Text style={styles.boxLabel}>Buku</Text></TouchableOpacity>   

            <TouchableOpacity style={styles.box} onPress={()=>{this.props.navigation.navigate("TambahPeminjam")}}><Text style={styles.boxLabel}>Tambah Peminjam</Text></TouchableOpacity>   
            
            <TouchableOpacity style={styles.box} onPress={()=>{this.props.navigation.navigate("HistoryPeminjaman")}}><Text style={styles.boxLabel}>History Peminjam</Text></TouchableOpacity>
            
                
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    dataTinder:state.jodohReducer
})

const mapDispatchToProps = {
    JodohAction
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuPeminjaman)

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