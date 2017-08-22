import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ArticleComponent from '../../../components/articles/ArticleComponent.jsx';
import CommentsComponent from '../../../components/comments/CommentsComponent.jsx';


@connect(
  ({ articleDetail }) => ({ articleDetail })
)
class ArticleDetailPage extends React.Component {

  static propTypes = {
    articleDetail: PropTypes.object.isRequired
  }

  render() {
    const { articleDetail } = this.props;

    return (
      <div>
        <ArticleComponent fluid article={articleDetail}/>
        <CommentsComponent comments={articleDetail.comments}/>
      </div>
    );
  }
}


export default ArticleDetailPage;
