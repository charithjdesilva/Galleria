import { Component } from "react";

class AddPhoto extends Component{

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();     //Prevent refreshing of the web page
        
        //assigning values of the form input to variables
        const imgLink = event.target.imgLink.value;
        const imgDescription = event.target.imgDescription.value;

        const post = {
            id: Number(new Date()), //assign timestamp as Id
            description: imgDescription,
            imageLink: imgLink
        };

        // run only if link and description are not null
        if(imgLink && imgDescription){
            this.props.addPost(post);
            this.props.navigate('/');
        }
    }

    render(){
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <div className="form-layout">
                    <input type="text" placeholder="link" name="imgLink" />
                    <input type="text" placeholder="description" name="imgDescription"  />
                    <button>Post</button>
                </div>
            </form>
        </div>
        );
    }
}

export default AddPhoto;