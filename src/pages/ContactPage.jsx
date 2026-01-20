import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function ContactPage() {
  return (
    <section className="section-padding bg-light">
      <Container>
        <h2 className="text-center mb-4 fw-bold">Contact Us</h2>
        <p className="text-center text-muted mb-5">
          Get in touch with us for reliable fire safety solutions
        </p>

        <Row className="g-5">
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

              {/* PHONE 1 */}
              <p className="d-flex align-items-center gap-2 flex-wrap">
                📞 <strong>+91 98738 20691</strong>
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
                  className="btn btn-outline-primary btn-sm"
                >
                  Call Now
                </a>
              </p>

              {/* PHONE 2 */}
              <p className="d-flex align-items-center gap-2 flex-wrap">
                📞 <strong>+91 98716 15871</strong>
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
            <Form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              {/* REQUIRED hidden fields */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="Your Message"
                  required
                />
              </Form.Group>

              <Button type="submit" variant="danger">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
