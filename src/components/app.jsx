import React from 'react';
import { Provider } from 'react-redux';

import NewsIndexContainer from './news/news_index_container';

export const App = ({ store }) => {
  return (
    <Provider store={store}>
      <div><a id='main-header'>Recent Articles:</a>
        <NewsIndexContainer />
      </div>
    </Provider>
  );
}
