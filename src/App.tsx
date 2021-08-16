import React from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Footer from "./components/Footer"
function App() {
    return (
        <div className="App">
            <Navbar />
            {/* <LearnMore /> */}
            <Header />
            {/* <CallToAction /> */}
            <Footer />
            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header> */}
        </div>
    )
}

export default App
