import { fetchImages } from '../api/query';
import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
import { Section } from './Appi.styled';
import { Loader } from './Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    query: null,
    isLoading: false,
    error: '',
    page: 1,
    images: [],
    largeImage: '',
    totalPages: 0,
  };

  handleFormSubmit = query => {
    this.setState({ query, page: 1, images: [] });
  };

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
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
      const response = await fetchImages(query, page);

      this.setState(prev => ({
        images: prev.images
          ? [...prev.images, ...response.hits]
          : response.hits,
        total: response.totalHits,

        totalPages: Math.ceil(response.totalHits / 12),
        largeImage: response.hits.largeImageURL,
      }));
    } catch (error) {
      this.setState({ error: error.response.data });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  openModal = largeImageURL => {
    this.setState({ largeImage: largeImageURL });
  };

  closeModal = () => {
    this.setState({ largeImage: '' });
  };

  render() {
    const { isLoading, error, images, page, totalPages, largeImage } =
      this.state;

    return (
      <Section>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {isLoading && <Loader />}
        {images.length !== 0 && (
          <ImageGallery images={images} onOpen={this.openModal} />
        )}

        {error && <h1>{error}</h1>}
        {largeImage && (
          <Modal largeImg={largeImage} onClose={this.closeModal} />
        )}
        {images.length !== 0 && page < totalPages && (
          <Button onClick={this.handleLoadMore} />
        )}
        <ToastContainer autoClose={1000} />
      </Section>
    );
  }
}
