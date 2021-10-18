import React, { useState, useEffect } from "react"
import CardList from "../components/CardList"
// import { robots } from "./robots"
import SearchBox from "../components/SearchBox"
import Scroll from "../components/Scroll"
import "./App.css"
import ErrorBoundry from "../components/ErrorBoundry"

function App() {
  // constructor() {
  //   super()
  //   //     These are the things that can change and describes our app
  //   //     usually live in the parent component as well
  //   this.state = {
  //     robots: [],
  //     searchfield: "",
  //   }
  // }
  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfield] = useState("")
  const [count, setCount] = useState(0)

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => this.setState({ robots: users }))
  // }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users))
    console.log(count)
  }, [count]) //only run if count changes

  // Just a random function name we have made up, similar to DOM manipulation
  // everytime input changes we get an event..
  //   we can pass this function now on SearchBox component..has to be this. because it is an object
  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

  // since app owns state it is allowed to change it (robots)
  // state variables being passed to CardList as prop
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase())
  })
  if (!robots.length) {
    return <h1>Loading</h1>
  } else {
    return (
      <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <button onClick={() => setCount(count + 1)}>Click Me!</button>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    )
  }
}

export default App
