import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card } from 'semantic-ui-react';

import { getArticlesAction } from '../../../actions/articlesAction';

import ArticleComponent from '../../../components/articles/ArticleComponent.jsx';


@connect(
  ({ articles }) => ({ articles }),
  dispatch => ({
    actions: bindActionCreators({
      getArticlesAction
    }, dispatch)
  })
)
class ArticlesPage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  componentWillMount() {
    this.props.actions.getArticlesAction();
  }

  render() {
    const { articles } = this.props;

    return (
      <Card.Group>
        {articles.map(article => (<ArticleComponent
          key={article.id}
          article={article}
        />))}
      </Card.Group>
    );
  }
}


export default ArticlesPage;
