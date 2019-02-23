// An All Components Screen is a great way to dev and quick-test components
import React, { Component } from 'react'
import {
  Platform,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
import styles from '../Styles/ChartDetailScreenStyles'

import PropTypes from 'prop-types'

// Examples Render Engine

import ScrollableTabView from 'react-native-scrollable-tab-view'

import ChartDetailBox from '../Components/ChartDetailBox'
import ChartBox from '../Components/ChartBox'

import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors } from '../../App/Themes'




export default class ChartDetailScreen extends React.Component {

  // navigationOptions Override
  static navigationOptions = () => {
    return ({
      headerTitle: '価格情報',
      headerTitleStyle: {},
      headerStyle: {}

    })
  }

/* Unused =====
  renderAndroidWarning() {
    if (Platform.OS === 'android') {
      return (
        <Text style={styles.sectionText}>
          Android only: Animations are slow? You are probably running the app in
          debug mode. It will run more smoothly once your app will be built.
        </Text>
      )
    }
    return null
  }
*/

  openTop = () => {
    this.props.navigation.navigate('TopScreen')
  }

  render () {
    console.log("this.props.navigation",this.props.navigation.state.params.currencyParams)
    const currencyObject = this.props.navigation.state.params.currencyParams;

    
    const left = (
      <TouchableOpacity
        style={styles.iconView}
        onPress={() => {
          this.openTop()
        }}>
        <Icon name='home' size={40} color={Colors.blue} />
      </TouchableOpacity>
    )

    function s (a = null) {
      return b
    }

    const valueSquare = valueData => {
      return (
        <ChartBox
          name={valueData.name}

          value={valueData.close}
          percent={valueData.percent }
          //ここ直す必要あるかも
          difference={valueData.open - valueData.close}
        />
     
      )
    }

            return (

              <View style={[styles.container, styles.mainContainer]}>
                {valueSquare(currencyObject)}
                <ChartDetailBox fsym={currencyObject.key} high={currencyObject.high} low={currencyObject.low} open={currencyObject.open} volumeHundredMillion={currencyObject.volumeHundredMillion} />
              </View>

            )
          }}
     