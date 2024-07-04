import { applyMiddleware, combineReducers, createStore } from 'redux'
import { ThunkAction, ThunkDispatch, thunk } from 'redux-thunk'

import { AppUnionActionDispatchType, appReducer } from './app.reducer/app.reducer'

const rootReducer = combineReducers({
  app: appReducer,
})

export type AppRootState = ReturnType<typeof rootReducer>

export type AppDispatch = ThunkDispatch<AppRootState, unknown, UnionActionDispatchType>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootState,
  unknown,
  UnionActionDispatchType
>

export const store = createStore(rootReducer, undefined, applyMiddleware(thunk))

export type UnionActionDispatchType = ActionsType

type ActionsType = AppUnionActionDispatchType
