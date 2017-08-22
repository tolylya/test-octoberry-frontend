import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';

import ArticleComponent from '../../../components/articles/ArticleComponent.jsx';


@connect(
  ({ articles }) => ({ articles })
)
class ArticlesPage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired
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
