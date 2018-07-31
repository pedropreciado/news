import * as NewsAPIUtil from '../utils/news_api_util';

export const RECEIVE_ALL_NEWS = 'RECEIVE_ALL_NEWS';

export const fetchNews = () => dispatch => {
  return NewsAPIUtil.fetchNews()
    .then((res) => {
      return res.json();
    })
    .then(({ data }) => {
      dispatch(receiveAllNews(data));
    })
    .catch((err) => {
      console.log(err);
    }); 
}

const receiveAllNews = (news) => {
  return {
    type: 'RECEIVE_ALL_NEWS',
    news
  };
}