import React, { Component } from "react"
import CardList from "../components/CardList"
// import { robots } from "./robots"
import SearchBox from "../components/SearchBox"
import Scroll from "../components/Scroll"
import "./App.css"
import ErrorBoundry from "../components/ErrorBoundry"
class App extends Component {
  constructor() {
    super()
    //     These are the things that can change and describes our app
    //     usually live in the parent component as well
    this.state = {
      robots: [],
      searchfield: "",
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }))
  }

  // Just a random function name we have made up, similar to DOM manipulation
  // everytime input changes we get an event..
  //   we can pass this function now on SearchBox component..has to be this. because it is an object
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  // since app owns state it is allowed to change it (robots)
  // state variables being passed to CardList as prop
  render() {
    const { robots, searchfield } = this.state
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    if (!robots.length) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className="tc">
          <h1 className="f2">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      )
    }
  }
}

export default App
