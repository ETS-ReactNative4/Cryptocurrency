import React from 'react'
import { TouchableOpacity, Text, Image, View } from 'react-native'
import PropTypes from 'prop-types'
import styles from '../Styles/CurrencyBoxStyles'
import { StackNavigator } from 'react-navigation'
import { LineChart } from 'react-native-svg-charts'
// import { Metrics, Colors, Fonts, ApplicationStyles } from '../DevScreens/DevTheme/'
import { Metrics, Colors, Fonts, ApplicationStyles } from '../Themes/'

import Icon from 'react-native-vector-icons/FontAwesome'

class LineChartExample extends React.PureComponent {
  render () {
    const data = [
      50,
      10,
      40,
      95,
      -4,
      -24,
      85,
      91,
      35,
      53,
      -53,
      24,
      50,
      -20,
      -80
    ]

    return (
      <View style={styles.currencyText}>
        <LineChart
          style={{
            height: 100,
            width: 100
          }}
          data={data}
          svg={{ stroke: '#FF6600' }}
          contentInset={{ top: 20, bottom: 20 }}
        />
      </View>
    )
  }
}

export default class CurrencyBox extends React.Component {
  // openComponents = () => {
  //     this.props.navigation.navigate('CoinScreen')
  //   }

  static propTypes = {
    onPress: PropTypes.func,
    image: PropTypes.number,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    name: PropTypes.string,
    value: PropTypes.number,
    percent: PropTypes.number,
    possess: PropTypes.number
  }

  render () {
    return (
      <TouchableOpacity
        style={[styles.container, this.props.style]}
        onPress={this.props.onPress}>
        {/* <View style={{flex: 1, height: 30,backgroundColor: 'blue', margin: 10}} /> */}
        {/* <LineChartExample />
      <LineChartExample /> */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginVertical: Metrics.baseMargin,
            marginLeft: Metrics.leftMargin
          }}>
          <View style={{ flex: 0.2 }} />

          <View style={styles.currencyText}>
            <View style={{ flex: 0.5 }} />

            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Icon name='copyright' size={15} color={Colors.orange} />
              <Text style={styles.label}>{this.props.name}</Text>
            </View>
            <View style={{ flex: 0.5 }} />
            <View style={{ flex: 1 }}>
              <Text style={styles.value}>{this.props.value} JPY</Text>
            </View>
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1 }}>
              <Text style={styles.percent}>{this.props.percent}% (24h)</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.possess}>{this.props.possess}億円</Text>
              <View style={{ flex: 0.5 }} />
            </View>
          </View>
          <LineChartExample
            style={{ width: 50, height: 50, backgroundColor: 'skyblue' }}
          />
        </View>
        {/* <Image resizeMode='contain' source={this.props.image} style={styles.image} /> */}
        {/* <View style={styles.currencyText}>
      <Text style={styles.label}>{this.props.name}</Text>
      <Text style={styles.label}>{this.props.value}JPY</Text>
      <Text style={styles.label}>{this.props.percent}%</Text>
      <Text style={styles.label}>{this.props.possess}億円</Text>
      </View> */}
      </TouchableOpacity>
    )
  }
}
