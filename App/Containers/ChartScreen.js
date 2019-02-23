//
// Import
// ----------------------------------------------------------------------

// React, ReactNative
import React, { Component } from 'react'
import {
  Platform,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Button
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import SortableListView from 'react-native-sortable-listview'

// React-Navigatior
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'

// Styles
import styles from '../Styles/ChartScreenStyles'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors } from '../../App/Themes'

// Components
import InfoBox from '../Components/InfoBox'

// Screens
import ChartDetailScreen from './ChartDetailScreen'

// Header Bar (Temp)
import HeaderBar from '../Components/HeaderBar'

// ======================================================================
// Variables ============================================================
// ======================================================================

// ======================================================================
// Class ================================================================
// ======================================================================

export default class ChartScreen extends React.Component {


  // navigationOptions Override
  static navigationOptions = () => {
    return ({
      header: <HeaderBar />

    })
  }

  render() {
    // なぜかこのScreenだけ白背景が適応されてないので、とりあえずViewに直接書くけど、あとでStyleファイルごと見直す
    return (
      <View
        style={{ backgroundColor: 'white' }}
      /* style={styles.mainContainer} */
      >


        {/* === Body === */}
        <ContainerListCurrency navigation={this.props.navigation} />

      </View>
    )
  }
} // End of Class ---------------------------------------------

// ======================================================================
// Class ================================================================
// ======================================================================

// 公開前タブの遷移先
class ContainerListCurrency extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currenciesState: [

      ],


    }
  }

  componentDidMount() {
    this.dataArrayOn()
  }

  currenciesDataEx = [
    {
      key: 'BTC',
      name: 'ビットコイン',
    },
    {
      key: 'ETH',
      name: 'イーサリアム',
    },
    {
      key: 'ETC',
      name: 'イーサリアム クラシック',
    },
    {
      key: 'LITE',
      name: 'ライトコイン',
    },
    {
      key: 'BCH',
      name: 'ビットコイン キャッシュ',
    },
    {
      key: 'MONA',
      name: 'モナコイン',
    },
    {
      key: 'LSK',
      name: 'リスク',
    }
  ]
  dataArrayOn = function () {

    const this1 = this

    let currencyArray = []

    for (let i = 0; i < 7; i++) {

      fetch(`https://min-api.cryptocompare.com/data/histoday?fsym=${this1.currenciesDataEx[i].key}&tsym=JPY&limit=1`)
        .then(function (response) {
          return response.json()
        })
        .then(function (myJson) {

          let currenciesData = [
            {
              key: 'BTC',
              name: 'ビットコイン',
            },
            {
              key: 'ETH',
              name: 'イーサリアム',
            },
            {
              key: 'ETC',
              name: 'イーサリアム クラシック',
            },
            {
              key: 'LITE',
              name: 'ライトコイン',
            },
            {
              key: 'BCH',
              name: 'ビットコイン キャッシュ',
            },
            {
              key: 'MONA',
              name: 'モナコイン',
            },
            {
              key: 'LSK',
              name: 'リスク',
            }
          ]

          this1.setState({
            currenciesState: [
              ...this1.state.currenciesState,
         
              {
                key: this1.currenciesDataEx[i].key,
                name: this1.currenciesDataEx[i].name,
                high:myJson.Data[1].high,
                low: myJson.Data[1].low,
                open: myJson.Data[1].open,
                volumefrom: myJson.Data[1].volumefrom,
                volumeto: myJson.Data[1].volumeto,
                close: myJson.Data[1].close,
                volumeHundredMillion : myJson.Data[1].volumeto / 100000000,
                
                //数字の桁数がとても多くなってしまっているので、toFixedかMath.roundを使って桁数を調整するといいと思います。注意点 : toFixedを使うと返り値が文字列になってしまうので注意が必要
                percent: (myJson.Data[1].close - myJson.Data[0].open) / myJson.Data[1].close * 100,
              }
            ]
          })




        })


    }//for文終わり


  }


  render() {


    const myNavigation = this.props.navigation



    // CurrencyListを表示する関数
  

    const displayListCurrencyBlock = this.state.currenciesState.map(currency => (
      

      <InfoBox
        news={currency}
        onPress={() => { myNavigation.navigate('Details', { currencyParams: currency }) }}
        style={[styles.info, style = { marginHorizontal: 10 }]} //これ製品の品質が変わってしまうので、解決策を入れない限りは勝手にコメントアウトしたらダメです。する前に確認を。(製品の品質低下させるコードを刺すのは絶対アカン)
        name={currency.name}
        value={currency.close}
        percent={currency.percent}
        volume={currency.volumeHundredMillion}
        key={currency.key}
      />
      /* [FIX ME]後でStyleファイルごと書き直す */

    ))

    // CurrencyListを縦に並べて表示する
    return (
      <View style={styles.mainContainer}>
        <ScrollView>{displayListCurrencyBlock}</ScrollView>
      </View>
    )
  }
} // End of Class ---------------------------------------------
