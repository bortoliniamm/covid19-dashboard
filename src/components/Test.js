import React from "react";
import { connect } from "react-redux";

function Test(props) {
  // console.log(props);
  return <div></div>;
}

const mapStateToProps = function (state) {
  return {
    title: state.title,
  };
};

export default connect(mapStateToProps)(Test);
