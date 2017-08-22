import React from 'react';
import PropTypes from 'prop-types';
import { Card, Feed } from 'semantic-ui-react';

import CommentComponent from './CommentComponent.jsx';


class CommentsComponent extends React.PureComponent {
  static propTypes = {
    comments: PropTypes.array.isRequired
  }


  render() {
    const { comments } = this.props;

    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>Comments</Card.Header>
        </Card.Content>

        <Card.Content>
          <Feed>
            {comments.map(comment => (
              <CommentComponent
                key={comment.id}
                comment={comment}
              />
            ))}
          </Feed>
        </Card.Content>
      </Card>
    );
  }
}

export default CommentsComponent;
