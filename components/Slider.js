import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const styles = {
      container: {
      flex: 1
    },
    wrapper: {
    },
    slide: {
      flex: 1,   
      justifyContent: 'center',
      backgroundColor: 'transparent'
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    },
    image: {
    width,
      flex: 1,
      height:180
    }
}

export default class extends Component {
  render () {
    return (        
        <Swiper dotColor="#E1DFDF" activeDotColor="#FFF"  horizontal autoplay>          
            <Image resizeMode='stretch' style={styles.image} source={require('../images/1.jpg')} />          
            <Image resizeMode='stretch' style={styles.image} source={require('../images/2.jpg')} />        
            <Image resizeMode='stretch' style={styles.image} source={require('../images/3.jpg')} />         
        </Swiper>        
    )
  }
}