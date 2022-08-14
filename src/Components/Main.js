import React,{Component} from "react";
import Title from "./Title";
import Lyrics from "./Lyrics";

class Main extends Component{
    render(){
        return <div>
            <Title title={"Hotel California"}/>
            <Lyrics lines={["On a dark dessert highway","Cool wind in my hair", "Warm smell of colitas", "Rising up through the air"]} />
            <Lyrics lines={["Up ahead in the distance", "I saw a shimmering light", "My head grew heavy and my sight grew dim"]} />
        </div>;
    }
}

export default Main;