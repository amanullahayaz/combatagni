import { Container, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero-section">
      <Carousel
        controls
        indicators
        interval={4000}
        pause={false}
        className="hero-carousel"
      >
        {/* SLIDE 1 */}
        <Carousel.Item className="hero-slide">
          <div
            className="hero-bg"
            style={{
              backgroundImage: "url('/images/hero/hero-1.jpeg')",
            }}
          >
            <div className="hero-overlay">
              <Container>
                {<h1 className="fw-bold display-5">
                  Complete Fire Safety Solutions
                </h1> }
                <p className="lead">The Science of Prevention</p>
                <Button as={Link} to="/contact" variant="primary">
                  Get Quote
                </Button> 
              </Container>
            </div>
          </div>
        </Carousel.Item>

        {/* SLIDE 2 */}
        <Carousel.Item className="hero-slide">
          <div
            className="hero-bg"
            style={{
              backgroundImage: "url('/images/hero/hero-2.png')",
            }}
          >
            <div className="hero-overlay">
              <Container>
                <h1 className="fw-bold display-5">
                  Fire Alarm & Detection Systems
                </h1>
                <p className="lead">
                  Reliable • Certified • Trusted
                </p>
                <Button as={Link} to="/products" variant="primary">
                  View Products
                </Button>
              </Container>
            </div>
          </div>
        </Carousel.Item>

        {/* SLIDE 3 */}
        <Carousel.Item className="hero-slide">
          <div
            className="hero-bg"
            style={{
              backgroundImage: "url('/images/hero/hero-3.png')",
            }}
          >
            <div className="hero-overlay">
              <Container>
                <h1 className="fw-bold display-5">
                  Protecting Life & Property
                </h1>
                <p className="lead">Since 2012</p>
                <Button as={Link} to="/contact" variant="primary">
                  Contact Us
                </Button>
              </Container>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
