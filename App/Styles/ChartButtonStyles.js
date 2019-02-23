import { StyleSheet } from 'react-native'
// import { Colors, Metrics, Fonts } from '../../DevScreens/DevTheme/'
import { Colors, Metrics, Fonts } from '../Themes/'

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth / 4,
    aspectRatio: 1.2,
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Metrics.screenWidth / 32,
    overflow: 'hidden'
  },
  // image: {
  //   width: Metrics.icons.xl,
  //   height: Metrics.icons.xl,
  //   margin: Metrics.baseMargin
  // },
  image: {
    // width: Metrics.icons.xl,
    // height: Metrics.icons.xl,

    flex: 2,
    width: Metrics.screenWidth / 2,
    height: Metrics.image.logo,
    // overflow:'hidden',
    // marginVertical :Metrics.screenWidth / 32,
    borderRadius: Metrics.screenWidth / 16
    // height: Metrics.screenWidth / 2,
    // margin: Metrics.baseMargin
  },
  label: {
    ...Fonts.style.h2,
    fontSize: 14,
    color: Colors.text,
    flex: 1
  }
})
