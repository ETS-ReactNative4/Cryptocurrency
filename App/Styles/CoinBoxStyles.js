import { StyleSheet } from 'react-native'
// import { Colors, Metrics, Fonts } from '../../DevScreens/DevTheme/'
import { Colors, Metrics, Fonts } from '../Themes/'

export default StyleSheet.create({
  // container: {
  //   flex: 1,
  //   width: Metrics.screenWidth,
  //   aspectRatio: 2.7,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: Colors.background,
  //   borderWidth: 1,
  //   borderColor: Colors.border
  //   // borderRadius: Metrics.screenWidth/32
  // },
  container: {
    flex: 1,
    height: Metrics.screenHeight / 4,
    // backgroundColor: 'red',
    margin: 10,
    // width: Metrics.screenWidth ,
    // aspectRatio: 2.7,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Metrics.screenWidth / 32
  },
  image: {
    width: Metrics.icons.xl,
    height: Metrics.icons.xl,
    margin: Metrics.baseMargin
  },
  name: {
    ...Fonts.style.h1,
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.text
  },
  text: {
    ...Fonts.style.h2,
    fontSize: 14,
    color: Colors.text
  },
  startAt: {
    ...Fonts.style.h1,
    fontWeight: 'bold',
    fontSize: 12,
    color: Colors.text
  },
  state: {
    ...Fonts.style.h1,
    fontWeight: 'bold',
    fontSize: 12,
    color: Colors.text
  },
  label: {
    ...Fonts.style.h2,
    fontSize: 12,
    color: Colors.gray
  },

  currencyText: {
    flex: 0.5,
    backgroundColor: 'red'
  },
  coin: {
    flex: 2
  }
})
