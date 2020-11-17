import React from 'react';
import styled from "styled-components";
import { ModalProvider, BaseModalBackground } from "styled-react-modal";
import FancyModal from '../FancyModal';

function ModalContainer(props) {
  const { item } = props;
  const FadingBackground = styled(BaseModalBackground)`
  opacity: ${props => props.opacity};
  transition: opacity ease 200ms;
`;

  return (
    <ModalProvider backgroundComponent={FadingBackground}>
    <FancyModal task={item}/>
    </ModalProvider>
  );
}

export default ModalContainer;
