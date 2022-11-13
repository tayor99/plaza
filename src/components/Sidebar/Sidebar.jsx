import { FaTimes } from "react-icons/fa";
import { links } from "../../utils";
import { SidebarContainer } from "./Sidebar.style";

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
          <h1>Plazzza</h1>
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul>
          {links.map((link) => {
            return (
              <li key={link.id} id={link.name}>
                {link.name}
              </li>
            );
          })}
        </ul>
      </aside>
    </SidebarContainer>
  );
};

export default Sidebar;
