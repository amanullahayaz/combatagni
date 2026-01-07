import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <>
      {/* ABOUT INTRO */}
      <section className="section-padding">
        <Container>
          <Row className="g-5 align-items-start">
            <Col md={7}>
              <h2 className="fw-bold mb-3">
                About Combat Agni Fire Solutions
              </h2>

              <p className="about-text">
                Combat Agni Fire Solutions is a leading manufacturer and
                supplier of fire alarm systems and associated products.
                Established in 2012, the company has built a strong reputation
                for delivering reliable and compliant fire safety solutions.
              </p>

              <p className="about-text">
                Our mission is driven by our philosophy –
                <strong> “The Science of Prevention”</strong>, ensuring safety
                through advanced fire detection and prevention technologies.
              </p>
            </Col>

            <Col md={5}>
              <ul className="about-list">
                <li>Established in 2012</li>
                <li>Manufacturing & Supply</li>
                <li>Residential, Commercial & Industrial Projects</li>
                <li>Experienced & Skilled Team</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* VISION & MISSION */}
      <section className="section-padding bg-light">
        <Container>
          <Row className="g-4">
            <Col md={6}>
              <div className="info-box">
                <h4 className="fw-semibold mb-3">Our Vision</h4>
                <p>
                  To become a trusted leader in fire safety solutions by
                  continuously innovating and delivering reliable systems
                  that protect life, property, and the environment.
                </p>
              </div>
            </Col>

            <Col md={6}>
              <div className="info-box">
                <h4 className="fw-semibold mb-3">Our Mission</h4>
                <p>
                  To design, manufacture, and supply high-quality fire alarm
                  and safety systems that meet industry standards while
                  ensuring customer satisfaction and long-term reliability.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* OWNERS / LEADERSHIP */}
      <section className="section-padding">
        <Container>
          <h3 className="fw-bold text-center mb-5">
            Leadership
          </h3>

          <Row className="justify-content-center g-4">
            <Col md={4}>
              <div className="leader-box text-center">
                <h5 className="fw-semibold mb-1">Afzal Imam</h5>
                <p className="text-muted mb-0">Co-Founder</p>
              </div>
            </Col>

            <Col md={4}>
              <div className="leader-box text-center">
                <h5 className="fw-semibold mb-1">Mohd Danish</h5>
                <p className="text-muted mb-0">Co-Founder</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding bg-light">
        <Container>
          <h3 className="fw-bold text-center mb-5">
            Why Choose Combat Agni
          </h3>

          <Row className="g-4">
            <Col md={3}>
              <div className="why-box">
                <h6>Quality Products</h6>
                <p>Certified and industry-compliant fire safety equipment.</p>
              </div>
            </Col>

            <Col md={3}>
              <div className="why-box">
                <h6>Expert Team</h6>
                <p>Experienced professionals with technical expertise.</p>
              </div>
            </Col>

            <Col md={3}>
              <div className="why-box">
                <h6>Reliable Support</h6>
                <p>Prompt service and customer-focused solutions.</p>
              </div>
            </Col>

            <Col md={3}>
              <div className="why-box">
                <h6>Trusted Partner</h6>
                <p>Long-term partnerships with clients across industries.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* COMPANY STATS */}
      <section className="section-padding">
        <Container>
          <Row className="text-center g-4">
            <Col md={3}>
              <h2 className="text-primary fw-bold">12+</h2>
              <p>Years of Experience</p>
            </Col>

            <Col md={3}>
              <h2 className="text-primary fw-bold">500+</h2>
              <p>Projects Completed</p>
            </Col>

            <Col md={3}>
              <h2 className="text-primary fw-bold">100+</h2>
              <p>Trusted Clients</p>
            </Col>

            <Col md={3}>
              <h2 className="text-primary fw-bold">24×7</h2>
              <p>Support Availability</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
