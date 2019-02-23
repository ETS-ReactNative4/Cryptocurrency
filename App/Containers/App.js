//
// Import
// ----------------------------------------------------------------------
// React, ReactNative
import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'

// Config
import '../Config'
import DebugConfig from '../Config/DebugConfig'

// Screen
import TopScreen from '../Containers/TopScreen'

// Style
import styles from '../Styles/RootContainerStyles'


// ======================================================================
// Environment Settings =================================================
// ======================================================================

if ((process.env.NODE_ENV || '').toLowerCase() === 'production') {
  // disable console. log in production
  console.log = () => {}
  console.info = () => {}
  console.warn = () => {}
  console.error = () => {}
  console.debug = () => {}
} else if (typeof global.__REMOTEDEV__ !== 'undefined') {
  /*  When the debugger is connected, remove the XHR polyfill so that the chrome inspector will be able to see requests. display original network requests on chrome network tab */
  GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || OBAL.XMLHttpRequest
  // global.FormData = global.originalFormData || global.FormData
}

// ======================================================================
// Redux ================================================================
// ======================================================================

/* create our store
 * const store = createStore()
 * Provides an entry point into our application.  Both index.ios.js and index.android.js  call this component first.
 * We create our Redux store here, put it into a provider and then bring in our RootContainer.
 * We separate like this to play nice with React Native's hot reloading. */

 // ======================================================================
 // Variables=============================================================
 // ======================================================================

 /* none */

 // ======================================================================
 // Class ================================================================
 // ======================================================================

class App extends Component {
  render () {

    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <TopScreen />
      </View>
    )
  }
}

// ReactToTronでデバッグする場合の設定
// allow reactotron overlay for fast design in dev mode
export default (DebugConfig.useReactotron ? console.tron.overlay(App) : App)
