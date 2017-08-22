import { RSAA } from 'redux-api-middleware';
import * as reduxTypes from '../constants/reduxTypes';
import * as mainTyps from '../constants/mainTypes';


export const updateUserAction = (userId, payload) => ({
  [RSAA]: {
    endpoint: `${mainTyps.BASE_API_PATH}/users/${userId}`,
    method: 'POST',
    payload,
    type: [
      reduxTypes.UPDATE_USER_ACTION,
      reduxTypes.UPDATE_USER_ACTION_SUCCESS,
      reduxTypes.UPDATE_USER_ACTION_FAILURE
    ]
  }
});
