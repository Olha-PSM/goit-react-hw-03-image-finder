import { Component } from 'react';
import { Search, SearchBtn, SearchInput, SearchForm } from './Searchbar.styled';
import { BiSearch } from 'react-icons/bi';
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

    this.props.onSubmit(this.state.query);

    this.setState({ query: '' });
  };

  render() {
    return (
      <Search>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchBtn type="submit">
            <BiSearch />
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
