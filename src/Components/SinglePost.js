import {Component} from "react";
import { useParams } from "react-router-dom";
import Photo from "./Photo";
import Comments from "./Comments";

class SinglePost extends Component{
    render(){
          const posts = this.props.posts;
          const id = Number(this.props.params.id);    // converting to number becaues postId in url is a string
          // console.log(id);
          const post = posts.find((post) => (post.id === id));
          // console.log(post);
          const index = posts.findIndex((post) => (post.id === id));
          const comments = this.props.comments[id] || []    // if comments is undefined, set comments to empty array
          
          return <div className="single-photo">
            <Photo post={post} {...this.props} index={index} />
            <Comments addComment={this.props.addComment} comments={comments} post_id={id} />
          </div>;
    }
}

// alternative way to achieve withRouter in React v6
export default (props) => (<SinglePost {...props}  params={useParams()} />);