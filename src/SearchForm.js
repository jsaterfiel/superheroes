import React, { Component } from "react";

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
      orderById: false
    };
  }

  onSubmit = e => {
    e.preventDefault();

    if (this.state.searchQuery || this.state.orderById) {
      this.props.onSearch(this.state.searchQuery, this.state.orderById);
    }
  };

  onSearchQueryChange = e => {
    this.setState({
      searchQuery: e.target.value
    });
  };

  onOrderByChange = e => {
    this.setState({
      orderById: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="superheroName">
            What superhero do you want to search for?
          </label>
          <input
            type="text"
            value={this.state.searchQuery}
            onChange={this.onSearchQueryChange}
            className="form-control"
            id="superheroName"
            aria-describedby="superheroHelp"
            placeholder="Superhero..."
          />
          <small id="superheroHelp" className="form-text text-muted">
            Everyone has a favorite superhero; which do you want to search for?
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="superheroOrderBy">
            <input
              type="checkbox"
              value={this.state.orderById}
              onChange={this.onOrderByChange}
              className="form-control"
              id="superheroOrderBy"
              aria-describedby="superheroOrderBy"
          /> Order By ID
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Search for superhero
        </button>
      </form>
    );
  }
}

export default SearchForm;
