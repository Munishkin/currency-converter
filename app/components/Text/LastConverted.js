import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import moment from 'moment';
import styles from './styles.js';

const LastConverted = ({ base, quote, date, conversionRate }) => (
  <Text style={styles.text}>
    1 {base} = {conversionRate} {quote} as of {moment(date).format('MMMM D, YYYY')}
  </Text>
);

LastConverted.propTypes = {
  date: PropTypes.object,
  base: PropTypes.string,
  quote: PropTypes.string,
  conversionRate: PropTypes.number
};

export default LastConverted;
