import { StyleSheet } from 'react-native'
// import { Colors, Metrics, Fonts } from '../../DevScreens/DevTheme/'
import { Colors, Metrics, Fonts } from '../Themes/'

export default StyleSheet.create({
  container: {
    // flex: 1,
    flex: 0.3,
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
  name: {
    ...Fonts.style.h2,
    fontSize: 30,
    color: Colors.black
  },
  exchange: {
    ...Fonts.style.h2,
    fontSize: 10,
    color: Colors.black
  },
  value: {
    ...Fonts.style.h1,
    fontSize: 25,
    color: Colors.fire
  },
  percent: {
    ...Fonts.style.h2,
    fontSize: 14,
    color: Colors.fire
  },
  difference: {
    ...Fonts.style.h2,
    fontSize: 14,
    color: Colors.fire
  },
  change: {
    ...Fonts.style.h2,
    fontSize: 14,
    color: Colors.fire
  },

  currencyText: {
    flex: 1
  }
})
