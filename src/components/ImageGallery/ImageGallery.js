import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <ul>
      {images.map(image => (
        <ImageGalleryItem key={images.id} image={image} onClick={onClick} />
      ))}
    </ul>
  );
};
