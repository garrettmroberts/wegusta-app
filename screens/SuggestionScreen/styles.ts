import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import Sizes from '../../constants/Sizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white
  },
  absolute: {
    position: 'absolute',
    width: Sizes.screenWidth,
    height: Sizes.screenHeight
  },
  loadingText: {
    ...Fonts.h1Bold,
    marginTop: 21
  },
  tryAgainBlock: {
    position: 'absolute',
    bottom: 34,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16
  },
  tryAgainText: {
    color: Colors.primary,
    marginRight: 12,
    ...Fonts.buttonReg
  },
  resultCardWrapper: {
    width: Sizes.screenWidth - (Sizes.viewPadding * 2)
  },
  fullScreenModal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    color: 'red'
  },
  locationServicesPlacement: {
    bottom: 50,
    paddingLeft: Sizes.viewPadding,
  },
  locationServicesCloseButton: {
    position: 'absolute',
    top: Sizes.headerHeight + 40,
    left: Sizes.viewPadding,
    borderRadius: 90,
    backgroundColor: Colors.greyLight,
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  locationServicesIcon: {
    borderRadius: 90,
    backgroundColor: Colors.secondary + '10',
    width: 74, 
    height: 74,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  locationServicesHeader: {
    ...Fonts.h2Bold,
    alignSelf: 'flex-start',
    marginBottom: 8
  },
  locationServicesSubheader: {
    ...Fonts.bodyReg,
    maxWidth: Sizes.screenWidth * 0.8,
    alignSelf: 'flex-start',
  },
  locationServicesPrimaryButton: {
    backgroundColor: Colors.primary,
    marginTop: 'auto'
  },
  locationServicesPrimaryButtonText: {
    color: Colors.white,
    ...Fonts.buttonReg
  },
  locationServicesSecondaryButton: {
    marginTop: 16,
    marginBottom: 24
  },
  locationServicesSecondaryButtonText: {
    color: Colors.primary,
    ...Fonts.buttonReg
  },
  actionButton: {
    alignItems: 'center',
    paddingVertical: 16,
    width: Sizes.screenWidth - Sizes.viewPadding * 2,
    borderRadius: 16,
    justifyContent: 'center',
    marginLeft: Sizes.viewPadding
  }
});

export default styles;
