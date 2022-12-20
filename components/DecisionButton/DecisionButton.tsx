import { Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';
import Colors from '../../constants/Colors';

type Props = {
  decision: 'like' | 'dislike';
  onPress?: () => void;
};

const DecisionButton = ({ decision, onPress }: Props) => {
  const icon = (decision: 'like' | 'dislike') => {
    if (decision === 'like') {
      return <Ionicons name="heart" size={50} color={Colors.error} />;
    } else {
      return <Ionicons name="close" size={60} color={Colors.black} />;
    }
  };

  return (
    <Pressable
      style={({ pressed }) => [styles.button, decision === 'like' ? styles.like : styles.dislike, { opacity: pressed ? 0.8 : 1 }]}
      onPress={onPress}
      testID="decision-button"
    >
      <View style={styles.icon}>{icon(decision)}</View>
    </Pressable>
  );
};

export default DecisionButton;
