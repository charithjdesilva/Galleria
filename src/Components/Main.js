import React, { Component } from "react";
import Title from "./Title";
import "./styles/stylesheet.css";
import Gallery from "./Gallery";
import AddPhoto from "./AddPhoto";
import { Route,Routes } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

class Main extends Component {
    //Constructor will initalize the Component without data, for setting data we get from DB we use componentDidMount()
  constructor() {
    super();
    this.state = {
      posts: [],
      screen:'photos'    // photos=Gallery , addPhoto=AddScreen
    };
    this.removePhoto = this.removePhoto.bind(this);     //bind method is used because 'this' will no longer have a scope after passed down to sub components
  }

  removePhoto(postRemoved){
    console.log(postRemoved.description);
    this.setState((state) => ({posts: state.posts.filter(post => post!==postRemoved)}));
  }

  //componentDidMount method is used to setState aftere fetching data from a DB/API or for the Asynchronous JS requests
  // This method runs only after the component is inserted to the DOM (1st render after constructor)
  //since this setting a new state render() will invoke again
  componentDidMount(){
    const fetchedData = fetchDataFromDB();
    this.setState({posts: fetchedData});
  }

  //After constructor initialized the component render() runs
  //render runs every time state of the component is changed
  render() {
    return (
      <Routes>
        <Route exact path="/" element={
          <div>
            <Title title={"Galleria"} />
            <Gallery posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate} />
          </div>
        } />
        <Route path="/AddPhoto" element={<AddPhoto onAddPhoto={(addedPosts) => {
          this.addPhoto(addedPosts);
          // console.log(this.props.history);
          this.props.navigate("/");
        }} />} />
      </Routes>
    );
  }

  addPhoto(postSubmitted){
    this.setState(state =>({
      posts: state.posts.concat([postSubmitted])
    }))
  }
}

//this method is declared to fecth data from a DataBase or an API
const fetchDataFromDB = () => {
    return [{
      id: "0",
      description: "beautiful landscape",
      imageLink:
        "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
        "3919321_1443393332_n.jpg",
    },
    {
      id: "1",
      description: "Aliens???",
      imageLink:
        "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg",
    },
    {
      id: "2",
      description: "On a vacation!",
      imageLink:
        "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg",
    }];
};

const withLocation = Component => props => {
  const navigate = useNavigate();

  return <Component {...props} navigate={navigate} />;
};

export default withLocation(Main);
