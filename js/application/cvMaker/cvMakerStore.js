import { createAction, createReducer } from 'js/utils/redux-utils';

export const CLEAR_ALL_TAGS_ERROR = 'tags/CLEAR_ALL_TAGS_ERROR';

export const clearAllTagsError =
    () => createAction(CLEAR_ALL_TAGS_ERROR);

// ---------REDUCER ---------
export const initialState = {
  errors: [],
};

const handlers = {
  [CLEAR_ALL_TAGS_ERROR]: (state, { payload }) =>
    ({ ...state, errors: [] }),
};

export default createReducer(initialState, handlers);
