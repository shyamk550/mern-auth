import React, { Component } from 'react'

class AddMovie extends Component {
  render() {
    return (
        <div  className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
          <h5 align="center">Add a New Movie</h5>
          
              <div style={{ marginTop: 0 }}>
            <form className= "row" onSubmit={this.onSubmit}>
            <div className="input-field col s12">
                    <label for="name">Movie Name</label>
                    <input  id="name" type="text"
                     ref={(input) => this.getName = input}
                    onChange={this.onChange} />
                </div>
                <div className="input-field col s12">
                    <label>Genre:  </label>
                    <input  id="genre" type="text" 
                     ref={(input) => this.getName = input}
                    onChange={this.onChange} />
                </div>
                <div className="input-field col s12">
                    <label>Rating: </label>
                    <input  id="rating" type="number" 
                      ref={(input) => this.getEmail = input}
                      onChange={this.onChange} />
                </div>
                <div className="input-field col s12">
                    <label>Story: </label>
                    <textarea  id="story" 
                      ref={(input) => this.getEmail = input}
                      onChange={this.onChange} />
                </div>
                <div className="input-field col s12">
                   
                    <input  id="story" type="date"
                      ref={(input) => this.getEmail = input}
                      onChange={this.onChange} />
                </div>
                <div className="input-field col s12">
                    <input type="submit"  value="Update Profile"   className="btn btn-primary"/>
                </div>
            </form>
            </div>
        </div>
      </div>
       
      </div>
    )
  }
}

export default  AddMovie;