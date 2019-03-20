import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Users from './Users';
import MoviesList from './MoviesList'
import { Link } from "react-router-dom";

import '../../App.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  
  _handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }
  
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };


  render() {
    const { user } = this.props.auth;
   
    if(user.isAdmin){
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <Link to="/addmovie" className="waves-effect waves-light btn center">Add Movie</Link>
            {/* <Users/> */}
             <MoviesList/>
        </div>
       
       
      </div>
    );
          }
          else{
            return(
              <div  className="container valign-wrapper">
              <div className="row">
                <div className="landing-copy col s12 left-align">
                  {/* <h5>
                    <b>Hey there,</b> {user.name.split(" ")[0]}
                                       
               </h5> */}

               <MoviesList/>

              {/* <div className="myImage">
                     </div>                  */}
               </div>
              </div>
             
            </div>
            );
          }
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
