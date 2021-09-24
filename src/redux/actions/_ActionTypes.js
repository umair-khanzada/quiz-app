import keyMirror from 'keymirror';

const actionTypes = keyMirror({
  // Quiz
  QUIZ_GET_LIST_REQUEST: null,
  QUIZ_GET_LIST_SUCCESS: null,
  QUIZ_GET_LIST_ERROR: null,

  QUIZ_GET_LIST_COUNT_REQUEST: null,
  QUIZ_GET_LIST_COUNT_SUCCESS: null,
  QUIZ_GET_LIST_COUNT_ERROR: null,

  QUIZ_GET_REQUEST: null,
  QUIZ_GET_SUCCESS: null,
  QUIZ_GET_ERROR: null,

  QUIZ_CREATE_REQUEST: null,
  QUIZ_CREATE_SUCCESS: null,
  QUIZ_CREATE_ERROR: null,

  QUIZ_DELETE_REQUEST: null,
  QUIZ_DELETE_SUCCESS: null,
  QUIZ_DELETE_ERROR: null,

  QUIZ_UPDATE_REQUEST: null,
  QUIZ_UPDATE_SUCCESS: null,
  QUIZ_UPDATE_ERROR: null,

  QUIZ_CLEAR_LIST_REQUEST: null,
});

export default actionTypes;
