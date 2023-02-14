import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { Helmet } from "react-helmet";

const Navbar = () => {
   useEffect(() => {

    }, []);

  let date = moment().format("MMMM DD");
  return (
    <div>
      <Helmet>
          <script type="text/javascript">
            {`
    function googleTranslateElementInit() {
      new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element')
    }
    `}
          </script>

          <script
            type="text/javascript"
            src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          ></script>
        </Helmet>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <Link className="navbar-brand" to="/">
          {/* <i className="logo ion-logo-apple"></i> */}
          Happening24.com<span className="js"></span>
          <p className="date">{date}</p>
        </Link>
        <div id="google_translate_element"></div>
      </nav>
      <button
        onClick={() => {
          window.location.reload();
        }}
        style={{
          padding: "0.3%",
          margin: "1%",
          background: "#F7F7F7",
          color: "#000",
          border: "1px solid black",
          fontSize: "15px",
          borderRadius: "8px",
        }}
      >
        Click To Refresh
      </button>
      <div id="google_translate_element"></div>

    </div>
  );
};

export default Navbar;
