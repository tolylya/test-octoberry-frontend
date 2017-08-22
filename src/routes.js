import React from 'react';
import { Route, IndexRoute } from 'react-router';

import * as routeTypes from './constants/routeTypes';

import App from './components/app/App.jsx';
import HomePage from './components/app/HomePage.jsx';
import NotFoundPage from './components/app/NotFoundPage.jsx';
import ArticlesPage from './containers/pages/articles/ArticlesPage.jsx';
import ArticleDetailPage from './containers/pages/articles/ArticleDetailPage.jsx';
import CommentsPage from './containers/pages/comments/CommentsPage.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/articles" component={ArticlesPage}/>
    <Route path="/articles/:id" component={ArticleDetailPage}/>
    <Route path="/comments/all" type={routeTypes.ROUTE_COMMENT_ALL_TYPE} component={CommentsPage}/>
    <Route path="/comments/user/:userId" type={routeTypes.ROUTE_COMMENT_USER_TYPE} component={CommentsPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
