import { Context, createWrapper } from 'next-redux-wrapper'
import { AnyAction, applyMiddleware, createStore, Store } from 'redux'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { reducer, RootState } from './reducers/index'

const makeStore = (context: Context) => createStore(reducer, applyMiddleware(thunk))

export const wrapper = createWrapper<Store<RootState>>(makeStore, { debug: true })

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>