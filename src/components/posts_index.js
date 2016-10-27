import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';
import { Link } from 'react-router';


class PostsIndex extends Component{
    //lifecycle method, only called when the component is about to render
    componentWillMount(){
        console.log('this would be a good time to call a action creator to fetch post');
        this.props.fetchPosts();
    }


    render(){
        return (
            <div>
                <div className="text-xs-right">
                    <Link to='/posts/new' className="btn btn-primary">Add a Post</Link>
                    <Link to='/posts/about' className="btn btn-success">About Us</Link>
                </div>
            </div>
        );
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({fetchPosts}, dispatch);
// }

export default connect(null, {fetchPosts})(PostsIndex);