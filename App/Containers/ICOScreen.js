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
// import { Images } from './DevTheme'
import styles from '../Styles/ICOScreenStyles'

// Examples Render Engine

import ScrollableTabView from 'react-native-scrollable-tab-view'

// import CoinBox from './CoinBox'
import CoinBox from '../Components/CoinBox'

import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors } from '../../App/Themes'

import {graphql, Query, ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'

const COIN_QUERY = gql`
  query FeedQuery {
    coins {
      id
      name
      text
      startAt
      finishAt
      imageURL
    }
  }
`

const client = new ApolloClient({ uri: 'http://localhost:4000' })

class CoinScreen extends React.Component {
  renderAndroidWarning () {
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

  render () {
    const left = (
      <TouchableOpacity
        style={styles.iconView}
        onPress={() => {
          this.openTop()
        }}>
        <Icon name='home' size={40} color={Colors.blue} />
      </TouchableOpacity>
    )

    const valueSquare = coinData => {
      return (
        <CoinBox
          name={coinData.name}
          text={coinData.text}
          startAt={coinData.startAt}
          finishAt={coinData.finishAt}
          state={coinData.state}
          imageURL={coinData.imageURL}
        />
      )
    }

    return (

      <ApolloProvider client={client}>
        {/* <View style={[styles.mainContainer, {backgroundColor: 'green'}]}> */}
        {/* <View> */}

        <Query query={COIN_QUERY}>
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

            const valueData1 = {
              name: data.coins[0].name,
              text: data.coins[0].text,
              startAt: data.coins[0].startAt,
              finishAt: data.coins[0].finishAt,
              state: data.coins[0].state,
              imageURL: data.coins[0].imageURL
            }

            return (

              <View style={[styles.container, styles.mainContainer]}>
                {/* {valueBox(valueDataList[0])} */}
                {/* {valueSquare({...valueData, value : data.coins[0].id})} */}

                <View style={styles.mainContainer}>
                  <ScrollView>{valueSquare(valueData1)}</ScrollView>
                </View>

                {/* {valueBox} */}

              </View>

            )
          }}
        </Query>

      </ApolloProvider>

      // <View style={[styles.container, styles.mainContainer]}>
      //   <HeaderBar leftButton={left} title="JPCX" />
      //   <ScrollableTabView>
      //     <BeforePublicPage tabLabel="公開前" />
      //     <ProgressPage tabLabel="進行中" />
      //     <EstablishPage tabLabel="成立" />
      //   </ScrollableTabView>
      // </View>
    )
  }
}
class BeforePublicPage extends Component {
  render () {
    const valueData1 = {
      name: data.coins[0].name,
      text: data.coins[0].text,
      startAt: data.coins[0].startAt,
      finishAt: data.coins[0].finishAt,
      state: data.coins[0].state,
    }

    const valueSquare = coinData => {
      return (
        <CoinBox
          name={coinData.name}
          text={coinData.text}
          startAt={coinData.startAt}
          finishAt={coinData.finishAt}
          state={coinData.state}
          imageURL={coinData.imageURL}
        />
      )
    }

    return (
      <View style={styles.mainContainer}>
        <ScrollView>{coinColumn}</ScrollView>
      </View>
    )
  }
}
class ProgressPage extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Text>進行中</Text>
      </View>
    )
  }
}
class EstablishPage extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Text>成立</Text>
      </View>
    )
  }
}

export default CoinScreen
