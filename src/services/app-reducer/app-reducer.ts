import { AppDispatch, AppThunk } from '../store'
import { clientsApi } from './apiClients'
import { Client } from './types'

const SET_CLIENTS = 'SET_CLIENTS'
const SET_LANGUAGE = 'SET_LANGUAGE'

const initialState = {
  clients: [] as Client[],
  language: 'ru',
}

export type InitialStateType = typeof initialState

export const appReducer = (
  state: InitialStateType = initialState,
  action: AppUnionActionDispatchType
): InitialStateType => {
  switch (action.type) {
    case SET_CLIENTS:
      return {
        ...state,
        clients: action.clients,
      }
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.lang,
      }

    default:
      return state
  }
}

export const setClients = (clients: Client[]) => ({ clients, type: SET_CLIENTS }) as const

export const setLanguage = (lang: string) => ({ lang, type: SET_LANGUAGE }) as const

//thunks
export const getClients =
  (lang: string): AppThunk =>
  (dispatch: AppDispatch) => {
    clientsApi.getClients(lang).then(data => dispatch(setClients(data)))
  }

type SetClients = ReturnType<typeof setClients>
type SetLanguage = ReturnType<typeof setLanguage>

export type AppUnionActionDispatchType = SetClients | SetLanguage
