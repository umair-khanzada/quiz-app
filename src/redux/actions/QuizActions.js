import { makeActionCreator } from '../../scripts/GeneratorUtils';
import actionTypes from './_ActionTypes';

export const clearQuizList = makeActionCreator(
  actionTypes.QUIZ_CLEAR_LIST_REQUEST,
);

export const getQuizListRequest = (filter) => ({
  type: actionTypes.QUIZ_GET_LIST_REQUEST,
  payload: { filter },
});

export const getQuizListSuccess = (quizes) => ({
  type: actionTypes.QUIZ_GET_LIST_SUCCESS,
  payload: { quizes },
});

export const getQuizListError = (error) => ({
  type: actionTypes.QUIZ_GET_LIST_ERROR,
  payload: { error },
});

export const getQuizCountRequest = () => ({
  type: actionTypes.QUIZ_GET_LIST_COUNT_REQUEST,
});

export const getQuizCountSuccess = (count) => ({
  type: actionTypes.QUIZ_GET_LIST_COUNT_SUCCESS,
  payload: { count },
});

export const getQuizCountError = (error) => ({
  type: actionTypes.QUIZ_GET_LIST_COUNT_ERROR,
  payload: { error },
});

export const getQuizRequest = (quizId) => ({
  type: actionTypes.QUIZ_GET_REQUEST,
  payload: { quizId },
});

export const getQuizSuccess = (quiz) => ({
  type: actionTypes.QUIZ_GET_SUCCESS,
  payload: { quiz },
});

export const getQuizError = (error) => ({
  type: actionTypes.QUIZ_GET_ERROR,
  payload: { error },
});

export const updateQuizRequest = (quizId, data) => ({
  type: actionTypes.QUIZ_UPDATE_REQUEST,
  payload: { quizId, data },
});

export const updateQuizSuccess = (quiz) => ({
  type: actionTypes.QUIZ_UPDATE_SUCCESS,
  payload: { quiz },
});

export const updateQuizError = (error) => ({
  type: actionTypes.QUIZ_UPDATE_ERROR,
  payload: { error },
});

export const createQuizRequest = (quiz) => ({
  type: actionTypes.QUIZ_CREATE_REQUEST,
  payload: { quiz },
});

export const createQuizSuccess = (quiz) => ({
  type: actionTypes.QUIZ_CREATE_SUCCESS,
  payload: { quiz },
});

export const createQuizError = (error) => ({
  type: actionTypes.QUIZ_CREATE_ERROR,
  payload: { error },
});

export const deleteQuizRequest = (quizId) => ({
  type: actionTypes.QUIZ_DELETE_REQUEST,
  payload: { quizId },
});

export const deleteQuizSuccess = (quizId) => ({
  type: actionTypes.QUIZ_DELETE_SUCCESS,
  payload: { quizId },
});

export const deleteQuizError = (error) => ({
  type: actionTypes.QUIZ_DELETE_ERROR,
  payload: { error },
});
