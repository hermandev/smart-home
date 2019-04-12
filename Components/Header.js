import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.head}>
                <Text style={styles.textHead}>Aplikasi Kontrol</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    head: {
      backgroundColor:'#5f27cd',
      paddingTop:30,
      paddingBottom:10,
    },
    textHead:{
      color:'#fff',
      textAlign:'center',
      fontWeight: 'bold',
      fontSize: 18,
    },
  
  });
  



