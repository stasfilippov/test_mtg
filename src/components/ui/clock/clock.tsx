import React from 'react'

import s from './clock.module.scss'

interface ClockState {
  time: Date
}

export class Clock extends React.Component<{}, ClockState> {
  private timerID: ReturnType<typeof setInterval> | null = null

  constructor(props: {}) {
    super(props)
    this.state = {
      time: new Date(),
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID)
    }
  }

  render() {
    const { time } = this.state

    return <div className={s.digitalClock}>{time.toLocaleTimeString()}</div>
  }

  tick() {
    this.setState({
      time: new Date(),
    })
  }
}
