import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { fetchNews } from '../news_actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('News Action Creators', () => {
  it('dispatches the correct actions on successful fetch request', () => {
    let res = { data: [{ title: 'an article', image_url: 'an_image.jpg' }] };

    fetch.mockResponse(JSON.stringify(res));

    const expectedActions = [{ type: 'RECEIVE_ALL_NEWS', products: res.data }];
    const store = mockStore({ res });
    return(
      store.dispatch(fetchNews())
           .then(() => {
            expect(store.getActions().toEqual(expectedActions));
           })
           .catch(err => console.log(err))
    );
  });
});