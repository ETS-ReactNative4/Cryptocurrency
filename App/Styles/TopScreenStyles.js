import { StyleSheet } from 'react-native'
// import { Metrics, Colors, Fonts, ApplicationStyles } from '../DevTheme/'
import { Metrics, Colors, Fonts, ApplicationStyles } from '../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    marginBottom: 0,
    paddingTop: Metrics.section
  },
  news: {
    margin: Metrics.baseMargin
  },
  currency: {
    flex: 1,
    margin: Metrics.baseMargin
  },
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain',
    marginTop: Metrics.doubleBaseMargin
  },
  buttonsContainer: {
    flexDirection: 'row',
    flex: 1
  },
  centered: {
    alignItems: 'center'
  },
  componentButton: {
    borderColor: Colors.border,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1
  },
  apiButton: {
    borderColor: Colors.border,
    borderRightWidth: 1,
    borderBottomWidth: 1
  },
  usageButton: {
    borderColor: Colors.border,
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  deviceButton: {
    borderColor: Colors.border,
    borderRightWidth: 1,
    borderTopWidth: 1
  },
  sectionText: {
    textAlign: 'left',
    fontFamily: Fonts.base,
    fontSize: 14,
    marginHorizontal: Metrics.baseMargin * 2,
    lineHeight: 30,
    // marginVertical: Metrics.doubleBaseMargin,
    color: Colors.text
  },
  // banner: {
  //   position: 'absolute',
  //   width: Metrics.screenWidth,
  //   backgroundColor: Colors.banner,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   height: 36
  // },
  bannerLabel: {
    ...Fonts.style.h5,
    fontSize: 12,
    color: Colors.snow
  }
})
