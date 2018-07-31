import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NewsIndex from '../news_index';
import NewsIndexItem from '../news_index_item';
import Loading from 'react-loading';

configure({ adapter: new Adapter() });

let news = [];

for (let i = 0; i < 20; i++) {
  news.push({ title: `article-${i + 1}`});
}

describe('NewsIndex', () => {
  const newsIndex = shallow(
    <NewsIndex news={news} 
      fetchNews={() => { console.log('fetchNews dispatched')}}
    />
  );
  const newsIndexFetching = shallow(
    <NewsIndex news={[]}
      fetchNews={() => { console.log('fetchNews dispatched')}}
    />
  );

  it('renders correctly', () => {
    expect(newsIndex).toMatchSnapshot();
  });

  it('renders loading when fetching news', () => {
    expect(newsIndexFetching.find(Loading).exists()).toBe(true);
  });

  it('renders NewsIndexItems for each article', () => {
    expect(newsIndex.find(NewsIndexItem).exists()).toBe(true); 
  });

  it('renders first 10 articles on mount', () => {
    expect(newsIndex.find(NewsIndexItem).length).toBe(10);
  });

  it('renders next 10 on scroll', () => {    
    newsIndex.setState({ end: 20 });
    expect(newsIndex.find(NewsIndexItem).length).toBe(20);
  });
});
