import { takeEvery, call, select, put } from 'redux-saga/effects';
import { SWAP_CURRENCY, CHANGE_BASE_CURRENCY, 
  GET_INITIAL_CONVERSION, CONVERSION_ERROR, CONVERSION_RESULT } from '../actions/currencies.js';

export const getLatesRate = (currency) => fetch(`http://api.fixer.io/latest?base=${currency}`);

const fetchLatesConversionRates = function* (action) {
  try {
  let currency = action.currency;
  if (currency === undefined) {
    currency = yield select(state => state.currencies.baseCurrency);
  }

  const response = yield call(getLatesRate, currency);
  const result = yield response.json();

  if (result.error) {
    yield put({ type: CONVERSION_ERROR, error: result.error });
  } else {
    yield put({ type: CONVERSION_RESULT, result });
  }
  } catch (e) {
    yield put({ type: CONVERSION_ERROR, error: e.message });
  }
};

const rootSaga = function* () {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatesConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatesConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchLatesConversionRates);
};

export default rootSaga;
