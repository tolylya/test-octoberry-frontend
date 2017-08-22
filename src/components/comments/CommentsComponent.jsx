import React from 'react';
import PropTypes from 'prop-types';
import { Card, Comment, Header } from 'semantic-ui-react';

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
          <Comment.Group>
            <Header as="h3" dividing>Comments</Header>

            {comments.map(comment => (
              <CommentComponent
                key={comment.id}
                comment={comment}
              />
            ))}
          </Comment.Group>
        </Card.Content>
      </Card>
    );
  }
}

export default CommentsComponent;
