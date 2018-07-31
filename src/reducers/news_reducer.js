import { RECEIVE_ALL_NEWS } from '../actions/news_actions';

const NewsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALL_NEWS:
      let { news } = action;
      return { ...oldState, news };
    default: 
      return oldState;
  };
}

export default NewsReducer;