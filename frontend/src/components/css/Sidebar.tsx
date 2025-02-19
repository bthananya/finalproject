import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Style.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="d-flex" id="wrapper" style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <div
        id="sidebar-wrapper"
        className={`border-end bg-white ${isOpen ? "open" : "closed"}`}
      >
        <div className="sidebar-heading border-bottom text-center">
          {isOpen ? <img src="src/assets/logo/logo_white.png" alt="Logo" className="logo-img" /> : <img src="src/assets/logo/logo_white.png" alt="Logo" className="logo-img" />}
        </div>
        <div className="list-group list-group-flush">
          <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#">Home</a>
          <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#">สนามแบดมินตัน</a>
          <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#">รายการแข่งขัน</a>
        </div>
      </div>

      {/* Page content */}
      <div id="page-content-wrapper">
        <nav className="navbar  border-bottom">
          <div className="container-fluid">
          <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} className="toggle-btn" />
          </div>
        </nav>

        <div className="container">
          <main className="content-main mt-2">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
