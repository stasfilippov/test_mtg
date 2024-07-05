import React from 'react'
import { connect } from 'react-redux'

import { setLanguage } from '@/services/app-reducer/app-reducer'
import { AppRootState } from '@/services/store'

import s from './dropDown.module.scss'

interface DropdownState {
  isOpen: boolean
}

class DropDown extends React.Component<DropDownProps, DropdownState> {
  selectOption = (option: string) => {
    this.setState({
      isOpen: false,
    })
    this.props.setLanguage(option)
  }

  toggleDropdown = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))
  }

  constructor(props: DropDownProps) {
    super(props)

    this.state = {
      isOpen: false,
    }
  }

  render() {
    const { isOpen } = this.state
    const { options } = this.props

    return (
      <div className={s.dropdown}>
        <button className={s.dropdownToggle} onClick={this.toggleDropdown} type={'button'}>
          {this.props.language ? this.props.language : 'Select an option'}
        </button>
        {isOpen && (
          <div className={s.dropdownMenu}>
            {options.map((option, index) => (
              <option
                className={s.dropdownItem}
                key={index}
                onClick={() => this.selectOption(option)}
              >
                {option}
              </option>
            ))}
          </div>
        )}
      </div>
    )
  }
}

type MapStateToPropsType = {
  language: string
  options: string[]
}

const mapStateToProps = (
  state: AppRootState,
  ownProps: { options: string[] }
): MapStateToPropsType => {
  const { language } = state.app

  const { options } = ownProps

  return { language, options }
}

type MapDispatchToPropsType = {
  setLanguage: (lang: string) => void
}

export type DropDownProps = MapDispatchToPropsType & MapStateToPropsType

export const DropDownContainer = connect(mapStateToProps, { setLanguage })(DropDown)
