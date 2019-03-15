import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";

class AccountDetails extends Component {
  constructor() {
    super();
    this.state = {
      name:"",
      email: ""
      
    };
  }


  render() {
    const { user } = this.props.auth;
    return (
        <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
          <h3 align="center">Update Profile</h3>
              <div style={{ marginTop: 10 }}>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Person Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={user.name}
                      />
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input type="text" 
                      className="form-control"
                      value={user.email}
                      />
                </div>
               
                <div className="form-group">
                    <input type="submit" 
                      value="Update Profile" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
              
        
       </div>
        </div>
       
      </div>
    )
  }
}


AccountDetails.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
  )(AccountDetails);
  