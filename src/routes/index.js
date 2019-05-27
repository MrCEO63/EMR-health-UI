import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';

import PerfectScrollbar from 'react-perfect-scrollbar';

import TopNav from 'Containers/TopNav';
import Sidebar from 'Containers/Sidebar';

import Dashboard from './dashboard';
import Appointments from './appointments';
import Orders from './orders';
import MyPatients from './my-patients';
import Messages from './messages';

const Dashboards = ({ match }) => (
  <div className="wrapper" style={{ position: 'relative' }}>
    <Sidebar />
    <PerfectScrollbar
      className="main-panel"
      options={{ suppressScrollX: true, wheelPropagation: false }}
    >
      <TopNav />
      <div className="content">
        <Switch>
          <Redirect exact from={`${match.url}`} to={`${match.url}/dashboard`} />
          <Route path={`${match.url}/dashboard`} component={Dashboard} />
          <Route path={`${match.url}/appointments`} component={Appointments} />
          <Route path={`${match.url}/orders`} component={Orders} />
          <Route path={`${match.url}/my-patients`} component={MyPatients} />
          <Route path={`${match.url}/messages`} component={Messages} />
          <Redirect to="/error" />
        </Switch>
      </div>
      <footer className="footer">
        <div className="container-fluid">
          <nav>
            <Nav>
              <NavItem>
                <a href="https://www.linkedin.com/in/chinedu-ekene-okpala/" target="_blank">
                  linkedIn
                </a>
              </NavItem>
              <NavItem>
                <a href="https://github.com/MrCEO63" target="_blank">
                  GitHub
                </a>
              </NavItem>
              <NavItem>
                <a href="http://twitter.com/nedu63" target="_blank">
                  Twitter
                </a>
              </NavItem>
            </Nav>
          </nav>
          <div className="copyright float-right">
            © 2019 made with <i className="tim-icons icon-heart-2" /> by{' '}
            <a href="https://www.linkedin.com/in/chinedu-ekene-okpala/" target="_blank">
              MrCEO63
            </a>{' '}
            for a better <i className="tim-icons icon-sound-wave" /> health.
          </div>
        </div>
      </footer>
    </PerfectScrollbar>
  </div>
);
export default Dashboards;
