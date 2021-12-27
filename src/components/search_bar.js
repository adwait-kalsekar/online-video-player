import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          placeholder='Enter Search Keyword'
          onChange={ event => this.setState({ term: event.target.value }) }
        />
        <button 
          className='search-button' 
          onClick={event => this.onInputChange(this.state.term)}>
            SEARCH
        </button>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
