import { RSAA } from 'redux-api-middleware';
import * as reduxTypes from '../constants/reduxTypes';
import * as mainTyps from '../constants/mainTypes';


export const getArticlesAction = () => ({
  [RSAA]: {
    endpoint: `${mainTyps.BASE_API_PATH}/articles`,
    method: 'GET',
    types: [
      reduxTypes.GET_ARTICLES_ACTION,
      reduxTypes.GET_ARTICLES_ACTION_SUCCESS,
      reduxTypes.GET_ARTICLES_ACTION_FAILURE
    ]
  }
});


export const getArticleDetailAction = articleId => ({
  [RSAA]: {
    endpoint: `${mainTyps.BASE_API_PATH}/articles/${articleId}`,
    method: 'GET',
    types: [
      reduxTypes.GET_ARTICLE_DETAIL_ACTION,
      reduxTypes.GET_ARTICLE_DETAIL_ACTION_SUCCESS,
      reduxTypes.GET_ARTICLE_DETAIL_ACTION_FAILURE
    ]
  }
});
