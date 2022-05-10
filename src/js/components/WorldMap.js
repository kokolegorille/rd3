import React from "react"
import * as d3 from "d3"
import "d3-geo"
import "d3-scale-chromatic"

const WorldMap = ({data, size}) => {
    const colors = d3.scaleOrdinal(d3.schemeAccent)

    const projection = d3.geoMercator()
    const pathGenerator = d3.geoPath().projection(projection)
    const countries = data.map((d, i) => 
        <path 
            key={`map${i}`} 
            d={pathGenerator(d)}
            style={{fill: colors(d)}} 
            className="countries" />
    )
    
    return (
        <svg height={size[0]} 
            width={size[1]}>
            {countries}
        </svg>
    )
}

export default WorldMap