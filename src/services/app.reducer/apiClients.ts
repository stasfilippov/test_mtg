import axios from 'axios'

import { convertResponse } from '../utils/convertResponse'

export const clientsApi = {
  getClients<GetClientsResponse>(lang: string) {
    return axios.get(`http://localhost:3000/${lang}`).then(res => convertResponse(res.data))
  },
}

export type GetClientsResponse = {
  [key: string]: ClientResponse
}

export type ClientResponse = {
  date: string
  name: string
  review: string
}
