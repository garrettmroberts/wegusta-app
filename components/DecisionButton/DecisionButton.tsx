import { Animated, Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';
import Colors from '../../constants/Colors';
import { useRef } from 'react';

type Props = {
  decision: 'like' | 'dislike';
  onPress?: () => void;
};

const DecisionButton = ({ decision, onPress }: Props) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const shrinkButton = () => {
    Animated.timing(
        scaleAnim,
        {
          toValue: 0.95,
          duration: 200,
          useNativeDriver: true
        }            
     ).start();
  }

  const enlargeButton = () => {
    Animated.timing(
        scaleAnim,
        {
          toValue: 1,
          duration: 200,
          useNativeDriver: true
        }            
     ).start();
  }

  const icon = (decision: 'like' | 'dislike') => {
    if (decision === 'like') {
      return <Ionicons name="heart" size={50} color={Colors.error} />;
    } else {
      return <Ionicons name="close" size={60} color={Colors.black} />;
    }
  };

  return (
    <Animated.View style={[
      styles.button, decision === 'like' ? styles.like : styles.dislike, {transform: [{scale: scaleAnim}]}]}>
      <Pressable
        onPressIn={shrinkButton}
        onPressOut={() => {
          enlargeButton();
          if (onPress) onPress();
        }}
        testID="decision-button"
      >
        <View style={styles.icon}>{icon(decision)}</View>
      </Pressable>
    </Animated.View>
  );
};

export default DecisionButton;
