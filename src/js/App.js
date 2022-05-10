import React from "react"
import * as d3 from "d3"
import "d3-geo"
import "d3-array"

import worlddata from "./world"
import BarChart from "./components/BarChart"
import WorldMap from "./components/WorldMap"

const appdata = worlddata.features
//   .filter(d => d3.geoCentroid(d)[0] < -20)

appdata
  .forEach((d,i) => {
    const offset = Math.random()
    d.launchday = i
    d.data = d3.range(30).map((p,q) => q < i ? 0 : Math.random() * 2 + offset)
})

const App = () => {
    return (
        <div>
            <h1>Hello React w/ D3</h1>
            <BarChart data={[5, 10, 1, 3]} size={[500, 500]} />
            <WorldMap data={appdata} size={[1000, 1000]} />
        </div>
    )
}

export default App