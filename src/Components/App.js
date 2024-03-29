import { connect } from "react-redux";
import Main from "./Main";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import { useNavigate } from 'react-router-dom';

function mapStateToProps(state){
    return{
        posts: state.postReducer,
        comments: state.commentReducer
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actions, dispatch);
}

const withLocation = Component => props => {
    const navigate = useNavigate();
  
    return <Component {...props} navigate={navigate} />;
};
  

const App = withLocation(connect(mapStateToProps, mapDispatchToProps)(Main))

export default App