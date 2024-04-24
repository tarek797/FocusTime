import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';
export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton
          size={spacing.xxl}
          title="5"
          onPress={() => onChangeTime(5)}
        />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          size={spacing.xxl}
          title="10"
          onPress={() => onChangeTime(10)}
        />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          size={spacing.xxl}
          title="15"
          onPress={() => onChangeTime(15)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});
