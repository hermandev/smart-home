import React, { Component } from 'react'
import { Image, StyleSheet, TouchableOpacity, Text } from 'react-native'

export class LampOne extends Component {
    constructor(props) {
        super(props)
        this.angka = 0
    }
    
    render() {
        const { lampu, btnLampu } = this.props
        return (
            <TouchableOpacity style={styles.container} onPress={() => lampu ? btnLampu('lamp1', 0):btnLampu('lamp1',1)}>
                <Image
                    style={styles.lamp_style}
                    source={lampu ? require('./img/lamp_on.png') : require('./img/lamp_off.png')}
                />
                <Text style={styles.text_lamp}>Lampu 1</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin:10
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

export default LampOne