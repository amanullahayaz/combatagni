import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <Container>
        <Row className="mb-4 g-4">
          {/* COMPANY INFO */}
          <Col md={4}>
            <h5 className="fw-bold">Combat Agni Fire Solutions</h5>
            <p className="small mb-1">The Science of Prevention</p>
            <p className="small">
              Manufacturing & Supply of Fire Alarm Systems and associated
              products since 2012.
            </p>
          </Col>

          {/* CONTACT INFO */}
          <Col md={4}>
            <h5 className="fw-bold">Contact Info</h5>

            <p className="small mb-2">
              📍 Okhla Vihar, Jamia Nagar,<br />
              New Delhi – 110025
            </p>

            {/* PHONE + CTA */}
            <p className="small d-flex align-items-center gap-2 flex-wrap mb-2">
              📞 +91 98738 20691
              <a
                href="https://wa.me/919873820691"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-sm"
              >
                WhatsApp
              </a>
              <a
                href="tel:+919873820691"
                className="btn btn-outline-light btn-sm"
              >
                Call Now
              </a>
            </p>

            <p className="small d-flex align-items-center gap-2 flex-wrap mb-2">
              📞 +91 98716 15871
              <a
                href="https://wa.me/919871615871"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-sm"
              >
                WhatsApp
              </a>
              <a
                href="tel:+919871615871"
                className="btn btn-outline-light btn-sm"
              >
                Call Now
              </a>
            </p>

            <b className="small mb-0">
              ✉️ info@combatagni.com
              ✉️ combatagni@gmail.com
            </b>
          </Col>

          {/* BUSINESS / SERVICES */}
       {/* BUSINESS PROFILES */}
<Col md={4}>
  <h5 className="fw-bold">Business Profiles</h5>

  <p className="small mb-2">
    🔗{" "}
    <a
      href="https://www.indiamart.com/combat-agnifire-solutions/profile.html?srsltid=AfmBOoptC0fGj4IXo7bPh52CGd5SxoK_fpcQwyqaQlht5nlbCKJAmGel"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white text-decoration-none"
    >
      IndiaMART – Combat Agni Fire Solutions
    </a>
  </p>

  <p className="small mb-0">
    🔗{" "}
    <a
      href="https://www.tradeindia.com/combat-agni-fire-solutions-41153382/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white text-decoration-none"
    >
      TradeIndia – Combat Agni Fire Solutions
    </a>
  </p>
</Col>

        </Row>

        <hr className="border-secondary" />

        <p className="text-center small mb-0">
          © 2026 Combat Agni Fire Solutions. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}
