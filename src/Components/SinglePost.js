import {Component} from "react";
import { useParams } from "react-router-dom";
import Photo from "./Photo";

class SinglePost extends Component{
    render(){
          const posts = this.props.posts;
          const id = Number(this.props.params.id);    // converting to number becaues postId in url is a string
          console.log(id);
          console.log(this.props);
          const post = posts.find((post) => (post.id === id));
          console.log(post);
          
          return <div className="single-photo">
            <Photo post={post} />
          </div>;
    }
}

// alternative way to achieve withRouter in React v6
export default (props) => (<SinglePost {...props}  params={useParams()} />);