import { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";

const products = [
  {
    id: 1,
    name: "Fire Alarm Control Panel",
    desc: "Centralized control panel for fire alarm systems.",
    shortDesc: "Used to monitor, control, and indicate fire alarm conditions.",
    img: "/images/products/fire-alarm-panel.png"
  },
  {
    id: 2,
    name: "Smoke Detector",
    desc: "Detects smoke particles and triggers alarm instantly.",
    shortDesc: "Early fire detection device installed on ceilings.",
    img: "/images/products/smoke-detector.png"
  },
  {
    id: 3,
    name: "Heat Detector",
    desc: "Detects abnormal temperature rise.",
    shortDesc: "Activates alarm when temperature exceeds safe limits.",
    img: "/images/products/heat-detector.png"
  },
  {
    id: 4,
    name: "Analogue Heat Detector",
    desc: "Advanced heat sensing detector for precision.",
    shortDesc: "Provides accurate temperature monitoring.",
    img: "/images/products/analog.jpeg"
  },
  {
    id: 5,
    name: "Manual Call Point (MCP)",
    desc: "Manual fire alarm activation device.",
    shortDesc: "Allows manual triggering of fire alarm during emergencies.",
    img: "/images/products/MCB.webp"
  },
  {
    id: 6,
    name: "Industrial Hooter",
    desc: "High-decibel hooter for industrial alerts.",
    shortDesc: "Used for loud audible warning in factories and plants.",
    img: "/images/products/industrialhooter.jpeg"
  },
  {
    id: 7,
    name: "AC Siren",
    desc: "Powerful siren for fire alarm systems.",
    shortDesc: "Produces high-intensity sound alerts.",
    img: "/images/products/ac-siren-1.webp"
  },
  {
    id: 8,
    name: "Combo Hooter",
    desc: "Hooter with combined alarm functions.",
    shortDesc: "Combines sound and alert signals in one unit.",
    img: "/images/products/combohooter.webp"
  },
  {
    id: 9,
    name: "Emergency Exit Light",
    desc: "Illuminated exit signage for emergencies.",
    shortDesc: "Guides occupants safely during evacuation.",
    img: "/images/products/emergency.webp"
  },
  {
    id: 10,
    name: "Fire Response Indicator",
    desc: "Indicates fire response and alarm location.",
    shortDesc: "Shows exact zone or location of fire alarm.",
    img: "/images/products/fire-response-indicator.webp"
  },
  {
    id: 11,
    name: "Fire Fighting Panel",
    desc: "Control panel for firefighting systems.",
    shortDesc: "Manages firefighting equipment operations.",
    img: "/images/products/firefightingpanel.webp"
  },
  {
    id: 12,
    name: "Fire Fighting Equipment",
    desc: "Essential firefighting safety equipment.",
    shortDesc: "Supports manual fire suppression activities.",
    img: "/images/products/firefightingequip.webp"
  }
];

export default function Products() {
  const [activeProduct, setActiveProduct] = useState(null);

  return (
    <section className="section-padding bg-light">
      <Container>
        <h2 className="text-center mb-5">Our Products</h2>

        <Row className="g-4">
          {products.map((product) => (
            <Col md={4} lg={3} key={product.id}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={product.img}
                  alt={product.name}
                  style={{ height: "180px", objectFit: "cover" }}
                />

                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold">
                    {product.name}
                  </Card.Title>

                  <Card.Text className="flex-grow-1">
                    {product.desc}
                  </Card.Text>

                  <Button
                    variant="primary"
                    onClick={() => setActiveProduct(product)}
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* PRODUCT MODAL */}
      {activeProduct && (
        <Modal show centered onHide={() => setActiveProduct(null)}>
          <Modal.Header closeButton>
            <Modal.Title>{activeProduct.name}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <img
              src={activeProduct.img}
              alt={activeProduct.name}
              className="img-fluid mb-3"
            />

            <p className="fw-semibold">
              {activeProduct.shortDesc}
            </p>

            <p>{activeProduct.desc}</p>

            <p className="mb-0">
              For specifications & pricing, contact:
              <br />
              📞 +91 98738 20691 <br />
              📞 +91 98716 15871
            </p>
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setActiveProduct(null)}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </section>
  );
}
