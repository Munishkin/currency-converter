import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import currencies from '../data/currencies.js';
import { ListItem, Separator } from '../components/List/';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies.js';

class CurrencyList extends Component {
  static propTypes = {
      navigation: PropTypes.object,
      baseCurrency: PropTypes.string,
      quoteCurrency: PropTypes.string,
      primaryColor: PropTypes.string
    }
  handlePress = (currency) => {
    const { type } = this.props.navigation.state.params;
    if (type === 'base') {
      this.props.dispatch(changeBaseCurrency(currency));
    } else if (type === 'quote') {
      this.props.dispatch(changeQuoteCurrency(currency));
    }
    this.props.navigation.goBack(null);
  };

  render() {
    let comparisonCurrency = this.props.baseCurrency;
    if (this.props.navigation.state.params.type === 'quote') {
      comparisonCurrency = this.props.quoteCurrency;
    }
    return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle='default' translucent={false} />
      <FlatList 
      data={currencies}
      renderItem={({ item }) => (
        <ListItem 
        text={item} 
        selected={item === comparisonCurrency}
        onPress={() => this.handlePress(item)}
        iconBackground={this.props.primaryColor}
        />
      )}
      keyExtractor={item => item}
      ItemSeparatorComponent={Separator}
      />
    </View>
  );
  }
}

const mapStateToProps = (state) => ({
    baseCurrency: state.currencies.baseCurrency,
    quoteCurrency: state.currencies.quoteCurrency,
    primaryColor: state.theme.primaryColor
});

export default connect(mapStateToProps)(CurrencyList);
