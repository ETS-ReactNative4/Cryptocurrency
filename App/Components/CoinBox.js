import React from 'react'
import { TouchableOpacity, Text, Image, View } from 'react-native'
import PropTypes from 'prop-types'
import styles from '../Styles/CoinBoxStyles'
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

export default class CoinBox extends React.Component {
  // openComponents = () => {
  //     this.props.navigation.navigate('CoinScreen')
  //   }

  static propTypes = {
    onPress: PropTypes.func,
    image: PropTypes.number,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    name: PropTypes.string,
    text: PropTypes.string,
    startAt: PropTypes.string,
    finishAt: PropTypes.string,
    state: PropTypes.string,
    imageURL: PropTypes.string
  }

  render () {
    return (
      <TouchableOpacity
        // style={[styles.container, this.props.style]}
        style={styles.container}
        onPress={this.props.onPress}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginVertical: Metrics.baseMargin,
            marginLeft: Metrics.leftMargin

          }}>

          <View
            style={{
              flex: 0.5,
              margin: Metrics.baseMargin

            }}>
            {/* <View style={styles.currencyText} /> */}
            <Image source={{
              uri: this.props.imageURL
            }} style={{
              flex: 0.5
            }} />
            {/* <Image source={{
      uri: 'https://pbs.twimg.com/profile_images/947738702700191744/AqwlC_ON_400x400.jpg'
    }} style={{
      flex: 0.5,
    }}/> */}

          </View>
          <View style={styles.coin}>
            <View style={{flex: 1}}>
              <Text style={styles.name}>
                {this.props.name}
              </Text>
            </ View>

            <View style={{flex: 2}}>
              <Text style={styles.text}>
                {this.props.text}
              </Text>
            </ View>

            <View style={{flex: 1}}>
              <Text style={styles.startAt}>
                {this.props.startAt} - {this.props.finishAt}
              </Text>
              <Text style={styles.label}>
              開始日 - 終了日
            </Text>
            </ View>

            <View style={{flex: 1}}>
              <Text style={styles.state}>
                {this.props.state}
              </Text>
              <Text style={styles.label}>
              募集状態
            </Text>
            </ View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}
