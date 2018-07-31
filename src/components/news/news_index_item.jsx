import React from 'react';

export default class NewsIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMouseIn: false
    }

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  _onMouseEnter() {
    this.setState({ isMouseIn: true });
  }

  _onMouseLeave() {
    this.setState({ isMouseIn: false });
  }

  handleClick(url) {
    window.location = url;
  }

  render() {
    let { isMouseIn } = this.state;
    let { 
      description,
      published_at,
      url,
      title,
      image_url,
      site: { name } 
    } = this.props.article;
    let date = new Date(published_at)
                  .toString()
                  .split(' ')
                  .slice(0, 4)
                  .join(' ');
    let background = {
      backgroundImage: `url(${image_url})`,
      backgroundPosition: 'center',
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      transition: '1s'
    }
    
    return (
      <div className='news-item' 
        style={ isMouseIn ? background : {} }
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
        onClick={() => this.handleClick(url)}
      >
        <div className={`item-title${ isMouseIn ? ' blur' : ''}`}>
          {'"' + title + '"'}
        </div>
        
        <div className='news-item-header'>
          <div className={`date${isMouseIn ? ' blur' : ''}`}>
            { date }
          </div>
          <div className={`visit-link${ isMouseIn ? '-blur blur' : ''}`}>
            click to visit { name } >>>
          </div>
        </div>

        <a className={`description${isMouseIn ? ' blur' : ''}`}>{
          description.length > 200
            ? description.slice(0, 200) + '...'
            : description
        }</a>
      </div>
    );
  }
}