import React, { Component } from 'react';
import { Row, Card, CardTitle, CardText, CardBody, Label, Badge } from 'reactstrap';
import { Colxx } from 'Components/CustomBootstrap';
import AnimatedProgressProvider from 'Components/ReactAnimate';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { easeQuadInOut } from 'd3-ease';
import { connect } from 'react-redux';
import { resetAuthPropsState } from 'Redux/actions';
import 'progress-tracker/app/styles/progress-tracker.css';
import 'react-circular-progressbar/dist/styles.css';
import data from 'Data/patientData.json';

class PatientInfo extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    document.title = 'EMR HEALTH | PATIENT INFO';
  }

  render() {
    return this.props.loading ? (
      <div className="loading" />
    ) : (
      <div className="patient-info-layout">
        <Card>
          <CardBody className="patient-details">
            <img src="/assets/img/james.jpg" alt="Patients Image" />
            <div id="patient-info">
              <Label>LUCY ANG</Label> <Badge color="danger">CRITICAL</Badge>
              <div className="pid">
                <Label>Age:</Label> <CardText>26 years old</CardText>
              </div>
              <div className="pid">
                <Label>Gender:</Label>
                <CardText>Female</CardText>
              </div>
              <div className="pid">
                <Label>Height:</Label> <CardText>5'6"</CardText>
              </div>
              <div className="pid">
                <Label>Weight:</Label> <CardText>118 Ibs</CardText>
              </div>
              <div className="pid">
                <Label>Blood Type:</Label> <CardText>O+</CardText>
              </div>
            </div>
            <div id="patient-info">
              <br />
              <p />
              <div className="pid">
                <Label>D.O.B:</Label>
                <CardText>08/12/1998</CardText>
              </div>
              <div className="pid">
                <Label>Allegries:</Label>
                <CardText>Nuts</CardText>
              </div>
              <div className="pid">
                <Label>Diognosis:</Label>
                <CardText>Ulcerative Colities</CardText>
              </div>
              <div className="pid">
                <Label>Admitted On:</Label>
                <CardText>118 Ibs</CardText>
              </div>
            </div>
          </CardBody>
        </Card>
        <Row className="vitals">
          <Colxx xxs="12" className="section-header">
            <h3>VITAL SIGNS</h3>
          </Colxx>
          <Colxx xxs="12" className="cards">
            <Row>
              <Colxx lg="3" className="mb-4">
                <Card>
                  <CardBody>
                    <CardTitle>GLUCOSE</CardTitle>
                    <AnimatedProgressProvider
                      valueStart={0}
                      valueEnd={(128 / 201) * 100}
                      duration={1.4}
                      easingFunction={easeQuadInOut}
                    >
                      {value => {
                        const roundedValue = Math.round(value);
                        return (
                          <CircularProgressbar
                            value={value}
                            text={`${roundedValue}%`}
                            styles={buildStyles({ pathTransition: 'none' })}
                          />
                        );
                      }}
                    </AnimatedProgressProvider>
                    <Badge color="primary">128 mg/dL</Badge>
                  </CardBody>
                </Card>
              </Colxx>
              <Colxx lg="3" className="mb-4">
                <Card>
                  <CardBody>
                    <CardTitle>TEMPERATURE</CardTitle>
                    <AnimatedProgressProvider
                      valueStart={0}
                      valueEnd={37}
                      duration={1.4}
                      easingFunction={easeQuadInOut}
                    >
                      {value => {
                        const roundedValue = Math.round(value);
                        return (
                          <CircularProgressbar
                            value={value}
                            text={`${roundedValue}°C`}
                            styles={buildStyles({ pathTransition: 'none' })}
                          />
                        );
                      }}
                    </AnimatedProgressProvider>
                    <Badge color="primary">37°C</Badge>
                  </CardBody>
                </Card>
              </Colxx>
              <Colxx lg="3" className="mb-4">
                <Card>
                  <CardBody>
                    <CardTitle>BPM</CardTitle>
                    <AnimatedProgressProvider
                      valueStart={0}
                      valueEnd={55}
                      duration={1.4}
                      easingFunction={easeQuadInOut}
                    >
                      {value => {
                        const roundedValue = Math.round(value);
                        return (
                          <CircularProgressbar
                            value={value}
                            text={`${roundedValue}`}
                            styles={buildStyles({ pathTransition: 'none' })}
                          />
                        );
                      }}
                    </AnimatedProgressProvider>
                    <Badge color="primary">55 bpm</Badge>
                  </CardBody>
                </Card>
              </Colxx>
              <Colxx lg="3" className="mb-4">
                <Card>
                  <CardBody>
                    <CardTitle>GLUCOSE</CardTitle>
                    <AnimatedProgressProvider
                      valueStart={0}
                      valueEnd={(128 / 201) * 100}
                      duration={1.4}
                      easingFunction={easeQuadInOut}
                    >
                      {value => {
                        const roundedValue = Math.round(value);
                        return (
                          <CircularProgressbar
                            value={value}
                            text={`${roundedValue}%`}
                            styles={buildStyles({ pathTransition: 'none' })}
                          />
                        );
                      }}
                    </AnimatedProgressProvider>
                    <Badge color="primary">128 mg/dL</Badge>
                  </CardBody>
                </Card>
              </Colxx>
            </Row>
          </Colxx>
        </Row>
        <Card className="medication-progress">
          <CardBody>
            <CardTitle>MEDICATION PROGRESS</CardTitle>
            <ul className="progress-tracker progress-tracker--text progress-tracker--text-top">
              <li className="progress-step is-complete">
                <div className="progress-text">02/06/2018</div>
                <span className="progress-marker" />
                <div className="progress-text progress-text--dotted progress-text--dotted-1">
                  <Badge color="success">Sulfaslazine - 2g</Badge>
                </div>
              </li>
              <li className="progress-step is-active">
                <div className="progress-text">02/06/2018</div>
                <span className="progress-marker" />
                <div className="progress-text progress-text--dotted progress-text--dotted-3">
                  <Badge color="warning">Asacol - 2g</Badge>
                </div>
              </li>
              <li className="progress-step">
                <div className="progress-text">02/06/2018</div>
                <span className="progress-marker" />
                <div className="progress-text progress-text--dotted progress-text--dotted-3">
                  <Badge color="info">Budesonide - 6mg</Badge>
                </div>
              </li>
            </ul>
          </CardBody>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({ patientInfoReducers }) => {
  const { data, loading, error } = patientInfoReducers;
  return { data, loading, error };
};

export default connect(
  mapStateToProps,
  {
    resetAuthPropsState
  }
)(PatientInfo);
