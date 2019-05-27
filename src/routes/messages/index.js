import React, { Component } from 'react';
import { Row, Card } from 'reactstrap';

import { Colxx } from 'Components/CustomBootstrap';

class Messages extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return this.props.loading ? <div className="loading" /> : <>Hello Messages</>;
  }
}

// const mapStateToProps = ({ authUser }) => {
//   const { loading, error } = authUser;
//   return { loading, error };
// };

export default Messages;
// connect(
//   mapStateToProps,
//   {
//     loginUser,
//     resetAuthPropsState
//   }
// )(LoginLayout);
