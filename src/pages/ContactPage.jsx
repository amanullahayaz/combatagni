import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function ContactPage() {
  const whatsapp1 = "919873820691";
  const whatsapp2 = "919871615871";
  const message =
    "Hello, I am interested in your fire safety solutions. Please share details.";

  return (
    <section className="section-padding bg-light">
      <Container>
        <h2 className="text-center mb-4 fw-bold">Contact Us</h2>
        <p className="text-center text-muted mb-5">
          Get in touch with us for reliable fire safety solutions
        </p>

        <Row className="g-5 align-items-start">
          {/* LEFT INFO */}
         <Col md={5}>
  <div className="contact-info-box">
    <h5 className="fw-semibold mb-3">Get In Touch</h5>

    <p>
      📍 <strong>Office 1:</strong><br />
      1-C-21, Okhla Vihar, Jamia Nagar,<br />
      New Delhi – 110025
    </p>

    <p>
      📍 <strong>Office 2:</strong><br />
      B-18, Okhla Vihar, Jamia Nagar,<br />
      New Delhi – 110025
    </p>

    {/* PHONE + WHATSAPP INLINE */}
<p className="d-flex align-items-center gap-2 flex-wrap">
  📞 <strong>+91 98738 20691</strong>

  {/* WhatsApp */}
  <a
    href={`https://wa.me/919873820691?text=${encodeURIComponent(
      "Hello, I am interested in your fire safety solutions."
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-success btn-sm"
  >
    WhatsApp
  </a>

  {/* Call Now */}
  <a
    href="tel:+919873820691"
    className="btn btn-outline-primary btn-sm"
  >
    Call Now
  </a>
</p>

<p className="d-flex align-items-center gap-2 flex-wrap">
  📞 <strong>+91 98716 15871</strong>

  {/* WhatsApp */}
  <a
    href={`https://wa.me/919871615871?text=${encodeURIComponent(
      "Hello, I am interested in your fire safety solutions."
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-success btn-sm"
  >
    WhatsApp
  </a>

  {/* Call Now */}
  <a
    href="tel:+919871615871"
    className="btn btn-outline-primary btn-sm"
  >
    Call Now
  </a>
</p>


    <p>
      ✉️ info@combatagni.com <br />
      ✉️ combatagni@gmail.com
    </p>
  </div>
</Col>


          {/* RIGHT FORM */}
          <Col md={7}>
            <div className="contact-form-box">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Phone Number" />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Your Message"
                  />
                </Form.Group>

                <Button variant="primary" size="lg">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
