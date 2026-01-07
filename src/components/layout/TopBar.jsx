import { Container, Row, Col } from "react-bootstrap";

export default function TopBar() {
  return (
    <div className="bg-dark text-white py-1">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="small text-center text-md-start">
            📞 +91 98738 20691 | +91 98716 15871
          </Col>

          <Col md={6} className="small text-center text-md-end">
            ✉️ info@combatagni.com
            ✉️ combatagni@gmail.com
          </Col>
        </Row>
      </Container>
    </div>
  );
}
