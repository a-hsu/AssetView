import React from "react"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Home(props: any) {
    return (
        <div className="page-home">
            <Navbar />
            {/* <LearnMore /> */}

            <Header />
            {/* <CallToAction /> */}
            <Footer />
        </div>
    )
}

export default Home
