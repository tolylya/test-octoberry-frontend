import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Comment, Input } from 'semantic-ui-react';

class CommentComponent extends React.Component {
  static propTypes = {
    comment: PropTypes.object
  }

  state = {
    isEdit: false
  }

  toggleEdit = () => {
    const { comment } = this.props;

    this.setState({
      isEdit: !this.state.isEdit,
      commentText: comment.text,
      commenterName: comment.commenter.name
    });
  }

  changeName = e => {
    this.setState({ commenterName: e.target.value });
  }

  changeComment = e => {
    this.setState({ commentText: e.target.value });
  }

  handleSave = () => {
    const { commentText, commenterName } = this.state;
    const { comment } = this.props;



    if (commentText !== comment.text) {
      console.log('update comment');
    }

    if (commenterName !== comment.commenter.name) {
      console.log('update user id');
    }

    this.toggleEdit();
  }

  render() {
    const { comment } = this.props;
    const { isEdit } = this.state;

    return (
      <Comment>
        <Comment.Content>
          {isEdit ? (
            <Input
              label="User name"
              defaultValue={comment.commenter.name}
              onChange={this.changeName}
            />
          ) : (
            <Comment.Author as={Link} to={`/comments/user/${comment.commenter.id}`}>
              {comment.commenter.name}
            </Comment.Author>
          )}


          <Comment.Text>
            {isEdit ? (
              <Input
                label="Comment"
                defaultValue={comment.text}
                onChange={this.changeComment}
              />
            ) : comment.text }
          </Comment.Text>

          <Comment.Actions>
            <Comment.Action
              active={!isEdit}
              onClick={isEdit ? undefined : this.toggleEdit}
            >
              Edit
            </Comment.Action>

            <Comment.Action
              active={isEdit}
              onClick={isEdit ? this.handleSave : undefined}
            >
              Save
            </Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    );
  }
}

export default CommentComponent;
