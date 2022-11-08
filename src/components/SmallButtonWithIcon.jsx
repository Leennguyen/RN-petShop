import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../theme/colors';

const styleBtn = StyleSheet.create({
  btn: {
    position: 'absolute',
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
  },
});
export default ({icon, onPress, style = {}}) => {
  return (
    <TouchableOpacity style={[styleBtn.btn, style]} onPress={onPress}>
      <FontAwesomeIcon icon={icon} size={24} color={colors.primaryColor} />
    </TouchableOpacity>
  );
};
