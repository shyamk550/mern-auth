import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NavLogincheck from "./NavLogincheck";


class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;

    return (
      // <div className="navbar-fixed">
      //   <nav className="z-depth-0">
      //     <div className="nav-wrapper white">
      //       <Link
      //         to="/"
      //         style={{
      //           fontFamily: "monospace"
      //         }}
      //         className="col s5 brand-logo  black-text"
      //       >
      //         <i className="material-icons">code</i>
      //         MERN
      //       </Link>
      //     </div>
      //   </nav>
      // </div>

      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark header ">
          <div className="container-fluid">

            <ul className="navbar-nav mr-auto container ">
              <li><Link to="/" className="col s5    black-text">Home</Link></li>
              
              <li className="right hide-on-med-and-down">
              <NavLogincheck />
              </li>
            </ul>
          </div>

        </nav>
      </div>
    );
  }
}



Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);

