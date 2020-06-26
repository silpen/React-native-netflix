import React, {Component} from 'react'
import{
    text,
    View,
    Animated,
    StyleSheet
}from 'react-native'

import VideoPlayer from 'react-native-video-controls'
import Orientation from 'react-native-orientation'

class ViderPlayerView extends Component{
    constructor(props){
        super(props)
        this.state={
        screen: Orientation.lockToLandscape()
        }   
    }
  
    render(){
        return(
            <View style={styles.container}>
                <VideoPlayer 
                    source={require('../videos/video.mp4')}                
                    title={"Designated Survivor"}                   
                    onBack={()=>null}
                />
            </View>
        )
    }
}
const styles= StyleSheet.create({
    container:{
      flex:1  
    }
})
export default ViderPlayerView