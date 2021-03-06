import React, { Component } from 'react'
import { View, Image, StyleSheet,TouchableOpacity, Text  } from 'react-native'

export class LampSix extends Component {
    render() {
        const { lampu, btnLampu } = this.props
        return (
            <TouchableOpacity style={styles.container} onPress={() => lampu ? btnLampu('lamp6', 0):btnLampu('lamp6',1)}>
                <Image
                    style={styles.lamp_style}
                    source={lampu ? require('./img/lamp_on.png'):require('./img/lamp_off.png')}
                />
                <Text style={styles.text_lamp}>Lampu 6</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    lamp_style: {
        width: 100,
        height: 150,
    },
    text_lamp: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 15,
    }
})

export default LampSix