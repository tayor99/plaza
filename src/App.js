import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Marketplace from "./components/MarketPlace/Marketplace";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Sidebar from "./components/Sidebar/Sidebar";

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
      <Marketplace />
      <Footer />
    </div>
  );
}

export default App;
