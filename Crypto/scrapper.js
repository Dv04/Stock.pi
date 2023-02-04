import axios from "axios";
import pkg from "nodeplotlib";

const { plot, Plot } = pkg;

let response = null;
new Promise(async (resolve, reject) => {
  try {
    response = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": "dd998951-d215-4b03-8b90-7b922a100ccc",
        },
      }
    );
  } catch (ex) {
    response = null;
    // error
    console.log(ex);
    reject(ex);
  }
  if (response) {
    // success
    const jsonh = response.data;
    // for (let i = 0; i < jsonh.data.length; i++) {
    // console.log(jsonh.data[0].quote.USD);
    let xi = jsonh.data[0].quote.USD;
    const data = [
      {
        x: [0, 1, 2, 3, 4, 5, 6],
        y: [xi.price, ((xi.price) + (xi.price * xi.percent_change_1h) / 100), ((xi.price) + (xi.price * xi.percent_change_24h) / 100), ((xi.price) + (xi.price * xi.percent_change_7d) / 100), ((xi.price) + (xi.price * xi.percent_change_30d) / 100), ((xi.price) + (xi.price * xi.percent_change_60d) / 100), ((xi.price) + (xi.price * xi.percent_change_90d) / 100)],
        type: "scatter",
      },
    ];
    plot(data);

    // }
    resolve(jsonh);
  }
});
