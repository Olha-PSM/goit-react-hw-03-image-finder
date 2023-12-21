import { Component } from 'react';
import { Search, SearchBtn, SearchInput, SearchForm } from './Searchbar.styled';
import { BiSearch } from 'react-icons/bi';

import { toast } from 'react-toastify';

export class Searchbar extends Component {
  state = {
    query: null,
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
      <Search>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchBtn type="submit">
            <BiSearch size={'2em'} />
          </SearchBtn>

          <SearchInput
            type="text"
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </SearchForm>
      </Search>
    );
  }
}
