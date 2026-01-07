import { Container, Row, Col, Button } from "react-bootstrap";

export default function ContactCTA() {
  return (
    <section className="bg-dark text-white py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={8}>
            <h3 className="fw-bold">
              Need Reliable Fire Safety Solutions?
            </h3>
            <p className="mb-0">
              Get in touch with Combat Agni Fire Solutions today.
              Our experts are ready to assist you.
            </p>
          </Col>

          <Col md={4} className="text-md-end mt-3 mt-md-0">
            <Button variant="primary" href="/contact">
              Contact Us
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
