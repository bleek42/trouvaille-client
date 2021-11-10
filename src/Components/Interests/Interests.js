import React, { Component } from 'react';
import ContextProvider from '../../Context'
import { Spring, config } from 'react-spring/renderprops'
import './interests.css'
import Header from '../Header/Header';

export default class Interests extends Component {

  static contextType = ContextProvider

  handleCheck = (e) => {
    let value = e.target.id;
    let checked = e.target.checked;
    if (checked) {
      //add checked values to context.userInterests
      this.context.addUserInterests(value);
    } else {
      //remove them if they're unchecked
      this.context.removeUserInterests(value)
    }
  }

  options = ["Camping", "Hiking", "Beaches", "Parks", "Zoos", "Museums", "Breweries", "Wineries", "Amusement", "Haunted", "Novelty", "Memorial", "Monuments"]

  handleSubmit = e => {
    e.preventDefault();
    //what do we do here?
  }

  handleClear = () => {
    this.context.clearUserInterests()
  }

  //map through options array and render a checkbox for each
  //map through userInterests array (in context), if a value matches value in options, render the checkbox as checked
  renderCheckBoxes = (option) => {
    const interestArr = this.context.userInterests
    //ifElseCEPTION!
    if (interestArr.length === 0) {
      return (
        <>
          <label htmlFor={option}>{option}</label>
          <input id={option} type="checkbox" onChange={e => this.handleCheck(e)} />
        </>
      )
    } else {
      return interestArr.map(interest => {
        if (interest === option) {
          return (
            <div>
              <label htmlFor={option}>{option}</label>
              <input id={option} type="checkbox" onChange={e => this.handleCheck(e)} checked />
            </div>
          )
        } else {
          return (
            <div>
              <label htmlFor={option}>{option}</label>
              <input id={option} type="checkbox" onChange={e => this.handleCheck(e)} />
            </div>
          )
        }
      })
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className='interests-container'>
          <header className="interests-header">
            { /* have the heading display the users name */}
            <h2>What does the user like to do when travelling?</h2>
            <section>
              <p>Help us get an idea of what you like to partake in when travelling! Check those that apply to you.</p>
            </section>
          </header>
          <div>
            <form className="interests-form">
              {this.options.map((option, i) => {
                return (
                  <>
                    {/* {this.renderCheckBoxes(option)} */}
                    <label key={i} htmlFor={option}>{option}</label>
                    <input id={option} type="checkbox" onChange={e => this.handleCheck(e)} />
                  </>
                )
              })}
            </form>
            <div className='clear-button'>
              <button onClick={this.handleClear}>
                Clear Selections
                  </button>
            </div>
          </div>
          <h3>Current Selections:</h3>
          <ul>
            {this.context.userInterests.map((interest, i) => {
              return (
                <Spring
                  config={config.slow}
                  from={{ marginLeft: -500 }}
                  to={{ marginLeft: 0 }}>
                  {props => <div style={props}> <li key={i}>
                    {interest}
                  </li></div>}
                </Spring>
              )
            })}
          </ul>
          <div className='submit-button'>
            <button onClick={() => this.props.history.push('/dashboard')}>
              Submit
          </button>
          </div>
        </div>
      </>
    )
  }
}
