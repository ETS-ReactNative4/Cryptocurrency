import React from 'react'
import { TouchableOpacity, Text, Image, View } from 'react-native'
import PropTypes from 'prop-types'
import styles from '../Styles/ChartBoxStyles'
import { StackNavigator } from 'react-navigation'
import { LineChart } from 'react-native-svg-charts'
import { Metrics, Colors, Fonts, ApplicationStyles } from '../Themes/'

import Icon from 'react-native-vector-icons/FontAwesome'

export default class ChartBox extends React.Component {

  static propTypes = {
    onPress: PropTypes.func,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    name: PropTypes.string,
    value: PropTypes.number,
    percent: PropTypes.number,
    difference: PropTypes.number,
    change: PropTypes.number
  }

  render () {
    return (
      <TouchableOpacity
        style={[styles.container, this.props.style]}
        onPress={this.props.onPress}>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginVertical: Metrics.baseMargin,
            marginLeft: Metrics.leftMargin
          }}>
          <View style={styles.currencyText}>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{this.props.name}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={styles.exchange}>Coincheck </Text>
              <Text style={styles.exchange}>02月22日18時48分</Text>
            </View>
          </View>

          <View style={styles.currencyText}>
            <View style={{ flex: 1 }}>
              <Text style={styles.value}>{this.props.value} JPY</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end'
              }}>
              <Text style={styles.change}>{this.props.change} </Text>

              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text style={styles.difference}>{this.props.difference} </Text>
                <Text style={styles.percent}>{this.props.percent}% </Text>

              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}
