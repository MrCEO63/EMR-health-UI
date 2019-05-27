import React, { Component } from 'react';
import { Alert, Row, Card, CardTitle, CardText, CardBody, Form, Input, Button } from 'reactstrap';

import { Colxx } from 'Components/CustomBootstrap';
import { connect } from 'react-redux';
import { loginUser, resetAuthPropsState } from 'Redux/actions';

class LoginLayout extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    document.title = 'EMR HEALTH | LOGIN';
  }

  showError = error => {
    return <Alert color="danger">{error}</Alert>;
  };

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.loginUser(userData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return this.props.loading ? (
      <div className="loading" />
    ) : (
      <div className="login-layout">
        <div className="login-container">
          <Card>
            <CardBody>
              <Row>
                <Colxx md={10} className="m-auto">
                  <CardTitle>SENSIBLE HEALTH</CardTitle>
                  <CardText className="text-center">
                    Scan your card or bracelet for authentication <br />
                    or <br />
                    login in with your credentials
                  </CardText>
                  {this.props.error && this.showError(this.props.error)}
                  <Form>
                    <Input
                      placeholder="Username"
                      name="username"
                      type="text"
                      value={this.state.username}
                      onChange={this.onChange}
                    />
                    <br />
                    <Input
                      placeholder="Password"
                      name="password"
                      type="password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                    <br />
                    <Button onClick={this.onSubmit}>LOGIN</Button>
                  </Form>
                  <br />
                </Colxx>
              </Row>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ authUser }) => {
  const { loading, error } = authUser;
  return { loading, error };
};

export default connect(
  mapStateToProps,
  {
    loginUser,
    resetAuthPropsState
  }
)(LoginLayout);
