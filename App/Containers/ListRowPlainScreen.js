import SortableListView from 'react-native-sortable-listview'
import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

let data = {
  hello: { text: 'world' },
  how: { text: 'are you' },
  test: { text: 123 },
  this: { text: 'is' },
  a: { text: 'a' },
  real: { text: 'real' },
  drag: { text: 'drag and drop' },
  bb: { text: 'bb' },
  cc: { text: 'cc' },
  dd: { text: 'dd' },
  ee: { text: 'ee' },
  ff: { text: 'ff' },
  gg: { text: 'gg' },
  hh: { text: 'hh' },
  ii: { text: 'ii' },
  jj: { text: 'jj' },
  kk: { text: 'kk' }
}

let order = Object.keys(data) // Array of keys

class RowComponent extends React.Component {
  render () {
    return (
      <TouchableHighlight
        underlayColor={'#eee'}
        style={{
          padding: 25,
          backgroundColor: '#F8F8F8',
          borderBottomWidth: 1,
          borderColor: '#eee'
        }}
        {...this.props.sortHandlers}
      >
        <Text>{this.props.data.text}</Text>
      </TouchableHighlight>
    )
  }
}

class MyComponent extends React.Component {
  render () {
    return (
      <SortableListView
        style={{ flex: 1 }}
        data={data}
        order={order}
        onRowMoved={e => {
          order.splice(e.to, 0, order.splice(e.from, 1)[0])
          this.forceUpdate()
        }}
        renderRow={row => <RowComponent data={row} />}
      />
    )
  }
}

export default MyComponent

// import React from 'react'
// import {
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
//   View,
//   Text,
//   Button
// } from 'react-native'
// import { StackNavigator } from 'react-navigation'
// import { TabNavigator } from 'react-navigation'
// // import { Entypo } from '@expo/vector-icons';
// import Icon from 'react-native-vector-icons/FontAwesome'
// import { Colors } from '../../App/Themes'

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Details!</Text>
//       </View>
//     )
//   }
// }

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         {/* other code from before here */}
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     )
//   }
// }

// class SettingsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         {/* other code from before here */}
//         <Button
//           title="Go to Details this settings"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     )
//   }
// }

// const HomeStack = StackNavigator({
//   Home: { screen: HomeScreen },
//   Details: { screen: DetailsScreen }
// })

// const SettingsStack = StackNavigator({
//   Settings: { screen: SettingsScreen },
//   Details: { screen: DetailsScreen }
// })

// export default TabNavigator(
//   {
//     Home: { screen: HomeStack },
//     Settings: { screen: SettingsStack }
//   },
//   {
//     /* Other configuration remains unchanged */
//   }
// )

// // /* サンプルデータ */
// // const mathematics = [
// //   { key: 'geo', title: 'Geometry', detail: '幾何学（きかがく）は、図形や空間の性質について研究する数学の分野である。イエズス会マテオ・リッチによるgeometriaの中国語訳である。以前はgeometria の冒頭のgeo-を音訳したものであるという説が広く流布していたが、近年の研究により否定されている。 もともと測量の必要上からエジプトで生まれたものだが、人間に認識できる図形に関する様々な性質を研究する数学の分野としてとくに古代ギリシャにて独自に発達し、これらのおもな成果はB.C.300年ごろユークリッドによってユークリッド原論にまとめられた。その後中世以降のヨーロッパにてユークリッド幾何学を発端とする様々な幾何学が登場することとなる。' },
// //   { key: 'ana', title: 'Analysis', detail: '解析学（かいせきがく）とは、極限や収束といった概念を扱う数学の分野である。代数学、幾何学と合わせ数学の三大分野をなす。数学用語としての解析学は要素還元主義とは異なっており、初等的には微積分や級数などを用いて関数の変化量などの性質を調べる分野と言われることが多い。これは解析学がもともとテイラー級数やフーリエ級数などを用いて関数の性質を研究していたことに由来する。' },
// //   { key: 'alg', title: 'Algebra', detail: '代数学（だいすうがく）は数学の一分野で、「代数」 の名の通り数の代わりに文字を用いて方程式の解法を研究する学問として始まった。しかし19世紀以降の現代数学においては、ヒルベルトの公理主義やブルバキスタイルに見られるように、代数学はその範囲を大きく広げているため、「数の代わりに文字を用いる数学」や「方程式の解法の学問」という理解の仕方は必ずしも適当ではない。現代数学においては、方程式の研究は方程式論（代数方程式論）という代数学の古典的一分野として捉えられている。現在は代数学と言えば以下の抽象代数学をさすのが普通である。' },
// // ];

// // /* スタイル */
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     paddingHorizontal: 16,
// //   },
// //   heading: {
// //     fontSize: 24,
// //     color: 'rgba(14, 13, 13, .38)',
// //   },
// //   paragraph: {
// //     fontSize: 18,
// //     color: '#737373',
// //   },
// //   listItem: {
// //     borderBottomWidth: 1,
// //     borderBottomColor: 'rgba(14, 13, 13, .38)',
// //     marginVertical: 12,
// //   },
// // });

// // /*
// //  * データのタイトルをリスト表示するコンポーネント
// //  * ナビゲーターで描画すると引数(props)に`navigation`、`screenProps`が渡される
// //  */
// // const ListScreen = ({ navigation, screenProps }) => (
// //   <FlatList
// //     data={screenProps.mathematics}
// //     renderItem={({ item }) => (
// //       <TouchableOpacity
// //         key={item.key}
// //         style={styles.listItem}
// //         /* タイトルが押されたら詳細画面にナビゲート、`item`を引数として渡している */
// //         onPress={() => navigation.navigate('Detail', item)}
// //       >
// //         <Text style={styles.heading}>{item.title}</Text>
// //       </TouchableOpacity>
// //     )}
// //     contentContainerStyle={styles.container}
// //   />
// // );
// // /* ナビゲーションの見た目や挙動に関する設定 */
// // ListScreen.navigationOptions = () => ({
// //   /* 画面ヘッダーに表示するタイトルを'Mathematics'にする */
// //   title: 'Mathematics',
// // });

// // /*
// //  * データの詳細を表示するコンポーネント
// //  */
// // const DetailScreen = ({ navigation }) => (
// //   <View style={styles.container}>
// //     {/* `navigation.state.params`からリストで渡した`item`の中身が取れる */}
// //     <Text style={[styles.heading, { marginBottom: 24 }]}>{navigation.state.params.title}</Text>
// //     <Text style={styles.paragraph}>{navigation.state.params.detail}</Text>
// //   </View>
// // );
// // DetailScreen.navigationOptions = {
// //   title: 'Detail',
// // };

// // /*
// //  * StackNavigatorを作成
// //  * 第一引数は登録する画面(Screen)情報を設定
// //  * 第二引数はオプション、初期表示画面を設定
// //  */
// // const Stack = StackNavigator({
// //   Detail: { screen: DetailScreen },
// //   List: { screen: ListScreen },
// // }, {
// //   initialRouteName: 'List',
// // });
// // /*
// //  * StackNavigatorをラップするコンポーネント
// //  * screenPropsにより親からもらったpropsを子にそのまま流している(手抜き)
// //  * mathematicsリストをAppコンポーネントに持たせているため、
// //  * ここでListScreenに渡している。
// //  */
// // const MathematicsList = ({ screenProps }) => (
// //   <Stack screenProps={screenProps} />
// // );
// // /*
// //  * タブアイコンの設定
// //  * tintColorはTabNavigatorのオプションで設定していて、
// //  * active、inactiveに応じて異なる値が送られてくる
// //  */
// // MathematicsList.navigationOptions = {

// //   tabBarIcon: ({ tintColor }) => <Icon size={24} name="list" color={Colors.blue} />,
// // };

// // /*
// //  * 項目追加画面を作成
// //  * 現在はタブアイコンの設定のみのモック
// //  */
// // const AddMathItemScreen = () => (
// //   <View style={styles.container}>
// //     <Text style={styles.paragraph}>This is AddMathItemScreen</Text>
// //   </View>
// // );
// // AddMathItemScreen.navigationOptions = {
// //   tabBarIcon: ({ tintColor }) => <Icon size={24} name="home" color={Colors.blue} />,
// // };

// // /*
// //  * TabNavigatorを作成
// //  * StackNavigatorと基本は同じ
// //  * 第二引数で画面下タブに表示されるアイコン色とラベル非表示を設定
// //  */
// // const Tab = TabNavigator({
// //   List: { screen: MathematicsList },
// //   AddItem: { screen: AddMathItemScreen },
// // }, {
// //   tabBarOptions: {
// //     activeTintColor: '#037aff',
// //     inactiveTintColor: '#737373',
// //     showLabel: false,
// //   },
// // });
// // /*
// //  * リストを保持しているAppコンテナコンポーネント
// //  * 今の所stateを持っている以外はTabNavigatorをラップしているだけ
// //  */
// // export default class App extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       mathematics,
// //     };
// //   }

// //   render() {
// //     /* screenPropsで各子供にmathematicsを渡している */
// //     return <Tab screenProps={{ mathematics: this.state.mathematics }} />;
// //   }
// // }
