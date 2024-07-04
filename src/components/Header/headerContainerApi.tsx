import React from 'react'

import st from './header.module.scss'

import icon from '../../assets/icon.png'
import { Clock } from '../ui/clock/clock'
import { DropDown } from '../ui/dropdown/dropDown'

const options: string[] = ['Eng', 'Ru']

export class Header extends React.Component {
  render() {
    return (
      <header className={st.header}>
        <img alt={'header icon'} src={icon} style={{ width: '50px' }} />
        <div className={st.info}>
          <Clock />
          <DropDown options={options} />
        </div>
      </header>
    )
  }
}
