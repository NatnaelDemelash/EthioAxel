import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Service from "./components/Service";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Service />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
