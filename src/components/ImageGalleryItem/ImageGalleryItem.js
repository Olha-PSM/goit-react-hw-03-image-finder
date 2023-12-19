import { ItemImg, Item } from '../ImageGalleryItem/ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  image: { id, webformatURL, largeImageURL },
  onOpen,
}) => {
  return (
    <Item id={id} onClick={() => onOpen(largeImageURL)}>
      <ItemImg src={webformatURL} alt="" />
    </Item>
  );
};
