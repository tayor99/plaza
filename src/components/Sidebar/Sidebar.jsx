import { FaTimes } from "react-icons/fa";
import { links } from "../../utils";
import { SidebarContainer } from "./Sidebar.style";
import Logo from "../../Asset/logo-3.png";

const Sidebar = ({ setIsSidebarOpen, isSidebarOpen }) => {
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <img src={Logo} alt="company-logo" />
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul>
          {links.map((link) => {
            return (
              <li key={link.id} onClick={closeSidebar}>
                <a href={link.id}>{link.name}</a>
              </li>
            );
          })}
        </ul>
      </aside>
    </SidebarContainer>
  );
};

export default Sidebar;
