import { Container, Row, Col, Button } from "react-bootstrap";
import {Link} from "react-router-dom";
export default function About() {
  return (
    <section className="section-padding">
      <Container>
        <Row className="align-items-center g-5">
          <Col md={6}>
            <h2 className="about-title">
              About Combat Agni Fire Solutions
            </h2>

            <p className="about-text">
              Combat Agni Fire Solutions is a trusted manufacturer and
              supplier of fire alarm systems and associated products.
              Established in 2012, we deliver reliable and
              industry-compliant fire safety solutions.
            </p>

            <p className="about-text">
              Driven by our philosophy,
              <strong> “The Science of Prevention”</strong>, we focus on
              protecting lives and property through advanced fire
              detection and prevention technologies.
            </p>

            <Button as={Link} to="/about" variant = "primary">Read More</Button>
             
          </Col>

          <Col md={6}>
            <ul className="about-list">
              <li>Established in 2012</li>
              <li>Manufacturing & Supply</li>
              <li>Fire Alarm & Detection Systems</li>
              <li>Commercial & Industrial Solutions</li>
              <li>Trusted Fire Safety Partner</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
