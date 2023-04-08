import React, { Component } from "react";
import Title from "./Title";
import "./styles/stylesheet.css";
import Gallery from "./Gallery";
import AddPhoto from "./AddPhoto";
import { Link,Route,Routes } from "react-router-dom";


class Main extends Component {
    //Constructor will initalize the Component without data, for setting data we get from DB we use componentDidMount()
  constructor() {
    super();
  }

  //After constructor initialized the component render() runs
  //render runs every time state of the component is changed
  render() {
    console.log(this.props);
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
        </Routes>
      </div>
    );
  }
}

export default Main;
