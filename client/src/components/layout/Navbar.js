import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Checklogin extends Component{
  render(){
  if(this.props.isauthenticated){
    return(
      <div>
      <button
              style={{
                width: "140px",
              
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable  accent-3"
            >
              Logout
            </button>
            </div>
    )
  }
  else{
    return(
     

<div >
              <Link
                to="/login"
                style={{
                  width: "140px",
                
                }}
                className="btn btn-large waves-effect waves-light hoverable  accent-3"
              >
                Log In
              </Link>
            </div>
)
  }
}
}


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

    <ul className="navbar-nav mr-auto container">
      <li><Link to="/"  className="col s5    black-text">Home</Link></li>
      <li><Link to="/About"  className="col s5 black-text">About Us</Link></li>
      <li><Link to="/Contact"  className=" col s5  black-text">Contact Us</Link></li>
    <li><Checklogin isauthenticated= {this.props.auth.isAuthenticated}/></li>
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

