import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <Container>
        <Row className="text-center">
          <Col md={6}>
            <p className="mb-0">&copy; {new Date().getFullYear()} YourCompany. All Rights Reserved.</p>
          </Col>
          <Col md={6}>
            <p className="mb-0">
              <a href="/privacy" className="text-light text-decoration-none">Privacy Policy</a> | 
              <a href="/terms" className="text-light text-decoration-none ms-2">Terms of Service</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
