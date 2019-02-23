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
import styles from '../Styles/NewsScreenStyles'
//cheerioはHTML を投げたら、jQuery like に扱えるようになるライブラリ
const cheerio = require('react-native-cheerio')

// Examples Render Engine

import ScrollableTabView from 'react-native-scrollable-tab-view'

import CoinBox from '../Components/CoinBox'

import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors } from '../../App/Themes'

class CoinScreen extends React.Component {
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
  openTop = () => {
    this.props.navigation.navigate('TopScreen')
  }
  render() {
    const left = (
      <TouchableOpacity
        style={styles.iconView}
        onPress={() => {
          this.openTop()
        }}>
        <Icon name="home" size={40} color={Colors.blue} />
      </TouchableOpacity>
    )

    return (
      // <View style={styles.mainContainer}>
      // <ScrollableTabView>
      //           <BeforePublicPage tabLabel="公開前" />
      //           <ProgressPage tabLabel="進行中" />
      //           <EstablishPage tabLabel="成立" />
      //         </ScrollableTabView>
      //               < MyStatusBar />

      //    </View>

      <View style={[styles.container, styles.mainContainer]}>
        <ScrollableTabView>
          <BeforePublicPage tabLabel="ニュース" />
          <ProgressPage tabLabel="取引所公式" />
          <EstablishPage tabLabel="ICO" />
        </ScrollableTabView>
      </View>
    )
  }
}
class BeforePublicPage extends Component {
  //コンストラクタ
  constructor(props) {
    super(props)
    this.state = {
      currencyList: [
        {
          key: 'asdf',
          name: 'asdasda',
          value: 3456,
          percent: 1234,
          possess: 4567
        },
        {
          key: '1234',
          name: 'ddasda',
          value: 12344,
          percent: 45565,
          possess: 3245
        }
      ]
    }
  }
  //マウントされるときに1度だけ実行される。以降は実行されない。
  componentDidMount() {
    this.getData()
  }
  async getData() {
    const fetchingLandData = await fetch('https://jp.cointelegraph.com/')
    const tableLandData = await fetchingLandData.text()

    // const $ = cheerio.load('<ul id="fruits"> <li class="apple">Apple</li> <li class="orange">Orange</li> <li class="pear">Pear</li> </ul>');
    const $ = cheerio.load(tableLandData)
    // console.log('==============================',$.text())
    // console.log(
    //   '*******************',
    //   $(
    //     // '#post-content > div > div:nth-child(1) > div > div:nth-child(6) > div > div.image > a > p.lead'
    //     '#post-content div div:nth-child(1) div div.image a p.lead'
    //   ).text()
    // )
    const that = this

    $('#post-content div div').each((index, $1) => {
    if(index > 10) return false
      const text = $($1)
        .find('div div.image a p.lead')
        .text()

      // console.log(
      //   ' --------------- ',
      //   index,
      //   $1,
      //   $($1)
      //     .find('div div.image a p.lead')
      //     .text()
      // )
      that.setState({
        currencyList: [
          ...that.state.currencyList,
          {
            key: index,
            name: text,
            value: 12344,
            percent: 45565,
            possess: 3245
          }
        ]
      })
    })
  }

  render() {
    // console.log('****************', this.state)
    const coinColumn = this.state.currencyList.map(currency => (
      <CoinBox
        news={currency}
        onPress={this.openComponents}
        style={styles.currency}
        name={currency.name}
        value={currency.value}
        percent={currency.percent}
        possess={currency.possess}
        key={currency.key}
      />
    ))

    return (
      <View style={styles.mainContainer}>
        <ScrollView>{coinColumn}</ScrollView>
      </View>
    )
  }
}
class ProgressPage extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>This is OfficialFeedPage.</Text>
      </View>
    )
  }
}
class EstablishPage extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>This is ICO_News Page.</Text>
      </View>
    )
  }
}

export default CoinScreen
