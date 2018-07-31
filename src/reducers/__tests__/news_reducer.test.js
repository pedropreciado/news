import NewsReducer from '../news_reducer';

const news = { news: [{title: 'the news'}]};

describe('NewsReducer', () => {
  it('should return the initial state', () => {
    expect(NewsReducer(undefined, {}))
      .toEqual({});
  });

  it('should handle action of type: RECEIVE_ALL_NEWS', () => {
    let action = { type: 'RECEIVE_ALL_NEWS', news };

    expect(NewsReducer(undefined, action).news)
      .toEqual(news);
  });
});