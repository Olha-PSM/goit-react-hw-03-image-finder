import { Component } from 'react';
import { Overlay, ModalWindow } from '../Modal/Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImg } = this.props;
    return (
      <Overlay onClick={this.handleClick}>
        <ModalWindow>
          <img src={largeImg} alt="" />
        </ModalWindow>
      </Overlay>
    );
  }
}
