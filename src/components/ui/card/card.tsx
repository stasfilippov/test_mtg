import { Component } from 'react'

import s from './card.module.scss'

import { Client } from '../../../services/app-reducer/types'
import { covertName } from '../../../utils/convertName'

type CardProps = {
  client: Client
}

export class Card extends Component<CardProps, {}> {
  render() {
    const { date, name, review } = this.props.client

    return (
      <div className={s.card}>
        <span className={s.name}>{covertName(name)}</span>
        <span className={s.date}>{date}</span>
        <div>{review}</div>
      </div>
    )
  }
}
