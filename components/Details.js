import React, {Component} from 'react'
import{
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableHighlight,
    TouchableWithoutFeedback,
    ScrollView,
    Dimensions,
    Platform
}from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import IonIcons from 'react-native-vector-icons/Ionicons'
import TabsEpisodes from './TabsEpisodes'
import TextGradient from 'react-native-linear-gradient'

const {width} = Dimensions.get('window')

class Details extends Component{
    render(){
        const {episodes}=this.props.item.details
        const {name} =this.props.item
        const {thumbnail, cast, description, year, creator, numOfEpisodes,season}=this.props.item.details
        return(            
            <ScrollView style={styles.container}>
                <ImageBackground 
                    style={styles.thumbnail}
                    source={{uri:thumbnail}}>                   
                    <View style={styles.buttonPlay}>
                        <TouchableWithoutFeedback onPress={null}>
                        <View>
                            <Icon 
                                style={styles.iconPlay}
                                name="play-circle"
                                size={90}
                                color="white"
                            />
                        </View>
                    </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.nameContainer}>
                        <TextGradient colors={['transparent','#181818','#181818']}>
                            <Text style={styles.text, styles.titleShow}>{name}</Text>
                        </TextGradient>
                    </View>
                  </ImageBackground>  
                  <View style={styles.descriptionContainer}>
                        <View style={styles.subtitle}>
                            <Text style={[styles.text, styles.subtitleText]}>{year}</Text>
                            <Text style={[styles.text, styles.subtitleText]}>{creator}</Text>
                            <Text style={[styles.text, styles.subtitleText]}>{numOfEpisodes}</Text>
                            <Text style={[styles.text, styles.subtitleText]}>{season} Season</Text>
                        </View>
                        <View style={styles.description}>
                            <Text style={[styles.text, styles.light]}>{description}</Text>
                        </View>
                        <View>
                            <Text style={styles.text}>Cast: {cast}</Text>
                            <Text style={styles.text}>Creator: {creator}</Text>
                            <View style={styles.shareListIcons}>
                                <View style={styles.myListIcon}>
                                    <IonIcons 
                                        style={styles.listIcon}
                                        name="md-checkmark"  
                                        color="grey"
                                        size={25}                                  
                                    />
                                    <Text style={styles.text}>My List</Text>
                                </View>  
                                <View style={styles.myShareIcon}>
                                    <Icon 
                                        style={styles.shareIcon}
                                        name="share-alt"
                                        color="grey"
                                        size={25}
                                    />
                                <Text style={styles.text}>Share</Text> 
                                </View>                           
                            </View>
                        </View>
                  </View>
                  <View>
                        <TabsEpisodes data={episodes}/>
                  </View>
            </ScrollView>
        )
    }
}
const styles=StyleSheet.create({
   container:{
       flex:1,
       backgroundColor:'#181818'
   },
   titleShow:{
       fontSize:35,
       paddingLeft:10,
       marginBottom:10,
       color:'white'
   },
   nameContainer:{
       backgroundColor:'transparent'
   },
    thumbnail:{
        width: width,
        height:300
    },
    buttonPlay:{
        justifyContent:'center',
        flex:1,
        alignItems:'center'
    },
    iconPlay:{
        opacity:0.6,
        backgroundColor:'transparent'
    },
    descriptionContainer:{
        paddingHorizontal:20
    },
    subtitle:{
       flexDirection:'row' 
    },
    subtitleText:{
        marginRight:20
    },
    text:{
        color:'#b3b3b3',
        fontSize: 14
    },
    shareListIcons:{
        flexDirection:'row',
        marginVertical: 30
    },
    listIcon:{
        height:25
    },
    shareIcon:{
        height:25
    },
    myListIcon:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginRight:40
    },
    myShareIcon:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    description:{
        marginVertical:10
    },
    light:{
       ...Platform.select({
            ios: {
                fontWeight: '300'
            },
            android: {
                // RN 0.44.0 bug: fontWeight 300 not linked to *Thin or *Light fonts yet...
                fontFamily: 'Poppins-Light'
            }
        })
    }
})
export default Details