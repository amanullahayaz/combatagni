import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Products from "../components/home/Products";
import ContactCTA from "../components/home/ContactCTA";
import WhyChooseUs from "../components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Products />
      <WhyChooseUs/>
      <ContactCTA />
    </>
  );
}
