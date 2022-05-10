import React, { useEffect, useRef } from "react"
import * as d3 from "d3"
import "d3-scale"
import { select } from "d3-selection"

const BarChart = ({data, size}) => {
    const ref = useRef()

    useEffect(() => {
        createBarChart()
    }, [data])

    const createBarChart = () => {
        const dataMax = d3.max(data)
        const yScale = d3.scaleLinear()
            .domain([0, dataMax])
            .range([0, size[1]])
        
        select(ref.current)
            .selectAll("rect")
            .data(data)
            .enter()
            .append("rect")

        select(ref.current)
            .selectAll("rect")
            .exit()
            .remove()

        select(ref.current)
            .selectAll("rect")
            .data(data)
            .style("fill", "pink")
            .attr("x", (_d, i) => i * 25)
            .attr("y", (d, _i) => size[1] - yScale(d))
            .attr("height", (d, _i) => yScale(d))
            .attr("width", 25)
    }

    return (
        <svg ref={ref} 
            height={size[0]} 
            width={size[1]}></svg>
    )
}

export default BarChart