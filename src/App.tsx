import React from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App(props: any) {
    return (
        <div className="app-wrapper">
            <Navbar />
            {/* <LearnMore /> */}

            <Header />
            {/* <CallToAction /> */}
            <Footer />

        </div>
    )
}

export default App
