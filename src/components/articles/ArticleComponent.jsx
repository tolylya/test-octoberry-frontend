import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Card } from 'semantic-ui-react';

class ArticleComponent extends React.PureComponent {
  static propTypes = {
    article: PropTypes.object.isRequired,
    fluid: PropTypes.bool
  }

  static defaultProps = {
    fluid: false
  }


  render() {
    const { article, fluid } = this.props;

    return (
      <Card as={Link} to={`/articles/${article.id}`} fluid={fluid}>
        <Card.Content>
          <Card.Header>{article.title}</Card.Header>
          <Card.Description>{article.text}</Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default ArticleComponent;
