import React, { Component } from 'react'
import SuperHeroListEntry from './SuperHeroListEntry'
class SuperHeroList extends Component {
  render() {
    if (this.props.herosList) {
      return (
        <div>
          <h1>{this.props.herosList.length} Results for {this.props.superHero}</h1>
          <ul>
            {this.props.herosList.map(hero => {
              return <SuperHeroListEntry hero={hero} />
            })}
          </ul>
        </div>
      )
    }
    return <h1>Search for someone</h1>
  }
}

export default SuperHeroList
