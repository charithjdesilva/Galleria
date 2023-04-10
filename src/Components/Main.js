import React, { Component } from "react";
import Title from "./Title";
import "./styles/stylesheet.css";
import Gallery from "./Gallery";
import AddPhoto from "./AddPhoto";
import { Link,Route,Routes,useParams } from "react-router-dom";
import SinglePost from "./SinglePost";

class Main extends Component {
  //Constructor will initalize the Component without data, for setting data we get from DB we use componentDidMount()
  constructor() {
    super();
  }

  componentDidMount(){
    // load posts from database, uses an action, then updates the state by using the reducer
    this.props.startLoadingPost();
  }

  //After constructor initialized the component render() runs
  //render runs every time state of the component is changed
  render() {
    // console.log(this.props);
    return (
      <div>
        <h1><Link to='/'>Galleria</Link></h1>
        <Routes>
          <Route exact path="/" element={
            <div>
              <Gallery {...this.props} />
            </div>
          } />
          
          <Route path="/AddPhoto" element={<AddPhoto {...this.props} onNavigate={this.props.navigate} />} />
          
          {/* will return a router for clicked Post */}
          <Route path="/single/:id" element={
          <SinglePost {...this.props} />} />
        </Routes>
      </div>
    );
  }
}

export default Main;
