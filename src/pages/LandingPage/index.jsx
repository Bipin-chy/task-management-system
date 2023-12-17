import React, { useEffect, useState } from "react";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";

// axios imports
import axios from "axios";

import "./styles.css";

// assets imports
import headerBanner from "../../assets/images/landing-banner.png";
import Card from "../../commonComponents/Card";
import featureCardDatas from "../../datas/featureCardDatas";

const LandingPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8888/task-management-system/server/api/register.php"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching datassss:", error);
      }
    };

    fetchData();
  }, []);

  console.log("hello", { data });

  return (
    <React.Fragment>
      <Navbar sticky="top" expand="lg" className="navbar-conatiner">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/logo.svg"
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
            </Nav>
            <Nav>
              <Nav.Link href="/login" className="me-4">
                Login
              </Nav.Link>
              <Button className="btn-primary">Get Started</Button>
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

      <section id="features" className="mt-5">
        <Container>
          <h1 className="text-center text-uppercase mb-5">Features</h1>
          <Row className="mt-5">
            {featureCardDatas.map((item, index) => (
              <Col xs={12} sm={6} md={4}>
                <Card
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  index={index}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default LandingPage;
