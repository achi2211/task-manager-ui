import React, { useState, memo } from "react";
import Modal from "styled-react-modal";
import PropTypes from 'prop-types';
import IssueIcon from './IssueIcon';
import IssueLink from './IssueLink';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { updateTask, loadTasks } from '../../containers/App/actions';
import reducer from '../../containers/HomePage/reducer';
import saga from '../../containers/HomePage/saga';

const key = 'fancy-modal';

const StyledModal = Modal.styled`
  width: 12rem;
  height: 10rem;
  display: block;
  text-align: center;
  justify-content: center;
  background-color: white;
  padding: 5px;
  opacity: ${props => props.opacity};
  transition: opacity ease 500ms;
  button {
    margin-left :5px;
  }
`;

export function FancyModal({
  task,
  onUpdateTask
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
    }, 10);
  }

  function beforeClose() {
    return new Promise(resolve => {
      setOpacity(0);
      setTimeout(resolve, 200);
    });
  }

  return (
    <div>
      <IssueLink href="#" onClick={toggleModal}>
      <IssueIcon />
      </IssueLink>
      <StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
      >
        <h4>Complete task '{task.title}' ?</h4>
        <button onClick={() => onUpdateTask(task)}>Complete</button>
        <button onClick={toggleModal}>Close</button>
      </StyledModal>
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    onUpdateTask: task => {
      dispatch(updateTask(task.id))
      setTimeout(() => {
        dispatch(loadTasks())
      }, 500)
    }
  };
}

FancyModal.propTypes = {
  task: PropTypes.object,
  onUpdateTask: PropTypes.func,
};

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(FancyModal);


