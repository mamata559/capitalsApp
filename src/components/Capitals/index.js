import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeCapitalDisplayId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeCapitalDisplayId: event.target.value})
  }

  getCountryName = () => {
    const {activeCapitalDisplayId} = this.state

    const countryAndCapital = countryAndCapitalsList.find(
      each => each.id === activeCapitalDisplayId,
    )
    return countryAndCapital.country
  }

  render() {
    const {activeCapitalDisplayId} = this.state
    const countryName = this.getCountryName(activeCapitalDisplayId)

    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="select-container">
            <select
              className="select"
              onChange={this.onChangeCapital}
              value={activeCapitalDisplayId}
            >
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id} className="option">
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para">is capital of which country?</p>
          </div>
          <p className="country-name">{countryName}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
