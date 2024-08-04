import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();
  const clickLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/");
  };
  const linkClass = (path) =>
    location.pathname === path
      ? "text-sm font-medium text-orange-500 underline underline-offset-4"
      : "text-sm font-medium text-white hover:underline underline-offset-4";
  return (
    <>
      <header className="px-4 lg:px-6 h-14 flex items-center bg-black">
        <a href="#" className="flex items-center justify-center">
          <svg
            className="svg-snoweb svg-theme-light"
            height={30}
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 100 100"
            width={30}
            x={0}
            xmlns="http://www.w3.org/2000/svg"
            y={0}
          >
            <path
              fill="white"
              d="M20,28.28l6.76-5.92L63.9,29.12,75.22,18.47a4.6,4.6,0,0,1,6.2-.11h0a4.6,4.6,0,0,1,.44,6.5l-.12.14L70.67,36.73l5.07,38L69.4,80.22l-10.14-33L38.13,65.88l2,14.37-2.84,2.54L33.9,69.26l-1.6.27a2.51,2.51,0,0,1-2.89-2.06,2.31,2.31,0,0,1,0-.83l.27-1.6L17,60.81l2.5-2.53L33.06,60,52.5,40.53Z"
            ></path>
          </svg>

          <span className="sr-only">WhiteSky Aviation</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link to="/" className={linkClass("/")}>
            Recent
          </Link>
          <Link to="/airlines" className={linkClass("/airlines")}>
            Airlines
          </Link>
          <Link to="/airports" className={linkClass("/airports")}>
            Airports
          </Link>
        </nav>
        <div className="ml-auto flex gap-4 sm:gap-6">
          {token ? (
            <div onClick={clickLogout}>
              <Link className="inline-flex h-9 items-center justify-center rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Logout
              </Link>
            </div>
          ) : (
            <div onClick={() => navigate("/login")}>
              <Link className="inline-flex h-9 items-center justify-center rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Login
              </Link>
            </div>
          )}

          {token ? (
            <button
              className="w-8 h-8 rounded-full"
              onClick={() => navigate("/profile")}
            >
              <svg
                className="w-5 h-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
          ) : (
            ""
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
