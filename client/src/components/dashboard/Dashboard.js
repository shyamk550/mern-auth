import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Users from './Users';
import '../../App.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { file: '', imagePreviewUrl: ''};
  }
  
  _handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }
  
  _handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      })
    }
    
    reader.readAsDataURL(file);
  }
  
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };


  render() {
    const { user } = this.props.auth;
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className='previewText'>Please select an image to preview</div>)
    }
    if(user.isAdmin){
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              {/* <p className="flow-text grey-text text-darken-1">
                You are logged into a full-stack{" "}
                <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
              </p> */}
            </h4>
            {/* <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button> */}
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
