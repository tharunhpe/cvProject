import { combineReducers } from 'redux';

import { loginReducer } from 'js/application/login/loginStore';
import { cvMakerReducer } from 'js/application/cvMaker/cvMakerStore';
import { profileDetailsReducer } from 'js/application/profileDetails/profileDetailsStore';

export default combineReducers({
  login: loginReducer,
  cvMaker: cvMakerReducer,
  profileDetails: profileDetailsReducer,
});
