import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router';


class Sidebar extends React.PureComponent {
  render() {
    return (
      <Menu fixed="top" inverted >
        <Container>
          <Menu.Item as={Link} to="/" link>Home</Menu.Item>
          <Menu.Item as={Link} to="/articles" link>Articles</Menu.Item>
          <Menu.Item as={Link} to="/comments/all" link>Comments All</Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default Sidebar;
