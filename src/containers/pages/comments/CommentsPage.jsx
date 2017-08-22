import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CommentsComponent from '../../../components/comments/CommentsComponent.jsx';
import * as routeTypes from '../../../constants/routeTypes';


@connect(
  ({ comments }) => ({ comments })
)
class CommentsPage extends React.Component {

  static propTypes = {
    comments: PropTypes.array.isRequired,
    route: PropTypes.object.isRequired,
    routeParams: PropTypes.object.isRequired
  }

  componentWillMount() {
    const { route, routeParams } = this.props;

    switch(route.type) {
      case routeTypes.ROUTE_COMMENT_ALL_TYPE:
        console.log('fetch all comments');
        break;
      case routeTypes.ROUTE_COMMENT_USER_TYPE:
        console.log(`fetch route for user: ${routeParams.userId}`);
        break;
    }
  }

  render() {
    const { comments } = this.props;

    return (
      <CommentsComponent comments={comments}/>
    );
  }
}


export default CommentsPage;
