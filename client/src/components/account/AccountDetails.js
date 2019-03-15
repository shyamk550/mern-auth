import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";

class AccountDetails extends Component {
  render() {
    const { user } = this.props.auth;
    console.log(">>>>>"+user.email)
    return (
        <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p>Stay tuned... something is coming!!</p>
              
         </h4>
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
  