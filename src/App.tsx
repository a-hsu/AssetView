import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Stocks from "./pages/Stocks"
import Chart from "./pages/Chart"
function App(props: any) {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/stocks">
                    <Stocks />
                </Route>
                <Route path="/chart">
                    <Chart />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
