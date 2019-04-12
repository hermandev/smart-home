import React, { Component } from 'react'
import { View, Button, BackHandler } from 'react-native'

export class Footer extends Component {
    handleExit = () => {
        BackHandler.exitApp()
    }
    render() {
        return (
            <View>
                <Button title="Keluar" onPress={this.handleExit}></Button>
            </View>
        )
    }
}

export default Footer
