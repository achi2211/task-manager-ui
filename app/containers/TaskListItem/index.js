/**
 * TaskListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectCurrentUser } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import ModalContainer from '../ModalContainer';
import TaskLink from './TaskLink';
import Wrapper from './Wrapper';

export function TaskListItem(props) {
  const { item } = props;

  // Put together the content of the repository
  const content = (
    <Wrapper>
      <TaskLink href="#">
      Task #{item.number}  - {item.title}
      </TaskLink>
      <ModalContainer item={item}/>
    </Wrapper>
  );

  // Render the content into a list item
  return <ListItem key={`repo-list-item-${item.id}`} item={content} />;
}

TaskListItem.propTypes = {
  item: PropTypes.object,
  currentUser: PropTypes.string,
};

export default connect(
  createStructuredSelector({
    currentUser: makeSelectCurrentUser(),
  }),
)(TaskListItem);
