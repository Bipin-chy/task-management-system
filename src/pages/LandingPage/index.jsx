import React, { useState } from "react";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";

import "./styles.css";

// assets imports
import headerBanner from "../../assets/images/landing-banner.png";
import Card from "../../commonComponents/Card";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Navbar sticky="top" expand="lg" className="navbar-conatiner">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/logo.jpg"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="task managements system logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/login" className="me-4">
                Login
              </Nav.Link>
              {/* <Nav.Link href="/register"> */}
              <Button className="btn-primary">Get Started</Button>
              {/* </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section id="banner-container" className="mt-0 mt-sm-5 h-100">
        <Container>
          <Row>
            <Col xs={{ order: 1, span: 12 }} md={{ order: 0, span: 6 }}>
              <div className="banner-content h-100 d-flex flex-column justify-content-center text-start">
                <h1>Task Management System</h1>
                <q className="mt-0 mt-sm-3">
                  A well-managed task is a step toward success. Prioritize,
                  focus, and execute each task with intention, transforming
                  aspirations into tangible achievements in the journey of life.
                  Productivity is not about doing more; it's about doing the
                  right things. Task management is the compass guiding you to
                  achieve your goals with purpose and efficiency.
                </q>
                <Button className="btn-primary w-25 mt-3 mt-sm-5">
                  Get Started
                </Button>
              </div>
            </Col>
            <Col xs={{ order: 0, span: 12 }} md={{ order: 1, span: 6 }}>
              <img
                src={headerBanner}
                className="img-fluid"
                alt="task managements system logo"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section id="features">
        <Container>
          <Row>
            <Col>
              <Card />
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default LandingPage;
