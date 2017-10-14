import React from "react";
import "./SpecialsCallout.css";
import { Link } from "react-router-dom";

const SpecialsCallout = () =>

    <div className="specials-callout">
      <div className="container">
        <div className="col-md-12">
          <p className="specials-callout-text text-center">
            <Link to="/specials">Receive a FREE engraved nameplate with the purchase of any Walsh or Tory brand leather halter. Learn More.</Link>
          </p>
        </div>
      </div>
    </div>;

export default SpecialsCallout;
