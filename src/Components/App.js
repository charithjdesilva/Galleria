import { connect } from "react-redux";
import Main from "./Main";
import { bindActionCreators } from "redux";
import { removePost } from "../redux/actions";
import { useNavigate } from 'react-router-dom';

function mapStateToProps(state){
    return{
        posts: state
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({removePost}, dispatch);
}

const withLocation = Component => props => {
    const navigate = useNavigate();
  
    return <Component {...props} navigate={navigate} />;
  };
  

const App = withLocation(connect(mapStateToProps, mapDispatchToProps)(Main))

export default App