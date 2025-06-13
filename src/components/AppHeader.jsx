import { NavLink } from "react-router-dom";

const AppHeader = () => {
  const links = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Personaggi",
      url: "/personaggi",
    },
  ];

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {links.map((curLink, index) => (
                <li className="nav-item" key={index}>
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to={curLink.url}
                  >
                    {curLink.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
