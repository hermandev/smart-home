import React, { Component } from 'react'
import { View, StyleSheet, Image, Button } from 'react-native';
import LampOne from './LampOne';
import LampTwo from './LampTwo';
import LampTrhee from './LampTrhee';
import LampFour from './LampFour';
import LampFive from './LampFive';
import LampSix from './LampSix';
import LampSeven from './LampSeven';
import LampEight from './LampEight';
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAcwfzn8kQC-RYhj1j6a_XFcVcVTaDItBU",
  authDomain: "smart-home-9aeec.firebaseapp.com",
  databaseURL: "https://smart-home-9aeec.firebaseio.com",
  projectId: "smart-home-9aeec",
  storageBucket: "smart-home-9aeec.appspot.com",
  messagingSenderId: "723860355626"
};
firebase.initializeApp(config);



export class Lampu extends Component {
  constructor(props) {
    super(props)
    this.state ={
      lamp1:false,
      lamp1:false,
      lamp2:false,
      lamp3:false,
      lamp4:false,
      lamp5:false,
      lamp6:false,
      lamp7:false,
      lamp8:false,
    }

    this.data = firebase.database();
    setTimeout(this.getData, 1000)
  }

  componentDidMount = () => {
    this.getData()
  }

  componentWillUnmount = () => {
    this.getData()
  }

  getData = () => {
    this.data.ref('lamp1').on('value', (data) => {
      this.setState({ lamp1:data.val() === 1 ? true:false })
    })
    this.data.ref('lamp2').on('value', (data) => {
      this.setState({ lamp2:data.val() === 1 ? true:false })
    })
    this.data.ref('lamp3').on('value', (data) => {
      this.setState({ lamp3:data.val() === 1 ? true:false })
    })
    this.data.ref('lamp4').on('value', (data) => {
      this.setState({ lamp4:data.val() === 1 ? true:false })
    })
    this.data.ref('lamp5').on('value', (data) => {
      this.setState({ lamp5:data.val() === 1 ? true:false })
    })
    this.data.ref('lamp6').on('value', (data) => {
      this.setState({ lamp6:data.val() === 1 ? true:false })
    })
    this.data.ref('lamp7').on('value', (data) => {
      this.setState({ lamp7:data.val() === 1 ? true:false })
    })
    this.data.ref('lamp8').on('value', (data) => {
      this.setState({ lamp8:data.val() === 1 ? true:false })
    })
  }

  OnOff = (nama, saklar) => {
    this.data.ref(nama).set(saklar)
  }


  render() {
    const { lamp1, lamp2, lamp3, lamp4, lamp5, lamp6, lamp7, lamp8 } = this.state
    return (
      <View style={styles.lampu}>
        <View style={styles.boxLamp}>
          <LampOne lampu={lamp1} btnLampu={this.OnOff} />
          <LampTwo lampu={lamp2} btnLampu={this.OnOff}/>
        </View>
        <View style={styles.boxLamp}>
          <LampTrhee lampu={lamp3} btnLampu={this.OnOff}/>
          <LampFour lampu={lamp4} btnLampu={this.OnOff}/>
        </View>
        <View style={styles.boxLamp}>
          <LampFive lampu={lamp5} btnLampu={this.OnOff}/>
          <LampSix lampu={lamp6} btnLampu={this.OnOff}/>
        </View>
        <View style={styles.boxLamp}>
          <LampSeven lampu={lamp7} btnLampu={this.OnOff}/>
          <LampEight lampu={lamp8} btnLampu={this.OnOff}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  lampu: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 40,
    marginRight: 40,
  },
  boxLamp: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default Lampu
