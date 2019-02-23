//
// Import
// ----------------------------------------------------------------------
// React, ReactNative
import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'

// React-Navigatior
//StackNavigatorで画面遷移した時に、propsを渡したいのでcreateStackNavigatorで試してみた
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
// import Chart from 'react-native-chart';

// GraphQL
import { Query, ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'

// Components
import NewsBox from '../Components/NewsBox'
// import CurrencyBox from './CurrencyBox'
import CurrencyBox from '../Components/CurrencyBox'
import HeaderBar from '../Components/HeaderBar'

// Screens
import ICOScreen from './ICOScreen'
import ChartScreen from './ChartScreen'
import ChartDetailScreen from './ChartDetailScreen'
import NewsScreen from './NewsScreen'

// Styles
import styles from '../Styles/TopScreenStyles'

// Assets and Themes

// ======================================================================
// Variables ============================================================
// ======================================================================

// NavigationOptions
const navOptionGlobal = {
  header: <HeaderBar />
}

// QUERY FORMAT
const POST_QUERY = gql`
  query PostQuery {
    posts {
      id
      text
      title
    }
  }
`

// JPCX Server Endpoint
const client = new ApolloClient({ uri: 'http://localhost:4000' })

// ニュースのテスト用JSON
const newsList = [
  {
    key: 'key1',
    title: 'ニュースタイトル1',
    image: '',
    link: ''
  },
  {
    key: 'key2',
    title: 'ニュースタイトル2_strstrstrstrstrstrstrstrstrstrstrstrstrstr',
    image: '',
    link: ''
  },
  {
    key: 'key3',
    title: 'ニュースタイトル3',
    image: '',
    link: ''
  },
  {
    key: 'key4',
    title: 'ニュースタイトル4',
    image: '',
    link: ''
  },
  {
    key: 'key5',
    title: 'ニュースタイトル5',
    image: '',
    link: ''
  }
]

// お気に入り一覧のテスト用JSON
const currencyList = [
  {
    key: 'key1',
    name: 'ビットコイン',
    value: 1234567,
    percent: 12.34,
    possess: 1111
  },
  {
    key: 'key2',
    name: 'イーサリアム',
    value: 70000,
    percent: 5.0,
    possess: 2222
  }
]

// ======================================================================
// Class ================================================================
// ======================================================================

class TopScreen extends React.Component {
  // Callbacks これいま使ってないぽい？？？ ======================================================
  openComponents = () => {
    this.props.navigation.navigate('ListRowPlainScreen')
  }

  openTop = () => {
    this.props.navigation.navigate('TopScreen')
  }
  openChartDetail = () => {
    this.props.navigation.navigate('ChartDetailScreen')
  }

  // Unuesed ======================================================
  render1() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.mainContainer}>
          {/* <View style={[styles.mainContainer, {backgroundColor: 'green'}]}> */}
          {/* <View> */}

          <Query query={POST_QUERY}>
            {({ data, loading, error, refetch }) => {
              console.log('data ======== ', loading, data)
              if (loading) {
                return (
                  <View>
                    <Text>Loading ...</Text>
                  </View>
                )
              }

              if (error) {
                return (
                  <View>
                    <Text>An unexpected error occured.</Text>
                  </View>
                )
              }

              return (
                <View>
                  <Text>Post</Text>
                  {data.post &&
                    data.post.map(post => <Text key={post.id}>{post.id}</Text>)}
                  {this.props.children}
                </View>
              )
            }}
          </Query>
        </View>
      </ApolloProvider>
    )
  }
  // ======================================================

  render() {
    // 上部：ニュースの定義
    const newsRow = newsList.map(news => (
      <NewsBox
        news={news}
        onPress={this.openComponents}
        style={styles.news}
        text={news.title}
        key={news.key}
      />
    ))

    // 下部：お気に入りの定義
    const currencyColumn = currencyList.map(currency => (
      <CurrencyBox
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

    // 描画
    return (
      <ApolloProvider client={client}>
        <View style={styles.mainContainer}>
          {/* <View style={[styles.mainContainer, {backgroundColor: 'green'}]}> */}
          {/* <View> */}

          {/* === ヘッダーの表示 === */}
          {/* <HeaderBar/> */}

          {/* <SvgExample />
          <LineChartExample /> */}

          {/* <Image source={Assets.background} style={styles.backgroundImage} resizeMode='stretch' /> */}

          {/* === ボディの表示 === */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            bounces={false}
            style={styles.container}>
            <Text style={styles.sectionText}>最新ニュース</Text>
            {/* <SimpleChart /> */}
            <ScrollView horizontal style={{ flex: 1 }}>
              <Query query={POST_QUERY}>
                {({ data, loading, error, refetch }) => {
                  console.log('data ======== ', loading, data)
                  if (loading) {
                    return (
                      <View>
                        <Text>読み込み中</Text>
                      </View>
                    )
                  }

                  if (error) {
                    return (
                      <View>
                        <Text>読み込みエラー</Text>
                      </View>
                    )
                  }

                  // console.log("{this.props.children}",this.props.children);
                  return (
                    <View>
                      <Text>Post</Text>
                      {data.post &&
                        data.post.map(post => (
                          <Text key={post.id}>{post.id}</Text>
                        ))}
                        {/* chilerenってなんだっけ */}
                      {this.props.children}
                    </View>
                  )
                }}
              </Query>
              {newsRow}
            </ScrollView>

            <Text style={styles.sectionText}>お気に入り</Text>
            {currencyColumn}
          </ScrollView>
        </View>
      </ApolloProvider>
    )
  }
} // End of Class ---------------------------------------------

//
// Navigator
// ----------------------------------------------------------------------

// 制御に統一性を持たせるため、タブ(TabNavigator)で選択される全ScreenはStackNavigatorに入れる

// チャート(Stack)の配下ページ ----------------------------------------------------------------------
const ChartRoutes = StackNavigator(
  // === Resister Screens for Stack ===
  // Argument JSON 1
  // スタック(ツリー表示)するscreenを登録 ( Stack:ツリー表示 , Tab:並行表示 の意味 )
  {
    Home: { screen: ChartScreen },
    Details: { screen: ChartDetailScreen }
  },
  // Argument JSON 2
  // 最初に表示するネスト位置を設定
  {
    initialRouteName: 'Home',
    headerMode: 'screen',

    navigationOptions: {
      // header : ({goBack}) => {
      // left :
      // <HeaderBar/>,
      // }
    }
    // [FIX ME]グローバルにHeaderBarを定義すると、バックボタンが消えてしまうのでコメントアウト
    // でもChartDetailScreenで今度はHeaderがなくなっちゃうからなんとかしないと。。。。。
    // ChartScreen と Chart Detail Screen それぞれで navigationOptionsをオーバーライドする方針にしたけど、
    // あとで直したい
  }
)

// トップ(Stack)の配下ページ ----------------------------------------------------------------------
const TopRoutes = StackNavigator(
  // === Resister Screens for Stack ===
  // Argument JSON 1
  // スタック(ツリー表示)するscreenを登録 ( Stack:ツリー表示 , Tab:並行表示 の意味 )
  {
    Home: { screen: TopScreen }
  },
  // Argument JSON 2
  // 最初に表示するネスト位置を設定
  {
    initialRouteName: 'Home',
    headerMode: 'screen',
    navigationOptions: navOptionGlobal
  }
)

// ニュース(Stack)の配下ページ ----------------------------------------------------------------------
const NewsRoutes = StackNavigator(
  // === Resister Screens for Stack ===
  // Argument JSON 1
  // スタック(ツリー表示)するscreenを登録 ( Stack:ツリー表示 , Tab:並行表示 の意味 )
  {
    Home: { screen: NewsScreen }
  },
  // Argument JSON 2
  // 最初に表示するネスト位置を設定
  {
    initialRouteName: 'Home',
    headerMode: 'screen',
    navigationOptions: navOptionGlobal
  }
)

// ICO(Stack)の配下ページ ----------------------------------------------------------------------
const ICORoutes = StackNavigator(
  // === Resister Screens for Stack ===
  // Argument JSON 1
  // スタック(ツリー表示)するscreenを登録 ( Stack:ツリー表示 , Tab:並行表示 の意味 )
  {
    Home: { screen: ICOScreen }
  },
  // Argument JSON 2
  // 最初に表示するネスト位置を設定
  {
    initialRouteName: 'Home',
    headerMode: 'screen',
    navigationOptions: navOptionGlobal
  }
)

// TabNavigatorをreact-navigationから取得して、オーバーライドしてエクスポート
export default TabNavigator(
  // === Resister Screens for Tab ===
  // TabNavigatorはRootContainer.jsのRootReduxNavigationが見つけ次第 表示するので、呼び出し不要
  // Navigatorとつく物を自動で見つけて表示している？？？
  // App.jsで呼び出すものかと思っていた…わからん！
  {
    // クラスをスクリーンとして登録(タブのアイコンをタップすると指定したスクリーンがnaviigate(screen)として呼び出される)
    ホーム: { screen: TopRoutes },
    チャート: { screen: ChartRoutes }, // [FIX ME] ChartScreenStack(StackNavigator)を使うと、ChartScreenStackに移動した時にページ上部にバックボタン用が作られてしまう→Navigation側でヘッダーを作るように変更
    ニュース: { screen: NewsRoutes },
    ICO情報: { screen: ICORoutes }
    // ListRowPlainScreen  : { screen: ListRowPlainScreen          } //Chatページ(現状はシンプルリストページ)はリリース時にはオミットするのでタブメニューから除外
  },

  // === Setting TabNavigatior ===
  {
    // TabNavigator Setting JSON Property 1
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, color }) => {
        // なぜかrouteNameに {}をつけないと上手く型変換されない。navigation.stateで直接 if を取るのも出来ない
        const { routeName } = navigation.state
        if (routeName === 'ホーム') {
          return (
            <Image
              source={require('../Images/Icons/icon_home.png')}
              style={{ width: 30, height: 30, tintColor: 'white' }} // [FIX ME]なぜか引数のcolorを使ってtintColor:colorとすると、tintColorに値が正しく代入されない…。。。
            />
          )
        } else if (routeName === 'チャート') {
          return (
            <Image
              source={require('../Images/Icons/icon_chart.png')}
              style={{ width: 30, height: 30, tintColor: 'white' }}
            />
          )
        } else if (routeName === 'ニュース') {
          return (
            <Image
              source={require('../Images/Icons/icon_news.png')}
              style={{ width: 30, height: 30, tintColor: 'white' }}
            />
          )
        } else if (routeName === 'ICO情報') {
          return (
            <Image
              source={require('../Images/Icons/icon_ico.png')}
              style={{ width: 30, height: 30, tintColor: 'white' }}
            />
          )
        } else if (routeName === 'ListRowPlainScreen') {
          return (
            <Image
              source={require('../Images/Icons/icon_chat.png')}
              style={{ width: 30, height: 30, tintColor: 'white' }}
            />
          )
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        // return <Icon name={iconName} size={40} color={tintColor} />
        // return <Icon name={iconName} size={30} color={tintColor} />
      }
    }),

    // TabNavigator Setting JSON Property 2
    // メニュータブのスタイルを管理するJSON
    tabBarOptions: {
      // タブメニューのactive/inactive時のボタン(アイコン/フォント)の色を設定
      activeTintColor: 'yellow',
      inactiveTintColor: 'white',
      // ラベル名を表示するかどうかを設定
      showLabel: true,

      // タブメニューの背景・高さを設定
      style: {
        backgroundColor: '#fe5a4f',
        height: 60
      }
    },

    // TabNavigator Setting JSON Property others
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true, // 中村のパソコンでは動きが悪いためfalseからtrueにしたが実装はfalseで
    swipeEnabled: false
  }
)
