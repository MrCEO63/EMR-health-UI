import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="sidebar">
        <PerfectScrollbar
          className="sidebar-wrapper"
          options={{ suppressScrollX: true, wheelPropagation: false }}
        >
          <div className="logo">
            <img src="/assets/img/doctor.png" />
            <h4>
              <span>*</span> Welcome <br />
              Dr Marcos Ellis
            </h4>
          </div>
          <Nav>
            <NavItem>
              <NavLink to="/app/dashboard" className="btn">
                <i className="tim-icons icon-chart-pie-36" />
                <p>Dashboard</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/app/my-patients" className="btn">
                <i className="tim-icons icon-single-02" />
                <p>My Patients</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/app/appointments" className="btn">
                <i className="tim-icons icon-calendar-60" />
                <p>Appointments</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/app/orders" className="btn">
                <i className="tim-icons icon-bullet-list-67" />
                <p>Orders</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/app/messages" className="btn">
                <i className="tim-icons icon-email-85" />
                <p>Messages</p>
              </NavLink>
            </NavItem>
          </Nav>
        </PerfectScrollbar>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};
export default withRouter(connect(mapStateToProps)(Sidebar));
