import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Marketplace from "./components/MarketPlace/Marketplace";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";
import OurApp from "./components/OurApp/OurApp";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="App">
      <Navbar setIsSidebarOpen={setIsSidebarOpen} />
      <Sidebar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
      <Intro />
      <Services />
      <OurApp />
      <Marketplace />
      <Footer />
    </div>
  );
}

export default App;
