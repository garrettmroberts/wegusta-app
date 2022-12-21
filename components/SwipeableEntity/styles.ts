import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import Sizes from '../../constants/Sizes';

export default StyleSheet.create({
  container: {
    width: Sizes.screenWidth - Sizes.viewPadding * 2
  },
  text: {
    ...Fonts.displayBold,
    position: 'absolute',
    top: 50,
    borderWidth: 2,
    paddingHorizontal: 10
  },
  likeText: {
    color: Colors.success,
    right: 50,
    transform: [{rotate: '25deg'}],
    backgroundColor: `${Colors.success}25`,
    borderColor: Colors.success
  },
  dislikeText: {
    color: Colors.error,
    left: 40,
    transform: [{rotate: '-25deg'}],
    backgroundColor: `${Colors.error}25`,
    borderColor: Colors.error
  },
  icon: {
    position: 'absolute',
    top: 50
  },
  likeIcon: {
    right: 50,
    transform: [{rotate: '25deg'}],
  },
  dislikeIcon: {
    left: 50,
    transform: [{rotate: '-25deg'}]
  },
});
