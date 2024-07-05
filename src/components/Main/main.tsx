import { Component } from 'react'

// eslint-disable-next-line import/no-unresolved
import { Client } from '@/services/app-reducer/types'

import s from './main.module.scss'

import { Card } from '../ui/card/card'

type MainProps = {
  clients: Client[]
}

export class Main extends Component<MainProps, {}> {
  render() {
    return (
      <main className={s.container}>
        {this.props.clients.map(client => {
          return <Card client={client} key={client.id} />
        })}
      </main>
    )
  }
}
