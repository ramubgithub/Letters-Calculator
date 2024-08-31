// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalulator extends Component {
  state = {input: ''}

  onChangeInput = event => {
    const {value} = event.target

    this.setState({input: value})
  }

  render() {
    const {input} = this.state

    return (
      <div className="container">
        <div className="letters-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="con">
              <label className="label" htmlFor="Text">
                Enter the phrase
              </label>
              <input
                className="letters"
                id="Text"
                onChange={this.onChangeInput}
                placeholder="Enter the phrase"
                type="text"
                value={input}
              />
            </div>
            <p className="count">No.of letters: {input.length}</p>
          </div>
          <img
            className="img"
            alt="letters calculator"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalulator
