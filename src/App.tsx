import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Stocks from "./pages/Stocks"
import Chart from "./pages/Chart"
import SingleStock from "./pages/SingleStock"
function App(props: any) {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/watchlist">
                    <Stocks />
                </Route>
                <Route path="/stocks/ticker">
                    <SingleStock />
                </Route>
                <Route path="/chart">
                    <Chart />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
