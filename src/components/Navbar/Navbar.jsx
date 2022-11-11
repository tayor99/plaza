import { links } from "../../utils";
import { Header } from "./Navbar.style";

const Navbar = () => {
  return (
    <Header>
      <div className="navbar__title">
        <h1>Plazza</h1>
      </div>
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
