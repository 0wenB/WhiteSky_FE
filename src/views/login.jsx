import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://whitesky-server-40a153b2f506.herokuapp.com/login",
        userInput
      );
      // console.log(response.data);
      const token = response.data.access_token;
      localStorage.setItem("token", token);
      navigate("/");
    } catch (error) {
      if (error.response?.data?.error) {
        setError([error.response?.data?.error]);
      } else {
        setError([error.message]);
      }
    }
  };
  return (
    <section className="flex min-h-screen overflow-hidden">
      <main
        className="w-[60%] bg-red-400 p-7 space-y-5 hidden md:block"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          opacity: "0.8",
          backgroundSize: "cover",
        }}
      >
        <header>
          <nav className="p-3">
            <h4 className="text-xl text-white font-normal uppercase font-montserrat">
              WhiteSky
            </h4>
          </nav>
        </header>
      </main>

      <main className="flex-auto bg-white space-y-7 p-2">
        <header className="py-5 pl-5 my-4">
          <nav>
            <ul className="flex items-center justify-end space-x-4">
              <a href="#">
                <li></li>
              </a>
            </ul>
          </nav>
        </header>

        <div className="flex-col items-center justify-center p-5">
          <div className="flex items-center justify-center">
            <h4 className="text-[2rem]  text-black font-poppins ">Log in</h4>
            <svg
              fill="#000000"
              width="64px"
              height="64px"
              viewBox="0 0 256 256"
              id="Flat"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="0.512"
              />
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M211.68628,44.20117a28.02993,28.02993,0,0,0-39.59766,0,3.99779,3.99779,0,0,0-.62891.81445L142.78589,75.34277,57.25464,44.24121a3.99914,3.99914,0,0,0-4.19581.93066l-24,24a3.99981,3.99981,0,0,0,.60987,6.15625l67.94043,45.29395L78.23071,140H55.88745a4.00164,4.00164,0,0,0-2.82862,1.17187l-24,24a4.00013,4.00013,0,0,0,1.54639,6.61719l39.936,13.51172,13.5581,39.9834a3.99974,3.99974,0,0,0,6.6167,1.54394l24-24A4,4,0,0,0,115.88745,200V177.77051l19.48144-17.69922,45.21582,66.18555a4.00062,4.00062,0,0,0,6.13135.57128l24-24a4.00075,4.00075,0,0,0,.93067-4.19531L180.5476,113.11133l31.7295-29.793a3.98575,3.98575,0,0,0,.75048-.957A28.03809,28.03809,0,0,0,211.68628,44.20117Zm-5.65674,33.94141a3.96731,3.96731,0,0,0-.34375.39062L173.14917,109.084a4.00086,4.00086,0,0,0-1.021,4.28321l31.1294,85.60547-18.78809,18.78808-45.08691-65.99707a3.99992,3.99992,0,0,0-2.83594-1.71582,3.9595,3.9595,0,0,0-.46729-.02734,4.00181,4.00181,0,0,0-2.68945,1.03906l-24.19238,21.97949A4.00232,4.00232,0,0,0,107.88745,176v22.34277L89.60913,216.62109l-12.126-35.75976a4.00019,4.00019,0,0,0-2.50586-2.50488l-35.708-12.082L57.54419,148H79.88745a4.00165,4.00165,0,0,0,2.82861-1.17188l24-24a3.9998,3.9998,0,0,0-.60986-6.15625L38.16577,71.37793l18.749-18.74805,85.60547,31.12891a3.99517,3.99517,0,0,0,4.27344-1.01074L178.50464,49.209c.0913-.09668.17724-.19726.25732-.30078a20.00067,20.00067,0,0,1,27.26758,29.23438Z" />{" "}
              </g>
            </svg>
          </div>
          <div className="flex items-center justify-center">
            {error ? (
              <ul className="text-sm text-red-500">
                {error.map((err, index) => (
                  <li key={index}>• {err}</li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
        <section className="flex flex-col items-center justify-center">
          <form action="#" className="space-y-4" onSubmit={onSubmit}>
            <div className="email">
              <div className="relative mt-1">
                <input
                  type="email"
                  id="emailInp"
                  className="p-4 w-80 h-10 rounded pl-10 text-sm focus:outline-none border border-gray-200 focus:border-red-400 font-light"
                  placeholder="email address"
                  name="email"
                  onChange={(event) => {
                    const newUserInput = {
                      email: event.target.value,
                      password: userInput.password,
                    };
                    setUserInput(newUserInput);
                  }}
                  value={userInput.email}
                />
                <svg
                  className="w-4 h-4 absolute top-0 m-3 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div className="password">
              <div className="relative mt-1 mb-2">
                <input
                  type="password"
                  id="passwordInp"
                  className="p-4 w-80 h-10 rounded pl-10 text-sm focus:outline-none border border-gray-200 focus:border-red-400 font-light"
                  placeholder="password"
                  name="password"
                  value={userInput.password}
                  onChange={(event) => {
                    const newInput = {
                      email: userInput.email,
                      password: event.target.value,
                    };
                    setUserInput(newInput);
                  }}
                />
                <svg
                  className="w-4 h-4 absolute top-0 m-3 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <button className="focus:outline-none bg-orange-400 hover:bg-orange-500 focus:ring focus:ring-red-200 w-80 h-9 text-white rounded">
              Log in
            </button>
          </form>
        </section>

        <section className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center w-80">
            <hr className="flex-grow border-t border-gray-300" />
            {/* <span className="px-2 bg-white text-gray-400">🛫</span> */}
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <div className="sign_up_link space-x-1">
            <span className="text-sm font-light">
              Don&apos;t have an account?
            </span>
            <Link
              className="text-orange-400 hover:text-orange-500 text-sm font-light hover:underline"
              to={"/register"}
            >
              Sign up
            </Link>
          </div>
        </section>
      </main>
    </section>
  );
};

export default Login;
