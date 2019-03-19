import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Users from './Users';
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
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
             
            </h4>
           
            <Users/>
      
          </div>
        </div>
       
       
      </div>
    );
          }
          else{
            return(
              <div style={{ height: "75vh" }} className="container valign-wrapper">
              <div className="row">
                <div className="landing-copy col s12 center-align">
                  <h4>
                    <b>Hey there,</b> {user.name.split(" ")[0]}
                    <p>Stay tuned... something is coming!!</p>
                    
               </h4>
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
