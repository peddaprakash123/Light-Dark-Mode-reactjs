import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {text: 'Light Mode'}

  renderAuthButton = () => {
    const {text} = this.state
    if (text === 'Light Mode') {
      return (
        <div className="bg-container">
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.onChange}>
            {text}
          </button>
        </div>
      )
    }
    return (
      <div className="bg-container2">
        <h1 className="heading1">Click To Change Mode</h1>
        <button type="button" className="button1" onClick={this.onChange}>
          {text}
        </button>
      </div>
    )
  }

  onChange = () => {
    this.setState(prevState => {
      if (prevState.text === 'Light Mode') {
        return {text: 'Dark Mode', key: 2}
      }
      return {text: 'Light Mode', key: 1}
    })
  }

  render() {
    return <div className="bg-container1">{this.renderAuthButton()}</div>
  }
}

export default LightDarkMode