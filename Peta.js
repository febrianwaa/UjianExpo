import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MapView,{marker} from 'react-native-maps'

class Peta extends Component {

    constructor (props){
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <MapView style={styles.map} initialRegion={{ 
                    latitude:-7.789969,
                    longitude:110.3639643,
                    latitudeDelta:0.009,
                    longitudeDelta:0.009
                }}
                ></MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
wrapper:{
    ...StyleSheet.absoluteFillObject
},
map:{
    ...StyleSheet.absoluteFillObject
}
})

export default Peta
