import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddBlogPost from './AddBlogPost';
import BlogListing from './BlogListing';
import EditBlogPost from './EditBlogPost';

// The RouterMain component renders one of the provided
// Routes provided that one matches. 
const RouterMain = () => (
    <main>
        <Switch>
            <Route exact path='/' component={BlogListing} />
            <Route path='/add' component={AddBlogPost} />
            <Route path='/edit/:id' component={EditBlogPost} />
        </Switch>
    </main>
);
export default RouterMain