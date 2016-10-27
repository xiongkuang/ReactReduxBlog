import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import { createPost} from '../actions/index';
import {connect} from 'react-redux';


const renderInput = field =>
    <div>
        <input {...field.input} type={field.type} className="form-control"/>
        {field.meta.touched &&
         field.meta.error &&
        <span className="error">{field.meta.error}</span>}
    </div>

const renderTextarea = field =>
    <div>
        <textarea {...field.input} className="form-control"/>
        {field.meta.touched &&
        field.meta.error &&
        <span className="error">{field.meta.error}</span>}
    </div>



class PostsNew extends Component{
    render(){
        const { handleSubmit } = this.props;
        //const handleSubmit = this.props.handleSubmit;
        return(
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3> Create a New Post </h3>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <Field
                        name="title"                   // Specify field name
                        component={renderInput}           // Specify render component above
                        type="text"/>
                </div>
                <div className="form-group">
                    <label htmlFor="categories">Categories</label>
                    <Field
                        name="categories"                   // Specify field name
                        component={renderInput}           // Reuse same render component
                        type="text"/>
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <Field
                        name="content"
                        component={renderTextarea} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

PostsNew = reduxForm({
    form: 'PostsNewForm'
})(PostsNew);

PostsNew = connect(null, {createPost})(PostsNew);


export default PostsNew;


//user types in something in...record it on application state

// state === {
//     form:{
//         PostNewForm:{
//             title: ' ... ',
//             categories: ' ... ',
//             content: ' ... '
//         }
//     }
// }