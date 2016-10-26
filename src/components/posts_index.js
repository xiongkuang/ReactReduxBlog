import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index';


class PostsIndex extends Component{
    //lifecycle method, only called when the component is about to render
    componentWillMount(){
        console.log('this would be a good time to call a action creator to fetch post');
        this.props.fetchPosts();
    }


    render(){
        return (
            <div>List of posts.</div>
        );
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({fetchPosts}, dispatch);
// }

export default connect(null, {fetchPosts})(PostsIndex);