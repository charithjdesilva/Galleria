import { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Photo extends Component{
    render(){
        const post = this.props.post;
        return <figure className="figure-container">
            {/* upon clicking an image go to a comment page */}
            <Link to={`/single/${post.id}`}><img className="photo" src={post.imageLink} alt={post.description} /></Link>

            <figcaption><p>{post.description}</p></figcaption>
            <div className="button-container"><button className="remove-button" onClick={() => {
                this.props.removePost(this.props.index)
            }}>Remove</button></div>
        </figure>;
    }
}

Photo.protoTypes = {
    post: PropTypes.object.isRequired
};

export default Photo;