import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Platform
} from 'react-native'

import {TabViewAnimated, TabBar,TabViewPagerPan,TabViewPagerScroll } from 'react-native-tab-view'

import Episodes from './Episodes'
import Trailers from './Trailers'

class TabsEpisodes extends Component {
  constructor(props){
    super(props)
    this.state = {
      index: 0,
      routes: [
        {key: '1', title: 'Episodes'},
        {key: '2', title: 'Trailers & More'}
      ]
    }
  }

  _renderHeader(props){
    return <TabBar {...props} />
  }

  _renderScene({route}){
    switch(route.key){
      case '1':
        return <Episodes episodes={this.props.data}/>
      case '2':
        return <Trailers />
      default:
        return null
    }
  }

  _renderPager(props){
    return   <TabViewPagerScroll {...props} />
  }


  _handleChangeTab(index){
    this.setState({index})
  }

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene.bind(this)}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab.bind(this)}
        renderPager={this._renderPager}
      />
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopWidth: 2,
        borderColor: 'black'
    },
})

export default TabsEpisodes