import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import NewsReducer from '../reducers/news_reducer';

let defaultState = { news: [] };

export const configureStore = (preloadedState = defaultState) => {
  return createStore(
    NewsReducer,
    preloadedState,
    applyMiddleware(thunk)
  );
};