import React from "react"
function Chart(props: any) {
  
    return (
        <div className="stocks">
            <h1>Chart Page</h1>
            <canvas id="myChart" width="400" height="400"></canvas>
        </div>
    )
}

export default Chart
