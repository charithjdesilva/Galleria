import { Component } from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";     //Runtime type checking for React props (Helps in debugging the application when parasing props)

class Gallery extends Component{
    render(){
        return <div className="photo-grid">
            {this.props.posts.map((post,index) => <Photo key={index} post={post} onRemovePhoto={this.props.onRemovePhoto} />)}
        </div>;
    }
}

//PropTypes is used as propTypes (camelCase) when use with the React Component
Gallery.protoTypes = {
    post: PropTypes.array.isRequired,       //if array is not givent to post we get an error, if prop post is not in the parent compoenent we get an error
    onRemovePhoto: PropTypes.func.isRequired
};

export default Gallery;