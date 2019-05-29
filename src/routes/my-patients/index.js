import React, { Component } from 'react';
import {
  Row,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Label,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  Modal,
  ModalFooter,
  Button,
  Input
} from 'reactstrap';
import { Colxx } from 'Components/CustomBootstrap';
import Select from 'react-select';
import { connect } from 'react-redux';
import { getAllMyPatient, resetAuthPropsState } from 'Redux/actions';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

class MyPatients extends Component {
  constructor() {
    super();
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      searchModalOpen: false
    };
  }

  toggleModal() {
    this.setState({
      searchModalOpen: !this.state.searchModalOpen
    });
  }

  componentDidMount() {
    document.title = 'EMR HEALTH | MY PATIENTS';
    this.props.getAllMyPatient();
  }

  gotoVitals = index => {
    const state = this.props.myPatients[index];
    this.props.history.push({
      pathname: 'patient-info',
      state
    });
  };

  render() {
    return this.props.loading ? (
      <div className="loading" />
    ) : (
      <div className="my-patients-layout">
        <Navbar expand="md">
          <NavbarBrand href="/">Patients List</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem className="select-link">
              <Label>Sort By: </Label>
              <Select options={options} className="select-dropdown" />
            </NavItem>
            <NavItem>
              <div className="search-bar input-group">
                <Button className="btn btn-link" id="search-button" onClick={this.toggleModal}>
                  <i className="tim-icons icon-zoom-split" />
                </Button>
              </div>
            </NavItem>
          </Nav>
        </Navbar>
        <Modal id="searchModal" isOpen={this.state.searchModalOpen} toggle={this.toggleModal}>
          <div className="modal-header">
            <Input type="text" placeholder="SEARCH" />
            <Button close onClick={this.toggleModal}>
              <i className="tim-icons icon-simple-remove" />
            </Button>
          </div>
          <ModalFooter />
        </Modal>
        <Row className="patients-list">
          {this.props.myPatients.length > 0 &&
            this.props.myPatients.map((item, index) => (
              <Colxx
                xxs={6}
                xs={4}
                sm={3}
                md={2}
                className={`mb-2`}
                key={index}
                onClick={() => this.gotoVitals(index)}
              >
                <Card>
                  <CardImg top width="100%" src={item.image} alt="Patients Image" />
                  <CardBody>
                    <CardTitle>{item.patientName}</CardTitle>
                    <CardText>{item.sicknessName}</CardText>
                  </CardBody>
                </Card>
              </Colxx>
            ))}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ myPatientsReducers }) => {
  const { myPatients, loading, error } = myPatientsReducers;
  return { myPatients, loading, error };
};

export default connect(
  mapStateToProps,
  {
    getAllMyPatient,
    resetAuthPropsState
  }
)(MyPatients);
