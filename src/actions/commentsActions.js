import { RSAA } from 'redux-api-middleware';
import * as reduxTypes from '../constants/reduxTypes';
import * as mainTyps from '../constants/mainTypes';
import { serializeObjectToQuery } from '../utils/urlHelper';


export const getCommentsAction = (commentId, queryParams) => ({
  [RSAA]: {
    endpoint: `${mainTyps.BASE_API_PATH}/comments?${serializeObjectToQuery(queryParams)}`,
    method: 'GET',
    type: [
      reduxTypes.UPDATE_COMMENT_ACTION,
      reduxTypes.UPDATE_COMMENT_ACTION_SUCCESS,
      reduxTypes.UPDATE_COMMENT_ACTION_FAILURE
    ]
  }
});

export const updateCommentAction = (commentId, payload) => ({
  [RSAA]: {
    endpoint: `${mainTyps.BASE_API_PATH}/comments/${commentId}`,
    method: 'POST',
    payload,
    types: [
      reduxTypes.UPDATE_COMMENT_ACTION,
      reduxTypes.UPDATE_COMMENT_ACTION_SUCCESS,
      reduxTypes.UPDATE_COMMENT_ACTION_FAILURE
    ]
  }
});
