import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Animated,
  ScrollView
} from 'react-native'
import SideMenu from 'react-native-side-menu'
import List from './src/components/List'
import Slider from './src/components/Slider'
import Header from './src/components/Header'
import Menu from './src/components/Menu'
var { height,width } = Dimensions.get('window')
 
var box_count = 3
var box_height = height / box_count

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      isOpen:false      
    }    
  }
  toggle(){
      this.setState({
        isOpen:!this.state.isOpen
        
      })
  }
  updateMenu(isOpen){
    this.setState({isOpen})    
  }
  
  render(){  
    return(      
        <SideMenu
           menu={ <Menu/>}
           isOpen={this.state.isOpen}
           onChange={(isOpen) => this.updateMenu(isOpen)}>       
          <ScrollView style={[{flex: 1}, styles.container]}> 
              <View style={styles.header}>
                <Header navigator={this.props.navigator} toggle={this.toggle.bind(this)} />
              </View>
              <View style={styles.box}>
                <Slider  />
              </View>
              <View style={styles.box2}>
                <List  navigator={this.props.navigator}/>
              </View>         
          </ScrollView>        
        </SideMenu>         
    )
  }
}

 const styles=StyleSheet.create({
  container:{
    backgroundColor:'black'
  },
   box: {
    height: box_height,
    flex: 2 //set this one
  },
  header:{
    flex: 0.5
  },
  box2:{
    flex:4
  } 
}) 

export default App