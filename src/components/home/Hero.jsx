import { Container, Button, Carousel } from "react-bootstrap";

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
              backgroundImage: "url('/images/hero/hero-1.png')",
            }}
          >
            <div className="hero-overlay">
              <Container>
                <h1 className="fw-bold display-5">
                  Complete Fire Safety Solutions
                </h1>
                <p className="lead">The Science of Prevention</p>
                <Button variant="primary">Get Quote</Button>
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
                <Button variant="primary" href="products">View Products</Button>
              </Container>
            </div>
          </div>
        </Carousel.Item>

        {/* SLIDE 3 */}
        <Carousel.Item className="hero-slide">
          <div
            className="hero-bg"
            style={{
              backgroundImage: "url('/images/hero/hero-3.jpeg')",
            }}
          >
            <div className="hero-overlay">
              <Container>
                <h1 className="fw-bold display-5">
                  Protecting Life & Property
                </h1>
                <p className="lead">Since 2012</p>
                <Button variant="primary" href="/contact">Contact Us</Button>
              </Container>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
