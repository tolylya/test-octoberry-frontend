import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

import Sidebar from './Sidebar.jsx';


class App extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Container text style={{ marginTop: '4em' }}>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
