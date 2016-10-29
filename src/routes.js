import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsAbout from './components/posts_about';
import PostsShow from './components/posts_show';


export default(
    <Route path="/" component={App}>
        <IndexRoute component={PostsIndex} />
        <Route path="posts/new" component={PostsNew} />
        <Route path="posts/about" component={PostsAbout} />
        <Route path="posts/:id" component={PostsShow} />
    </Route>

);

//this.props.params.id