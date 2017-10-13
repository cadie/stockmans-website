import React from "react";

const Form = props =>
  <button {...props} style={{ float: "right" }} className="btn btn-success">
    {props.children}
  </button>;

export default Form;
