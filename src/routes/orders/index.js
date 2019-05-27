import React, { Component } from 'react';
import { Row, Card } from 'reactstrap';

import { Colxx } from 'Components/CustomBootstrap';

class Orders extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return this.props.loading ? <div className="loading" /> : <>Hello Orders</>;
  }
}

// const mapStateToProps = ({ authUser }) => {
//   const { loading, error } = authUser;
//   return { loading, error };
// };

export default Orders;
// connect(
//   mapStateToProps,
//   {
//     loginUser,
//     resetAuthPropsState
//   }
// )(LoginLayout);
