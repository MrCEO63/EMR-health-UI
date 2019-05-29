import React, { Component } from 'react';
import { Row, Card, CardHeader, CardTitle, CardBody, Table, Badge } from 'reactstrap';
import { Colxx } from 'Components/CustomBootstrap';

import { connect } from 'react-redux';
import { getAllAppiontment, getAllNotification, resetAuthPropsState } from 'Redux/actions';
import PerfectScrollbar from 'react-perfect-scrollbar';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    document.title = 'EMR HEALTH | DASHBOARD';
    this.props.getAllAppiontment();
    this.props.getAllNotification();
  }

  gotoVitals = index => {
    const state = this.props.appointments[index];
    this.props.history.push({
      pathname: 'patient-info',
      state
    });
  };

  render() {
    return this.props.loading ? (
      <div className="loading" />
    ) : (
      <Row className="dashboard-layout">
        <Colxx xxs={10} className="m-auto">
          <Card className="card-tasks">
            <CardHeader>
              <CardTitle className="d-inline">
                <Badge color="danger">{this.props.appointments.length}</Badge> In Patient Visit
              </CardTitle>
            </CardHeader>
            <CardBody>
              <PerfectScrollbar
                className="table-full-width table-responsive"
                options={{ suppressScrollX: true, wheelPropagation: false }}
              >
                <Table>
                  <tbody>
                    {this.props.appointments.map((item, index) => (
                      <tr
                        key={index}
                        onClick={() => this.gotoVitals(index)}
                        style={{ cursor: 'pointer' }}
                        title={item.patientName}
                      >
                        <td>
                          <p className="title">{item.date}</p>
                          <p className="text-muted">{item.elapsTime}</p>
                        </td>
                        <td>
                          <p className="title">New Patient - {item.patientName}</p>
                          <p className="text-muted">Refferal: {item.refferal}</p>
                        </td>
                        <td>
                          <h4>
                            <Badge color={item.color}>{item.situation}</Badge>
                          </h4>
                        </td>
                        <td className="td-actions text-right">
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" value="" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </label>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </PerfectScrollbar>
            </CardBody>
          </Card>
        </Colxx>
        <Colxx xxs={10} className="m-auto">
          <Card className="card-tasks">
            <CardHeader>
              <CardTitle className="d-inline">
                <Badge color="danger">{this.props.appointments.length}</Badge> Out Patient Visit
              </CardTitle>
            </CardHeader>
            <CardBody>
              <PerfectScrollbar
                className="table-full-width table-responsive"
                options={{ suppressScrollX: true, wheelPropagation: false }}
              >
                <Table>
                  <tbody>
                    {this.props.appointments.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <p className="title">{item.date}</p>
                          <p className="text-muted">{item.elapsTime}</p>
                        </td>
                        <td>
                          <p className="title">New Patient - {item.patientName}</p>
                          <p className="text-muted">Refferal: {item.refferal}</p>
                        </td>
                        <td>
                          <h4>
                            <Badge color={item.color}>{item.situation}</Badge>
                          </h4>
                        </td>
                        <td className="td-actions text-right">
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" value="" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </label>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </PerfectScrollbar>
            </CardBody>
          </Card>
        </Colxx>
        <Colxx xxs={10} className="m-auto">
          <Card className="card-tasks">
            <CardHeader>
              <CardTitle className="d-inline">
                <Badge color="danger">{this.props.notifications.length}</Badge> Notifications
              </CardTitle>
            </CardHeader>
            <CardBody>
              <PerfectScrollbar
                className="table-full-width table-responsive"
                options={{ suppressScrollX: true, wheelPropagation: false }}
              >
                <Table>
                  <tbody>
                    {this.props.notifications.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <i className="tim-icons icon-calendar-60" />
                        </td>
                        <td className="remove-strip">
                          <Table>
                            <tbody>
                              <tr>
                                <td>
                                  <p className="title">{item.date}</p>
                                </td>
                                <td>
                                  <p className="title">{item.elapsTime}</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p className="text-muted">{item.message}</p>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </PerfectScrollbar>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    );
  }
}

const mapStateToProps = ({ dashboardReducers }) => {
  const { appointments, notifications, loading, error } = dashboardReducers;
  return { appointments, notifications, loading, error };
};

export default connect(
  mapStateToProps,
  {
    getAllAppiontment,
    getAllNotification,
    resetAuthPropsState
  }
)(Dashboard);
