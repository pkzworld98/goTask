import React from 'react'
import {all} from "redux-saga/effects"
import todosaga from './todosaga';


export default function* rootSaga(){
    yield all([todosaga()]);
}