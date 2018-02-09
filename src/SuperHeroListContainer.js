import React, { Component } from 'react'
import SuperHeroList from './SuperHeroList'
import { searchForSuperheros } from './marvelApi'

class SuperHeroListContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listOfMatchingHeros: []
    }
  }

  componentDidMount = async props => {
    if(this.props.superHero) {
      const matches = await searchForSuperheros(this.props.superHero)
      this.setState({
        listOfMatchingHeros: matches
      })
    }
  }

  componentWillReceiveProps = async newProps => {
    if(newProps.superHero) {
      const matches = await searchForSuperheros(newProps.superHero)
      this.setState({
        listOfMatchingHeros: matches
      })
    }
  }

  render() {
    const heros = [...this.state.listOfMatchingHeros]
    console.log(this.props.orderById)
    if (this.props.orderById) { 
      heros.sort((a, b) => {
        return a.id < b.id
      })
    }
    return <SuperHeroList herosList={heros} superHero={this.props.superHero} />
  }
}

export default SuperHeroListContainer
