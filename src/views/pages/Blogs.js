/*!

=========================================================
* Black Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // type validation form
      required: "",
      email: "",
      number: "",
      url: "",
      source: "",
      destination: "",
      requiredState: "",
      emailState: "",
      numberState: "",
      urlState: "",
      sourceState: "",
      destinationState: "",
    };
  }
  // function that returns true if value is email, false otherwise
  verifyEmail = value => {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  };
  // function that verifies if a string has a given length or not
  verifyLength = (value, length) => {
    if (value.length >= length) {
      return true;
    }
    return false;
  };
  // function that verifies if two strings are equal
  compare = (string1, string2) => {
    if (string1 === string2) {
      return true;
    }
    return false;
  };
  // function that verifies if value contains only numbers
  verifyNumber = value => {
    var numberRex = new RegExp("^[0-9]+$");
    if (numberRex.test(value)) {
      return true;
    }
    return false;
  };
  // verifies if value is a valid URL
  verifyUrl = value => {
    try {
      new URL(value);
      return true;
    } catch (_) {
      return false;
    }
  };
  change = (event, stateName, type, stateNameEqualTo, maxValue) => {
    switch (type) {
      case "email":
        if (this.verifyEmail(event.target.value)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "password":
        if (this.verifyLength(event.target.value, 1)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "equalTo":
        if (this.compare(event.target.value, this.state[stateNameEqualTo])) {
          this.setState({ [stateName + "State"]: "has-success" });
          this.setState({ [stateNameEqualTo + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
          this.setState({ [stateNameEqualTo + "State"]: "has-danger" });
        }
        break;
      case "number":
        if (this.verifyNumber(event.target.value)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "length":
        if (this.verifyLength(event.target.value, stateNameEqualTo)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "max-length":
        if (!this.verifyLength(event.target.value, stateNameEqualTo + 1)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "url":
        if (this.verifyUrl(event.target.value)) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "min-value":
        if (
          this.verifyNumber(event.target.value) &&
          event.target.value >= stateNameEqualTo
        ) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "max-value":
        if (
          this.verifyNumber(event.target.value) &&
          event.target.value <= stateNameEqualTo
        ) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      case "range":
        if (
          this.verifyNumber(event.target.value) &&
          event.target.value >= stateNameEqualTo &&
          event.target.value <= maxValue
        ) {
          this.setState({ [stateName + "State"]: "has-success" });
        } else {
          this.setState({ [stateName + "State"]: "has-danger" });
        }
        break;
      default:
        break;
    }
    this.setState({ [stateName]: event.target.value });
  };
  registerClick = () => {
    if (this.state.registerEmailState === "") {
      this.setState({ registerEmailState: "has-danger" });
    }
    if (
      this.state.registerPasswordState === "" ||
      this.state.registerConfirmPasswordState === ""
    ) {
      this.setState({ registerPasswordState: "has-danger" });
      this.setState({ registerConfirmPasswordState: "has-danger" });
    }
  };
  loginClick = () => {
    if (this.state.loginFullNameState === "") {
      this.setState({ loginFullNameState: "has-danger" });
    }
    if (this.state.loginEmailState === "") {
      this.setState({ loginEmailState: "has-danger" });
    }
    if (this.state.loginPasswordState === "") {
      this.setState({ loginPasswordState: "has-danger" });
    }
  };
  typeClick = () => {
    if (this.state.requiredState === "") {
      this.setState({ requiredState: "has-danger" });
    }
    if (this.state.emailState === "") {
      this.setState({ emailState: "has-danger" });
    }
    if (this.state.numberState === "") {
      this.setState({ numberState: "has-danger" });
    }
    if (this.state.urlState === "") {
      this.setState({ urlState: "has-danger" });
    }
    if (this.state.sourceState === "" || this.state.destinationState === "") {
      this.setState({ sourceState: "has-danger" });
      this.setState({ destinationState: "has-danger" });
    }
  };
  rangeClick = () => {
    if (this.state.minLengthState === "") {
      this.setState({ minLengthState: "has-danger" });
    }
    if (this.state.maxLengthState === "") {
      this.setState({ maxLengthState: "has-danger" });
    }
    if (this.state.rangeState === "") {
      this.setState({ rangeState: "has-danger" });
    }
    if (this.state.minValueState === "") {
      this.setState({ minValueState: "has-danger" });
    }
    if (this.state.maxValueState === "") {
      this.setState({ maxValueState: "has-danger" });
    }
    if (this.state.minState === "") {
      this.setState({ minState: "has-danger" });
    }
    if (this.state.maxState === "") {
      this.setState({ maxState: "has-danger" });
    }
  };
  render() {
    // taking all the states
    let {
      
      // type validation form
      requiredState,
      emailState,
      numberState,
      urlState,
      sourceState,
      destinationState,
    } = this.state;
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Form className="form-horizontal" id="TypeValidation">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h4">Blog Form</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Label sm="2">Blog Title</Label>
                      <Col sm="7">
                        <FormGroup className={requiredState}>
                          <Input
                            name="required"
                            type="text"
                            onChange={e =>
                              this.change(e, "required", "length", 1)
                            }
                          />
                          {this.state.requiredState === "has-danger" ? (
                            <label className="error">
                              This field is required.
                            </label>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col className="label-on-right" tag="label" sm="3">
                        <code></code>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm="2">Email</Label>
                      <Col sm="7">
                        <FormGroup className={emailState}>
                          <Input
                            name="email"
                            type="text"
                            onChange={e => this.change(e, "email", "email")}
                          />
                          {this.state.emailState === "has-danger" ? (
                            <label className="error">
                              Please enter a valid email address.
                            </label>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col className="label-on-right" tag="label" sm="3">
                        <code>type="email"</code>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm="2">Number</Label>
                      <Col sm="7">
                        <FormGroup className={numberState}>
                          <Input
                            name="number"
                            type="text"
                            onChange={e => this.change(e, "number", "number")}
                          />
                          {this.state.numberState === "has-danger" ? (
                            <label className="error">
                              Please enter a valid number.
                            </label>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col className="label-on-right" tag="label" sm="3">
                        <code>type="number"</code>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm="2">Url</Label>
                      <Col sm="7">
                        <FormGroup className={urlState}>
                          <Input
                            name="url"
                            type="text"
                            onChange={e => this.change(e, "url", "url")}
                          />
                          {this.state.urlState === "has-danger" ? (
                            <label className="error">
                              Please enter a valid URL.
                            </label>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col className="label-on-right" tag="label" sm="3">
                        <code>type="url"</code>
                      </Col>
                    </Row>
                    <Row>
                      <Label sm="2">Equal to</Label>
                      <Col sm="3">
                        <FormGroup className={sourceState}>
                          <Input
                            id="idSource"
                            placeholder="#idSource"
                            type="text"
                            onChange={e =>
                              this.change(e, "source", "equalTo", "destination")
                            }
                          />
                        </FormGroup>
                      </Col>
                      <Col sm="3">
                        <FormGroup className={destinationState}>
                          <Input
                            id="idDestination"
                            placeholder="#idDestination"
                            type="text"
                            onChange={e =>
                              this.change(e, "destination", "equalTo", "source")
                            }
                          />
                          {this.state.destinationState === "has-danger" ? (
                            <label className="error">
                              Please enter the same value.
                            </label>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col className="label-on-right" tag="label" sm="4">
                        <code>equalTo="#idSource"</code>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button color="primary" onClick={this.typeClick}>
                      Create Blog
                    </Button>
                  </CardFooter>
                </Card>
              </Form>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Blogs;
