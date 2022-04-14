import { scaleBand, scaleLinear } from "d3-scale";
import { transition } from "d3-transition";
import React from "react";
import XYAxis from "./axis/xy-axis.js";
import Bar from "./bar/bar.js";
import Grid from "./grid/grid.js";

const BarChart = ({ followers, following, publicRepos, publicGists }) => {
  const data = [
    { name: "Followers", value: followers },
    { name: "Following", value: following },
    { name: "Public Gists", value: publicGists },
    { name: "Public Repos", value: publicRepos },
  ];

  const parentWidth = 500;
  const margin = {
    top: 10,
    right: 10,
    bottom: 20,
    left: 40,
  };
  const ticks = 7;
  const t = transition().duration(1000);

  const width = parentWidth - margin.left - margin.right;
  const height = parentWidth * 0.5 - margin.top - margin.bottom;

  const xScale = scaleBand()
    .domain(data.map((d) => d.name))
    .range([0, width])
    .padding(0.26);

  const yScale = scaleLinear()
    .domain([0, Math.max(...data.map((d) => d.value))])
    .range([height, 0])
    .nice();

  return (
    <div>
      <svg
        width={width + margin.left + margin.right}
        height={height + margin.top + margin.bottom}
      >
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <XYAxis {...{ xScale, yScale, height, ticks, t }} />
          // <Grid {...{ xScale, yScale, width, ticks, t }} />
          <Bar
            {...{
              xScale,
              yScale,
              data,
              height,
              t,
            }}
          />
        </g>
      </svg>
    </div>
  );
};

export default BarChart;
