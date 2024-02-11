import React from "react";
// import { Link } from "react-router-dom";

export default function Navbar(props) {

  const HandleTitleHome=()=>{
    document.title="WordPlay - Home"
  }

  // const HandleTitleAbout=()=>{
  //   document.title="WordPlay - AboutUs"
  // }

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div>
        <a className="navbar-brand" href="#" onClick={HandleTitleHome}>
          WordPlay
        </a>
      </div>
      <div>
        <a
          className={`Home text-${props.mode === "light" ? "dark" : "light"}`}
          href="#" onClick={HandleTitleHome}
        >
          Home
        </a>
      </div>
      {/* <div>
        <Link
          className={`About text-${props.mode === "light" ? "dark" : "light"}`}
          to="/about" onClick={HandleTitleAbout}
        >
          About Us
        </Link>
      </div> */}

      <div
        className={`form-check form-switch text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={props.toggleMode}
        />
        <label
          className="form-check-label ms-auto"
          htmlFor="flexSwitchCheckDefault"
        >
          Enable Darkmode
        </label>
      </div>
    </nav>
  );
}
