import { ColorRing } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <ColorRing
        visible={true}
        height="100"
        width="100"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#fc5c7d', '#fc5c7d', '#fc5c7d', '#fc5c7d', '#fc5c7d']}
      />
    </Wrapper>
  );
};
