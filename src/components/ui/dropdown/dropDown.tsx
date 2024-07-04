import React from 'react'

import s from './dropDown.module.scss'

interface DropdownProps {
  options: string[]
}

interface DropdownState {
  isOpen: boolean
  selectedOption: string
}

export class DropDown extends React.Component<DropdownProps, DropdownState> {
  selectOption = (option: string) => {
    this.setState({
      isOpen: false,
      selectedOption: option,
    })
  }

  toggleDropdown = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))
  }

  constructor(props: DropdownProps) {
    super(props)

    this.state = {
      isOpen: false,
      selectedOption: 'Ru',
    }
  }

  render() {
    const { isOpen, selectedOption } = this.state
    const { options } = this.props

    return (
      <div className={s.dropdown}>
        <button className={s.dropdownToggle} onClick={this.toggleDropdown} type={'button'}>
          {selectedOption ? selectedOption : 'Select an option'}
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
