import {put, call, takeEvery} from 'redux-saga/effects';
import axios from 'axios';

function* getAllUsers () {
    try{
        let users = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users');
        yield put({type: 'GET_ALL_USERS_SUCCESS', data:users.data})

    } catch (error) {
        yield put({type: 'GET_ALL_USERS_FAILED', message:error.message});
    }

}

export function* watchUser(){
    yield takeEvery('GET_ALL_USERS', getAllUsers);
}