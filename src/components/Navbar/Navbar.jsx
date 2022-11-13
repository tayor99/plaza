import { links } from "../../utils";
import { Header } from "./Navbar.style";
import { FaBars } from "react-icons/fa";

const Navbar = ({ setIsSidebarOpen }) => {
  const openSideBar = () => {
    setIsSidebarOpen(true);
  };

  return (
    <Header>
      <div className="navbar__title">
        <h1>Plazza</h1>
      </div>
      <button className="nav-toggle" onClick={openSideBar}>
        <FaBars />
      </button>
      <div className="navlinks">
        <ul>
          {links.map((link) => {
            return (
              <li key={link.id} id={link.name}>
                {link.name}
              </li>
            );
          })}
        </ul>
      </div>
    </Header>
  );
};

export default Navbar;
