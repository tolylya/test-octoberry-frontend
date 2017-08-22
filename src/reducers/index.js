import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import userReducer from './userReducer';
import articlesReducer from './articlesReducer';
import articleDetailReducer from './articleDetailReducer';
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
  articles: articlesReducer,
  articleDetail: articleDetailReducer,
  comments: commentsReducer,
  user: userReducer,
  routing: routerReducer
});

export default rootReducer;
