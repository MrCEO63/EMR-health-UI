import React, { Component } from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  NavItem,
  DropdownMenu
} from 'reactstrap';
import { Separator } from 'Components/CustomBootstrap';

import { NavLink, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <div className="navbar-toggle d-inline">
              <button type="button" className="navbar-toggler">
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
              aria-controls="navigation-index"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
          </div>
          <div className="brand-name">
            <div>HEALTH SOLUTIONS</div>
          </div>
          <div className="collapse navbar-collapse" id="navigation">
            <ul className="navbar-nav ml-auto ">
              <li>
                <UncontrolledDropdown>
                  <DropdownToggle>
                    <div className="notification d-none d-lg-block d-xl-block" />
                    <i className="tim-icons icon-sound-wave" />
                    <p className="d-lg-none">New Notifications</p>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-right dropdown-navbar">
                    <DropdownItem>
                      <Link to="#" className="nav-item">
                        Mike John responded to your email
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="#" className="nav-item">
                        You have 5 more tasks
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="#" className="nav-item">
                        Your friend Michael is in town
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="#" className="nav-item">
                        Another notification
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="#" className="nav-item">
                        Another one
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </li>
              <li>
                <UncontrolledDropdown>
                  <DropdownToggle>
                    <div className="photo">
                      <img src="/assets/img/doctor.png" />
                    </div>
                    <b className="caret d-none d-lg-block d-xl-block" />
                    <p className="d-lg-none">Log out</p>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-right dropdown-navbar">
                    <DropdownItem>
                      <Link to="#" className="nav-item">
                        Profile
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="#" className="nav-item">
                        Settings
                      </Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <Link to="#" className="nav-item">
                        Log out
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </li>
              <Separator className="d-lg-none" />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({}) => {
  return {};
};
export default TopNav;
// withRouter(
//   connect(
//     mapStateToProps,
//     {}
//   )(TopNav)
// );
