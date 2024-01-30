import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerStarted: false,
    timeInSec: 0,
  }

  startHandle = () => {
    const {isTimerStarted} = this.state
    if (!isTimerStarted) {
      this.timerId = setInterval(this.tick, 1000)
      this.setState({isTimerStarted: true})
    }
  }

  stopHandle = () => {
    this.setState({isTimerStarted: false})
    clearInterval(this.timerId)
  }

  resetHandle = () => {
    clearInterval(this.timerId)
    this.setState({isTimerStarted: false, timeInSec: 0})
  }

  tick = () => {
    this.setState(prevState => ({timeInSec: prevState.timeInSec + 1}))
  }

  secondsToTimeFormat = seconds => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60

    const formattedMinutes = String(minutes).padStart(2, '0')
    const formattedSeconds = String(remainingSeconds).padStart(2, '0')

    return `${formattedMinutes}:${formattedSeconds}`
  }

  render() {
    const {timeInSec} = this.state
    const formatedTime = this.secondsToTimeFormat(timeInSec)
    return (
      <div className="stopWatchContainer">
        <h1 className="stopwatchHeading">Stopwatch</h1>
        <div className="watchCard">
          <h1 className="timerheding">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timerLogo"
            />
            Timer
          </h1>
          <h1>{formatedTime}</h1>
          <div className="btnContainer">
            <button
              type="button"
              className="btn btnClr1"
              onClick={this.startHandle}
            >
              Start
            </button>
            <button
              type="button"
              className="btn btnClr2"
              onClick={this.stopHandle}
            >
              Stop
            </button>
            <button
              type="button"
              className="btn btnClr3"
              onClick={this.resetHandle}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
