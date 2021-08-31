import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Stocks from "./pages/Stocks"

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
            </Switch>
        </Router>
    )
}

export default App
