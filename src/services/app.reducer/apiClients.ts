export const clientsApi = {
  getClients(lang: string) {
    const res = fetch(`http://localhost:3000/${lang}`, { method: 'GET' })

    res.then(res => {
      console.log('res', res)

      return res
    })
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
