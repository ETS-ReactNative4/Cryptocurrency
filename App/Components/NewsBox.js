import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'
import PropTypes from 'prop-types'
import styles from '../Styles/NewsBoxStyles'
import { StackNavigator } from 'react-navigation'

export default class NewsBox extends React.Component {
  // openComponents = () => {
  //     this.props.navigation.navigate('CoinScreen')
  //   }

  static propTypes = {
    onPress: PropTypes.func,
    image: PropTypes.number,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    text: PropTypes.string
  }

  render () {
    const pic = {
      uri:
        'https://www.bitcoin.com/wp-content/uploads/2017/03/what-is-bitcoin-story.jpg'
    }
    return (
      <TouchableOpacity
        style={[styles.container, this.props.style]}
        onPress={this.props.onPress}>
        {/* <TouchableOpacity style={styles.container} onPress={this.props.onPress}> */}
        {/* <Image resizeMode='contain' source={this.props.image} style={styles.image} /> */}
        {/* <Image resizeMode='contain' source={pic} style={styles.image} /> */}
        <Image source={pic} style={styles.image} />
        {/* <Image  source={pic} style={styles.image} /> */}
        <Text style={styles.label}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}
