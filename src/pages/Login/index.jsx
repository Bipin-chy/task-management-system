import React from "react";
import { useAuth } from "../../utils/AuthContext";
import { Button, Col, Container, Form, Nav, Row } from "react-bootstrap";

// import styles
import "./styles.css";
// import assets
// import logo from "../../assets/images/";

const Login = () => {
  const { authenticated } = useAuth();

  console.log({ authenticated });
  return (
    <React.Fragment>
      <div className="login-container">
        <Row>
          <Col xs={12} md={6} className="login-image">
            <img src="./logo.svg" alt="" />
          </Col>
          <Col xs={12} md={6}>
            <Container className="h-100 mt-4">
              <div className="login-content h-100 d-flex flex-column justify-content-between">
                <div className="d-flex justify-content-between">
                  <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                  </Nav>
                  <Nav.Link href="/register">
                    <Button className="btn-primary">Register</Button>
                  </Nav.Link>
                </div>

                <div className="login-form">
                  <h2 className="text-center">Login</h2>
                  <Form className="mt-5">
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label className="w-100 text-start">
                        Email address <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="email"
                        size="lg"
                        placeholder="name@example.com"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                      <Form.Label className="w-100 text-start">
                        Password <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control type="password" size="lg" />
                    </Form.Group>
                  </Form>
                </div>

                <div className="account">
                  <p>
                    Don't have an account?{" "}
                    <Nav.Link href="/register" className="d-inline">
                      Register
                    </Nav.Link>
                  </p>
                </div>
              </div>
            </Container>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Login;
