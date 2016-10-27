import React, {Component, PropTypes} from 'react';
import { reduxForm, Field } from 'redux-form';
import { createPost} from '../actions/index';
import {connect} from 'react-redux';
import { Link } from 'react-router';


class PostsNew extends Component{
    static contextTypes={
        router:PropTypes.object
    };

    onSubmit(props){
        this.props.createPost(props)
            .then(()=>{
                //blog post has been created, navigate the user to the index
                //we navigate by calling this.context.router.push with the new path to navigate to.
                this.context.router.push('/');
            });
    }

    render(){
        const { handleSubmit } = this.props;
        //const handleSubmit = this.props.handleSubmit;
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3> Create a New Post </h3>
                <Field
                    name="title"
                    component={title=>
                        <div className={`form-group ${title.meta.touched && title.meta.invalid?'has-danger':''}`}>
                            <label>Title</label>
                            <input {...title.input} type="text" className="form-control"/>
                            <div className="text-help">
                                {title.meta.touched?title.meta.error:''}
                            </div>
                        </div>
                    }
                />

                <Field
                    name="categories"
                    component={categories=>
                        <div className={`form-group ${categories.meta.touched && categories.meta.invalid?'has-danger':''}`}>
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
                        <div className={`form-group ${content.meta.touched && content.meta.invalid?'has-danger':''}`}>
                            <label>Content:</label>
                            <textarea {...content.input} className="form-control"/>
                            {content.meta.touched &&
                            content.meta.error &&
                            <span className="error">{content.meta.error}</span>}
                        </div>
                    }
                />

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
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