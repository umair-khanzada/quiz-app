import { combineEpics } from 'redux-observable';
import { quizListActions } from 'features/QuizList';
import * as actions from '../../redux/actions';
// import { APIroot, parseError } from '../../scripts/Utils';

const getQuizListEpic = (action$, store, { Observable }) => action$
  .ofType('quizListReducer/getQuizListRequest', 'quizListReducer/applyFilter')
  .mergeMap((action) => {
    const quizList = store.getState().quiz.list;
    return quizListActions.getQuizListSuccess({
      quizes: quizList,
      total: quizList.length,
    });
  });

const getQuizEpic = (action$, store, { Observable }) => action$.ofType(actionTypes.QUIZ_GET_REQUEST).mergeMap((action) => {
  const quizList = store.getState().quiz.list;
  const {
    payload: { quizId },
  } = action;
  const selectedQuiz = quizList.find((quiz) => quiz.quizId === quizId);
  return actions.getQuizSuccess(selectedQuiz);
});

const createQuizEpic = (action$, store, { Observable }) => action$.ofType(actionTypes.QUIZ_CREATE_REQUEST).mergeMap((action) => {
  const quizList = store.getState().quiz.list;
  const {
    payload: { quiz },
  } = action;
  const updatedQuizList = [...quizList, quiz];
  return actions.createQuizSuccess(updatedQuizList);
});

const deleteQuizEpic = (action$, store, { Observable }) => action$.ofType(actionTypes.QUIZ_DELETE_REQUEST).mergeMap((action) => {
  const quizList = store.getState().quiz.list;
  const {
    payload: { quizId },
  } = action;
  const updatedQuizList = quizList.filter((quiz) => quiz.quizId === quizId);
  return actions.deleteQuizSuccess(updatedQuizList);
});

const updateQuizEpic = (action$, store, { Observable }) => action$.ofType(actionTypes.QUIZ_UPDATE_REQUEST).mergeMap((action) => {
  const quizList = store.getState().quiz.list;
  const {
    payload: { quizId, data },
  } = action;
  const updatedQuizList = quizList.map((quiz) => {
    if (quiz.quizId === quizId) {
      return data;
    }
    return quiz;
  });
  return actions.updateQuizSuccess(updatedQuizList);
});

const getQuizCountEpic = (action$, store, { Observable }) => action$
  .ofType(actionTypes.QUIZ_GET_LIST_COUNT_REQUEST)
  .mergeMap((action) => {
    const quizListCount = store.getState().quiz.list.length;
    return actions.getQuizCountSuccess(quizListCount);
  });

export default combineEpics(
  getQuizListEpic,
  getQuizEpic,
  createQuizEpic,
  deleteQuizEpic,
  updateQuizEpic,
  getQuizCountEpic,
);
