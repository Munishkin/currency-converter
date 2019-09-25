import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from '../screens/Home.js';
import CurrencyList from '../screens/CurrencyList.js';
import Options from '../screens/Options.js';
import Themes from '../screens/Themes.js';

const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null
    }
  },
  Options: {
    screen: Options,
    navigationOptions: {
      headerTitle: 'Options'
    }
  },
  Themes: {
    screen: Themes,
    navigationOptions: {
      headerTitle: 'Themes'
    }
  }
  },
  {
    headerMode: 'screen'
  }
);

const CurrencyListStack = StackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title
    })
  }
});

export default StackNavigator(
{
  Home: {
    screen: HomeStack
  },
  CurrencyList: {
    screen: CurrencyListStack
  }
},
{
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
    headerMode: 'none'
  }
);
