import React from 'react'
import { TouchableOpacity, Text, Image, View, Button} from 'react-native'
import PropTypes from 'prop-types'
import styles from '../Styles/ChartDetailBoxStyles'
import { StackNavigator } from 'react-navigation'
import { LineChart } from 'react-native-svg-charts'
// import { Metrics, Colors, Fonts, ApplicationStyles } from '../DevScreens/DevTheme/'
import { Metrics, Colors, Fonts, ApplicationStyles } from '../Themes/'
import ChartButton from '../Components/ChartButton'

import Icon from 'react-native-vector-icons/FontAwesome'

class LineChartExample extends React.PureComponent {
  static propTypes = {
    graphData: PropTypes.array
  }
  render () {
    return (
      <View style={styles.currencyText}>
        <LineChart
          style={{
            height: Metrics.screenHeight / 5,
            width: Metrics.screenWidth
          }}
          data={this.props.graphData}
          svg={{ stroke: '#FF6600' }}
          contentInset={{ top: 20, bottom: 20 }}
        />
      </View>
    )
  }
}

export default class ChartDetailBox extends React.Component {

  constructor (props) {
    super(props)
    this.state = {graphData: [],
      historical: 'histoday',

    }
  }
  componentDidMount () {
    this.onPressChangeMonth()
  }

  static propTypes = {

    fsym: PropTypes.string,
    high: PropTypes.number,
    low: PropTypes.number,
    open: PropTypes.number,
    volumeHundredMillion: PropTypes.number,
   
  }

  onPressChangeMonth=function () {
    const this1 = this
    this.setState({historical: 'histoday'})

    const a = function (response) {
      return response.json()
    }
    const asdf = fetch(`https://min-api.cryptocompare.com/data/${this.state.historical}?fsym=${this.props.fsym}&tsym=JPY&limit=30`)
    .then(function (response) {
      return response.json()
    })
      .then(function (myJson) {
        const data = []
        for (let i = 0; i < 30; i++) {
          data.push(myJson.Data[i].close)
        }
        this1.setState({graphData: data})
      })
    return null
  }
  onPressChangeDay=function () {
    const this1 = this
    this.setState({historical: 'histohour'})

    const a = function (response) {
      return response.json()
    }
    const asdf = fetch(`https://min-api.cryptocompare.com/data/${this.state.historical}?fsym=${this.props.fsym}&tsym=JPY&limit=24`)
    .then(function (response) {
      return response.json()
    })
      .then(function (myJson) {
        const data = []
        for (let i = 0; i < 24; i++) {
          data.push(myJson.Data[i].close)
        }
        this1.setState({graphData: data})
      })
    return null
  }
  onPressChangeHour=function () {
    const this1 = this
    this.setState({historical: 'histominute'})

    const a = function (response) {
      return response.json()
    }
    const asdf = fetch(`https://min-api.cryptocompare.com/data/${this.state.historical}?fsym=${this.props.fsym}&tsym=JPY&limit=60`)
    .then(function (response) {
      return response.json()
    })
      .then(function (myJson) {
        const data = []
        for (let i = 0; i < 60; i++) {
          data.push(myJson.Data[i].close)
        }
        this1.setState({graphData: data})
      })
    return null
  }

  render () {

    return (
      <TouchableOpacity
        style={[styles.container, this.props.style]}
        // onPress={this.props.onPress}
        >
        <ChartButton onPress={this.onPressChangeMonth.bind(this)}
          text='一ヶ月' />
        <ChartButton onPress={this.onPressChangeDay.bind(this)}
          text='1日' />
        <ChartButton onPress={this.onPressChangeHour.bind(this)}
          text='１時間' />

        <LineChartExample
          style={{ width: 50, height: 50, backgroundColor: 'skyblue' }}
          graphData={this.state.graphData}
        />
        <View style={styles.currencyText}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginVertical: Metrics.baseMargin,
              marginLeft: Metrics.leftMargin
            }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.text}>高値</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.high}>{this.props.high}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.text}>安値</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.low}>{this.props.low}</Text>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginVertical: Metrics.baseMargin,
              marginLeft: Metrics.leftMargin
            }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.text}>始値</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.text}>{this.props.open}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.yield}>24時間出来高</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.yield}>{this.props.volumeHundredMillion}億JPY</Text>
            </View>
          </View>

        </View>
      </TouchableOpacity>
    )
  }
}
