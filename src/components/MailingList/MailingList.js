import React from "react";
import "./MailingList.css";

const MailingList = ({ children }) =>
  <div className="mailing-list">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h2 className="mailing-header text-center">JOIN OUR MAILING LIST</h2>
          <p className="mailing-text text-center">To receive our latest specials.</p>
        </div>
        <div className="col-lg-6">
          <div className="input-group email-input">
            <input type="text" className="form-control" placeholder="Enter You Email Address" aria-label="Enter Your Email Address" aria-describedby="basic-addon2"></input>
            <span className="input-group-addon" id="basic-addon2">Subscribe</span>
          </div>
        </div>
      </div>
    </div>
  </div>;

export default MailingList;
