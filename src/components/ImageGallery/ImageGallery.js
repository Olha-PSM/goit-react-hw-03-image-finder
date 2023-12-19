import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { List } from '../ImageGallery/ImageGallery.styled';
export const ImageGallery = ({ images, onOpen }) => {
  return (
    <List>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} onOpen={onOpen} />
      ))}
    </List>
  );
};
