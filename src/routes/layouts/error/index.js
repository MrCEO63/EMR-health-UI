import React, { Component } from 'react';
import { Row, Container, Card, CardTitle } from 'reactstrap';

import { Colxx } from 'Components/CustomBootstrap';

class Error404 extends Component {
  render() {
    return (
      <Container className="error-layout">
        <Card>
          <CardTitle className="mb-2">PAGE NOT FOUND :) 404</CardTitle>
        </Card>
      </Container>
    );
  }
}
export default Error404;
