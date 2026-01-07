import { Container, Row, Col, Card } from "react-bootstrap";

export default function Services() {
  return (
    <section className="section-padding">
      <Container>
        <h2 className="text-center mb-5">Our Services</h2>
        <Row>
          {["Fire Extinguishers", "Fire Alarm System", "AMC Services"].map(
            (item, i) => (
              <Col md={4} key={i}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <Card.Title>{item}</Card.Title>
                    <Card.Text>
                      Installation, maintenance & support.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
          )}
        </Row>
      </Container>
    </section>
  );
}
