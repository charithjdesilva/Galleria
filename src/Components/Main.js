import React, { Component } from "react";
import Title from "./Title";
import "./styles/stylesheet.css";
import Gallery from "./Gallery";
import AddPhoto from "./AddPhoto";
import { Route,Routes } from "react-router-dom";


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
      <Routes>
        <Route exact path="/" element={
          <div>
            <Title title={"Galleria"} />
            <Gallery {...this.props} />
          </div>
        } />
        <Route path="/AddPhoto" element={<AddPhoto onAddPhoto={(addedPosts) => {
          // console.log(this.props.history);
          this.props.navigate("/");
        }} />} />
      </Routes>
    );
  }
}

export default Main;
