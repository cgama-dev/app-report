import { createStore, applyMiddleware } from 'redux'

import  reducers from './reducers'

import createSagaMiddleware from 'redux-saga'

import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

export default createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(sagas)