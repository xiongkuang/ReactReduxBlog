import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import { createPost} from '../actions/index';
import {connect} from 'react-redux';


class PostsNew extends Component{
    render(){
        const { handleSubmit } = this.props;
        //const handleSubmit = this.props.handleSubmit;
        return(
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3> Create a New Post </h3>
                    <Field
                        name="title"
                        component={title=>
                            <div className="form-group">
                                <label>Title</label>
                                <input {...title.input} type="text" className="form-control"/>
                                {title.meta.touched &&
                                title.meta.error &&
                                <span className="error">{title.meta.error}</span>}
                            </div>
                        }
                        />

                <Field
                    name="categories"
                    component={categories=>
                        <div className="form-group">
                            <label>Categories</label>
                            <input {...categories.input} type="text" className="form-control"/>
                            {categories.meta.touched &&
                            categories.meta.error &&
                            <span className="error">{categories.meta.error}</span>}
                        </div>
                    }
                />

                <Field
                    name="content"
                    component={content=>
                        <div className="form-group">
                            <label>Content</label>
                            <textarea {...content.input} className="form-control"/>
                            {content.meta.touched &&
                            content.meta.error &&
                            <span className="error">{content.meta.error}</span>}
                        </div>
                    }
                />

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

function validate(values) {
    const errors={};

    if(!values.title){
        errors.title='Enter a title';
    }
    if(!values.categories){
        errors.categories='Enter categories';
    }
    if(!values.content){
        errors.content='Enter some content';
    }

    return errors;
}

PostsNew = reduxForm({
    form: 'PostsNewForm',
    validate
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