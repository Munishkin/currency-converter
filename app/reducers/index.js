import { combineReducers } from 'redux';
import currencies from './currencies.js';
import theme from './theme.js';
import nav from './nav.js';

export default combineReducers({
  currencies,
  theme,
  nav
});
