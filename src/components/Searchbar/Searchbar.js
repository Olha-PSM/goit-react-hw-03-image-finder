import { Component } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInputChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      toast.error('Please, enter something');
      return;
    }

    this.props.onSubmit(this.state.query);

    this.setState({ query: '' });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}
