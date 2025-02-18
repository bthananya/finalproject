import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css"

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(() => {
    return localStorage.getItem("sb|sidebar-toggle") === "true";
  });

  useEffect(() => {
    localStorage.setItem("sb|sidebar-toggle", isOpen.toString());
  }, [isOpen]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="d-flex" id="wrapper">
      {/* Sidebar */}
      <div className={`border-end bg-white ${isOpen ? "" : "d-none"}`} id="sidebar-wrapper">
        <div className="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
        <div className="list-group list-group-flush">
          <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#">Dashboard</a>
          <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#">Shortcuts</a>
          <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#">Overview</a>
          <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#">Events</a>
          <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#">Profile</a>
          <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#">Status</a>
        </div>
      </div>
      {/* Page content wrapper */}
      <div id="page-content-wrapper">
        {/* Top navigation */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <div className="container-fluid">
            <button className="btn btn-primary" onClick={toggleSidebar}>Toggle Menu</button>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                <li className="nav-item active"><a className="nav-link" href="#">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Link</a></li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Dropdown</a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Page content */}
        <div className="container-fluid">
          <h1 className="mt-4">Simple Sidebar</h1>
          <p>The sidebar will toggle when clicking the button.</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
