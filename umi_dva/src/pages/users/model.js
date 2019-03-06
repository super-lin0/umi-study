
import * as usersService from './services/users';

export default {
    namespace: 'user',
    state: {
        users: []
    },
    effects: {
      *fetch({ payload}, { call, put }) {
        const response = yield call(usersService.fetch);
        console.log(response);
        yield put({type: 'setUsers', payload: response})
      }
    },
    reducers: {
      'delete'(state, { payload: id }) {
        return state.filter(item => item.id !== id);
      },
      'setUsers'(state, {payload}) {
        return {...state, users: payload};
      }
    },
  };