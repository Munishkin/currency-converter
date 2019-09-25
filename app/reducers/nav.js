import { NavigationActions } from 'react-navigation';
import Navigator from '../config/routes.js';

const initialState = Navigator.router.getStateForAction(NavigationActions.init());

export default (state = initialState, action) => {
  const nextState = Navigator.router.getStateForAction(action, state);
  return nextState || state;
};
