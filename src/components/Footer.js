import React from "react";
import İcon from "./İcon"

const Footer = () => {
  return (
      <footer className="container-fluid py-3 mb-5 bg-light text-light position-absolute bottom">
        <div className="row text-center">
          <div className="col-12 col-md">
            <img className='rounded' style={{ width: "50px", height: "50px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="..." />
            <span className="d-block text-muted mt-3">Tüm hakları saklıdır. 2022
              <hr />
            </span>
          </div>
         <İcon />
        </div>
      </footer>
  );
};

export default Footer;
