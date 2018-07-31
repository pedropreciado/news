import { connect } from 'react-redux';

import { fetchNews } from '../../actions/news_actions';
import NewsIndex from './news_index.jsx';

const mapStateToProps = ({ news }) => {
  return { news };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNews: () => dispatch(fetchNews()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsIndex);