import { GetClientsResponse } from '../app.reducer/apiClients'
import { Client } from '../app.reducer/app.reducer'

export const convertResponse = (data: GetClientsResponse) => {
  const clients = [] as Client[]

  Object.keys(data).forEach((key, index) => {
    const client = data[key]

    clients.push({
      date: client.date,
      id: index + 1,
      name: client.name,
      review: client.review,
    })
  })

  return clients
}
