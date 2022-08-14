import React,{Component} from "react";

class Lyrics extends Component{
    render(){
        return (<ul style={{listStyle: 'none'}}>
            {this.props.lines.map((arrLyricsLine,index) => <li key={index}>{arrLyricsLine}</li>)}
        </ul>);
    }
}

export default Lyrics;