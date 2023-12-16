import { fetchImages } from '../api/query';
import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    query: null,
    isLoading: false,
    error: '',
    page: 1,
    images: [],
    isShowModal: false,
  };
  componentDidMount() {
    this.getImages();
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      this.getImages();
    }
  }

  getImages = async () => {
    const { query, page } = this.state;
    try {
      this.setState({ isLoading: true, error: '' });
      const response = await fetchImages(query, page * 12);
      this.setState(prev => ({
        images: prev.images
          ? [...prev.images, ...response.hits]
          : response.hits,
        total: response.hits,
      }));
    } catch (error) {
      this.setState({ error: error.response.data });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleFormSubmit = query => {
    this.setState({ query });
  };
  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  toggleModal = () => {
    this.setState(prev => ({
      isShowModal: !prev.isShowModal,
    }));
  };

  // openModal = () => {
  //   this.setState({
  //     isShowModal: false,
  //   });
  // };

  // closeModal = () => {
  //   this.setState({
  //     isShowModal: true,
  //   });
  // };
  render() {
    const { isLoading, error, images, isShowModal } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {images.length > 0 && (
          <ImageGallery images={images} onClick={this.toggleModal} />
        )}
        {isLoading && <h1>...Loading</h1>}
        {error && <h>{error}</h>}
        {isShowModal && <Modal onClose={this.toggleModal} />}
        <Button onClick={this.handleLoadMore} />
      </>
    );
  }
}
