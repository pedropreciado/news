import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NewsIndexItem from '../news_index_item';

console.log = s => {
  process.stdout.write(s + "\n");
};

configure({ adapter: new Adapter() });

const article = { 
  title: 'a title',
  name: 'a name',
  published_at: '2018-07-31T03:22:00.924Z',
  description: 'a description',
  image_url: 'img.jpg',
  site: { name: 'name' }
};

let longDescription = '';
while (longDescription.length < 205) longDescription += 'a';

const articleLong = {
  title: 'a title',
  name: 'a name',
  published_at: '2018-07-31T03:22:00.924Z',
  description: longDescription,
  image_url: 'img.jpg',
  site: { name: 'a name' }
}

describe('NewsIndexItem', () => {
  let newsIndexItem = shallow(
    <NewsIndexItem article={article} />
  );

  it('renders the title', () => {
    expect(newsIndexItem
      .find('.item-title')
      .props()
      .children
      .length > 0).toBe(true);
  });

  it('renders the date', () => {
    expect(newsIndexItem
      .find('.date')
      .props()
      .children
      .length > 0).toBe(true);
  });

  it('renders the visit link', () => {
    console.log(newsIndexItem
      .find('.visit-link'));
  });

  it('cuts descriptions longer than 200 chars', () => {
    let newsIndexItemLong = shallow(
      <NewsIndexItem article={articleLong}/>
    );
    let text = newsIndexItemLong
                .find('.description')
                .props()
                .children;

    expect(text.slice(text.length - 3)).toBe('...');
  });

  newsIndexItem.simulate('mouseEnter');
  
  it('blurs title background on mouse enter', () => {
    expect(newsIndexItem.find('.item-title.blur').exists()).toBe(true);
  });

  it('blurs date background on mouse enter', () => {
    expect(newsIndexItem.find('.date.blur').exists()).toBe(true);
  });

  it('blurs link background on mouse enter', () => {
    expect(newsIndexItem.find('.date.blur').exists()).toBe(true);
  });
});