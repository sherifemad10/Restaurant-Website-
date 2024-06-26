import { HashLink as Link } from "react-router-hash-link";
import "./navbar.css";
import { BrowserRouter } from "react-router-dom";

const Navbar = () => {
  // open and close Navbar
  const mobile = () => {
    let navList = document.querySelector(".navList");
    navList.style.display = navList.style.display === "flex" ? "none" : "flex";
  };

  return (
    <div className="navbar">
      <div className="nav">
        {/* logo */}
        <div className="logo">
          <h1>Freshy</h1>
        </div>

        {/* NavList */}
        <div className="navList">
          <BrowserRouter>
            <ul>
              <li>
                <Link to="#home" data-text="Home" smooth>
                  Home
                </Link>
              </li>
              <li>
                <Link to="#menu" data-text="Menu" smooth>
                  Menu
                </Link>
              </li>

              <li>
                <Link to="#gallary" data-text="Gallery" smooth>
                  Gallary
                </Link>
              </li>

              <li>
                <Link to="#order" data-text="Make Order" smooth>
                  Make Order
                </Link>
              </li>

              <li>
                <Link to="#about" data-text="About" smooth>
                  About
                </Link>
              </li>
              <li>
                <Link to="#contact" data-text="Contact" smooth>
                  Contact
                </Link>
              </li>

              <li>
                <Link to="#reviews" data-text="Reviews" smooth>
                  Reviews
                </Link>
              </li>
            </ul>
          </BrowserRouter>
        </div>
      </div>

      {/* mobile */}
      <div>
        <label className="hamburger">
          <input type="checkbox" onChange={mobile} />
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            />
            <path className="line" d="M7 16 27 16" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
