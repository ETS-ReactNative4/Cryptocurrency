import React from 'react'
import { Image, TouchableOpacity, Text, View } from 'react-native'

import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import glamorous, {ThemeProvider} from 'glamorous-native'

import { Colors, Images, Fonts, Metrics } from '../Themes/'
// import API from '../Services/MyApi'

// ======================================================================
// Style ================================================================
// ======================================================================

const ImgHeaderLogo = glamorous.image({
  // alignSelf: 'center', //imageを左右中央配置するときに必要だが、今回はRootContainerのalignItems:centerが効いてるので不要

  marginTop: '5%',
  height: '50%',
  width: '100%'
})

const RootContainer = glamorous.view({
  backgroundColor: '#fe5a4f',
  flexDirection: 'row',
  justifyContent: 'center', // 配下のTextを左右中央表示させるために必要
  alignItems: 'center',
  height: 60
})

const TextHeader = glamorous.text({
  textAlign: 'center',
  fontSize: Fonts.size.h5,
  color: 'white',
  fontWeight: '900'
})

// ======================================================================
// Variables ============================================================
// ======================================================================

const strTitleHeader = 'JPCX'
const hasImageLogo = true
const hasShoppingCart = false
// ======================================================================
// Class ================================================================
// ======================================================================

export default class HeaderBar extends React.Component {
  render () {
    return (
      <RootContainer>

        {hasImageLogo == true
          ? (
            // if isEnabled
            <ImgHeaderLogo source={Images.logo} resizeMode='contain' />
          )

          : (
            // else if isDisabled
            <View>
              <TextHeader>
                {strTitleHeader}
              </TextHeader>
            </View>
          )
        }

        {/* Shopping Cart の仕様は将来可能性はあるが、現状作らないのでコメントアウト

        {hasShoppingCart == true
          ? (
            <TouchableOpacity
              //     onPress={() => {
              //     this.props.navigation.navigate('WebViewScreen', {url: API.BaseURL + '/cart'})
              //   }}
            >
            <Image
              source={Images.shoppingCart}
              resizeMode="contain"
              style= { { width: 30, height: 30, tintColor: Colors.clear } }
            />
            </TouchableOpacity>
          )

          : (
            <View/>
          )
        }
        */}

      </RootContainer>
    )
  }
} // End of Class ---------------------------------------------
