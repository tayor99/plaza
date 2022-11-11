import Intro from "./components/Intro/Intro";
import Marketplace from "./components/MarketPlace/Marketplace";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Marketplace />
    </div>
  );
}

export default App;
