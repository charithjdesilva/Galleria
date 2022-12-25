import { Component } from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";     //Runtime type checking for React props (Helps in debugging the application when parasing props)
import { Link } from "react-router-dom";

class Gallery extends Component{
    render(){
        return <div>
            <Link className="addIcon" to="/AddPhoto"></Link> {/* control content of the web-page with the url */}
            {/* <button className="addIcon" onClick={this.props.onNavigate}></button> */}
            <div className="photo-grid">
                {this.props.posts.map((post,index) => <Photo key={index} post={post} onRemovePhoto={this.props.onRemovePhoto} />)}
            </div>
        </div>;
    }
}

//PropTypes is used as propTypes (camelCase) when use with the React Component
Gallery.propTypes = {
    post: PropTypes.array.isRequired,       //if array is not givent to post we get an error, if prop post is not in the parent component we get an error
    onRemovePhoto: PropTypes.func.isRequired
};

export default Gallery;