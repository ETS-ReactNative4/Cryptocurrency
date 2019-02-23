import { StyleSheet } from 'react-native'
// import { Colors, Metrics, Fonts } from '../../DevScreens/DevTheme/'
import { Colors, Metrics, Fonts } from '../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    height: Metrics.screenHeight / 5,

    // width: Metrics.screenWidth ,
    // aspectRatio: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.border
    // borderRadius: Metrics.screenWidth/32
  },
  image: {
    width: Metrics.icons.xl,
    height: Metrics.icons.xl,
    margin: Metrics.baseMargin
  },
  label: {
    ...Fonts.style.h2,
    fontSize: 14,
    color: Colors.text
  },
  value: {
    ...Fonts.style.h1,
    fontSize: 20,
    color: Colors.valueText
  },
  percent: {
    ...Fonts.style.h2,
    fontSize: 14,
    color: Colors.percentText
  },
  possess: {
    ...Fonts.style.h2,
    fontSize: 14,
    color: Colors.possessText
  },

  currencyText: {
    flex: 1
  }
})
