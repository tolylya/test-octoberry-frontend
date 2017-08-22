import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Feed } from 'semantic-ui-react';

class CommentComponent extends React.PureComponent {
  static propTypes = {
    comment: PropTypes.object
  }


  render() {
    const { comment } = this.props;

    return (
      <Feed.Event>
        <Feed.Content>
          <Feed.Summary>
            <Feed.User as={Link} to={`/comments/user/${comment.commenter.id}`}>
              {comment.commenter.name}
            </Feed.User>
          </Feed.Summary>

          <Feed.Extra text>
            {comment.text}
          </Feed.Extra>
        </Feed.Content>
      </Feed.Event>
    );
  }
}

export default CommentComponent;
