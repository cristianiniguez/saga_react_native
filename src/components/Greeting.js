import { Text } from 'react-native';
import PropTypes from 'prop-types';

export default function Greeting(props) {
  const { firstName, lastName } = props;
  return (
    <Text>
      Hello {firstName} {lastName}
    </Text>
  );
}

Greeting.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};
