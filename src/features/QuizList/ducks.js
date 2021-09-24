import { createSlice } from '@reduxjs/toolkit';
import { getTotalPages } from 'scripts/Utils';

// states
const initialState = {
  loading: true,
  error: null,
  list: [],
  filter: {
    currentPage: 1,
    totalPages: 0,
    limit: { key: '25', value: '25' },
    fields: {
      contact: null, startDate: null, endDate: null, isInactive: null,
    },
    skip: 0,
    count: 0,
    sort: {
      sortBy: null,
      sortDirection: null,
    },
  },
};

// reducers
export const { actions, reducer } = createSlice({
  name: 'quizListReducer',
  initialState,
  reducers: {
    clearQuizList: (state) => {
      state.list = [];
    },
    getQuizListRequest: (state, { payload: { filter } }) => {
      state.loading = true;
    },
    getQuizListSuccess: (state, { payload: { quizes, total } }) => {
      const totalPages = getTotalPages(total, state.filter.limit);
      state.list = quizes;
      state.loading = false;
      state.filter.totalPages = totalPages;
      state.filter.count = total;
      if (state.filter.currentPage > totalPages) state.filter.currentPage = 1;
    },
    getQuizListError: (state, { payload: { error } }) => {
      state.loading = false;
      state.error = error;
    },
    applyFilter: (state, { payload: { property, value } }) => {
      if (property !== 'currentPage') {
        state.filter.currentPage = 1;
      }
      state.loading = true;
      state.filter[property] = value;
    },
    resetReducers: (state) => initialState,
  },
});
