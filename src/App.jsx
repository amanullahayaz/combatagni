import TopBar from "./components/layout/TopBar";
import MainNavbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingWhatsApp from "./components/common/FloatingWhatsApp";

import Router from "./router";

function App() {
  return (
    <>
      <TopBar />
      <MainNavbar />
      <Router />
      <Footer />
      <FloatingWhatsApp /> {/* GLOBAL BUTTON */}
    </>
  );
}

export default App;
