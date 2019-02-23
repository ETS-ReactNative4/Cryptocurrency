import React from 'react'
import { TouchableOpacity, Text, Image, View } from 'react-native'
import PropTypes from 'prop-types'
import styles from '../Styles/InfoBoxStyles'
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

export default class InfoBox extends React.Component {
  // openComponents = () => {
  //     this.props.navigation.navigate('CoinScreen')
  //   }

  static propTypes = {
    onPress: PropTypes.func,
    image: PropTypes.number,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]), // Invalid prop 'style' supplyied to 'InfoBox'とエラーが起きる
    name: PropTypes.string,
    value: PropTypes.number,
    percent: PropTypes.number,
    volume: PropTypes.number
  }

  onHeartPressed (itemId) {
    // if (this.props.favData.filter(item => item.id === itemId).length !== 0) {
    //   this.props.removeFavorite(this.props.item.id)
    // } else {
    //   this.props.addFavorite(this.props.item)
    // }
  }

  render () {
    return (
      <TouchableOpacity
        style={[styles.container, this.props.style]}
        onPress={this.props.onPress}>
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
              <Text style={styles.volume}>{this.props.volume}億円</Text>
              <View style={{ flex: 0.5 }} />
            </View>
          </View>

          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'flex-start'
            }}
            onPress={this.onHeartPressed.bind(this)}>
            <View style={styles.iconView}>
              <Icon
                name='star'
                size={Metrics.icons.tiny}
                color={Colors.charcoal}
              />
              {/*
                {this.props.favData.filter(favDataItem => favDataItem.id === id)
                  .length !== 0 ? (
                  <Icon
                    name="heart"
                    size={Metrics.icons.tiny}
                    color={Colors.fire}
                  />
                ) : (
                  <Icon
                    name="heart-o"
                    size={Metrics.icons.tiny}
                    color={Colors.charcoal}
                  />
                )} */}
            </View>
          </TouchableOpacity>
        </View>
        {/* <Image resizeMode='contain' source={this.props.image} style={styles.image} /> */}
        {/* <View style={styles.currencyText}>
      <Text style={styles.label}>{this.props.name}</Text>
      <Text style={styles.label}>{this.props.value}JPY</Text>
      <Text style={styles.label}>{this.props.percent}%</Text>
      <Text style={styles.label}>{this.props.volume}億円</Text>
      </View> */}
      </TouchableOpacity>
    )
  }
}
