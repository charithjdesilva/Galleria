import { Component } from "react";

class AddPhoto extends Component{
    render(){
        return (
        <div>
            <h1>Galleria</h1>
            <form>
                <div className="form-layout">
                    <input type="text" placeholder="link" />
                    <input type="text" placeholder="description" />
                    <button>Post</button>
                </div>
            </form>
        </div>
        );
    }
}

export default AddPhoto;