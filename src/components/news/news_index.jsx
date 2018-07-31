import React from 'react';
import Loading from 'react-loading';

import NewsIndexItem from './news_index_item.jsx';

export default class NewsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      end: 10,
      imageHidden: true,
    }
    
    this.renderNews = this.renderNews.bind(this);
  }

  componentDidMount() {
    this.props.fetchNews();

    window.addEventListener('scroll', () => {
      if ((window.innerHeight + window.scrollY ) >= (document.body.offsetHeight - 500)) {
        let end = this.state.end + 10;
        this.setState({ end });
      };
    })
  }

  renderNews(news) {
    let { end } = this.state;
    
    return (
      <div id='news-index'>
      {
        news.slice(0, end)
            .map((article, idx) => {
              return (<NewsIndexItem key={idx} article={article} />);
            })
      }
      </div>
    );
  }

  render() {
    let { news } = this.props;
    
    return (
      <div id='news-container'>
        { 
          news.length
          ? this.renderNews(news)
          : (
            <div id='loading'>
              <Loading type={'bubbles'}
                color={'white'} 
              />
            </div>
          )
        }
      </div>
    );
  }
}