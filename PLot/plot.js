// const yfinance = require("yfinance");
// import * as plotly from "plotly.js";
// const Plot = require('react-plotly.js').default;
// // Set the start and end date
// const start_date = "1990-01-01";
// const end_date = "2021-07-12";

// // Define the ticker list
// const tickers_list = ["AAPL", "IBM", "MSFT", "WMT"];

// // Create placeholder for data
// const data = [];

// // Fetch the data
// tickers_list.forEach(async (ticker) => {
//   const hist = await yfinance.historical({
//     symbol: ticker,
//     from: start_date,
//     to: end_date,
//   });
//   data.push({ x: hist.map((x) => x.date), y: hist.map((x) => x.close), name: ticker });
// });

// // Plot the graph
// const layout = {
//   title: "Adjusted Close Price",
//   xaxis: {
//     title: "Year",
//   },
//   yaxis: {
//     title: "Price",
//   },
// };
// const graphOptions = { layout: layout, filename: "closing-price", fileopt: "overwrite" };
// plotly.plot(data, graphOptions, (err, msg) => {
//   console.log(msg);
// });


import pkg from 'nodeplotlib';
const { plot, Plot } = pkg;

const data = [
  {
    x: [1, 3, 4, 5],
    y: [3, 12, 1, 4],
    type: 'scatter',
  },
];


plot(data);