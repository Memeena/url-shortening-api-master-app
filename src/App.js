import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Header from "./components/Header/Header";
import Features from "./components/Features/Features";
import Cta from "./components/Cta/Cta";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Header />

      <Features />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
