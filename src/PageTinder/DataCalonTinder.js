import React, { Component } from 'react'
import { View, Text,FlatList, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios';


export class DataCalonTinder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFlatList:{}
        }
    }

    componentDidMount() {
        // if(this.props.isLogin){
        //     this.props.navigation.navigate('Home')
        // }else{
            this.getData()
        // }
    }

    getData(){
        axios.get('http://192.168.0.15:8080/jodoh/')
        .then((response)=>{
            let data =response.data
            console.log(data)
            this.setState({dataFlatList:data})
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.dataFlatList}
                    keyExtractor={item=>parseInt(item.id)}
                    renderItem={({item})=>(
                        <TouchableOpacity style={{borderWidth:5,borderColor:"red",flexDirection:"row",margin:5}} onPress={()=>{this.props.navigation.navigate("DetailCalonTinder")}}>
                            <Image style={{width:100,height:100}}
                                source={{uri:`http://192.168.0.15:8080/jodoh/image/${item.image}`}}
                            />
                            <View style={{flexDirection:"column",alignSelf:"center"}}>
                                
                                <Text>Nama : {item.nama}</Text>
                                <Text>Umur : {item.umur}</Text>
                                <Text>Username : {item.username}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(DataCalonTinder)