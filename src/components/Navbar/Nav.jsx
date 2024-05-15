import "./navbar.css";

const Nav = () => {
  
  return (
    <div className="container mx-auto lg:px-20 lg:py-8 navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          {/* small */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#">Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a href="#">Submenu 1</a>
                </li>
                <li>
                  <a href="#">Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Item 33333333</a>
            </li>
          </ul>
        </div>
        <img src="logo.jpg" alt="Company Logo" className="h-8 w-auto mr-2" />
        <a className="btn btn-ghost text-xl">ProdSwap</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        {/* lrgr */}
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Queries</a>
          </li>
          <li>
            <details className="details-dropdown">
              <summary>My</summary>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Recommendations For Me</a>
                </li>
                <li>
                  <a href="#">My Queries</a>
                </li>
                <li>
                  <a href="#">My Recommendations</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Nav;
