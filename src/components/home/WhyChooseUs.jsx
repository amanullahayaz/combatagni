import { Container, Row, Col, Card } from "react-bootstrap";

const reasons = [
  {
    title: "Established Expertise",
    desc: "Serving the fire safety industry since 2012 with proven experience."
  },
  {
    title: "Quality Manufacturing",
    desc: "Manufacturing and supplying reliable fire alarm systems and products."
  },
  {
    title: "Safety First Approach",
    desc: "Every solution is designed with life and property protection in mind."
  },
  {
    title: "Wide Product Range",
    desc: "Fire alarm panels, detectors, hooters, exit lights and more."
  },
  {
    title: "Professional Support",
    desc: "Dedicated assistance for product selection and technical guidance."
  },
  {
    title: "Trusted by Clients",
    desc: "Preferred fire safety partner for residential, commercial & industrial sites."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding">
      <Container>
        <h2 className="text-center mb-5">Why Choose Us?</h2>

        <Row className="g-4">
          {reasons.map((item, index) => (
            <Col md={4} key={index}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="fw-bold">
                    {item.title}
                  </Card.Title>
                  <Card.Text className="text-muted">
                    {item.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
