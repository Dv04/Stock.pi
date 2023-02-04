import axios from "axios";
import pkg from "nodeplotlib";

const { plot, Plot } = pkg;

function plotting(text) {
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
      for (let i = 0; i < jsonh.data.length; i++) {
        // console.log(jsonh.data[0].name);
        // let text = "Hello world, welcome to the Bitcoin";
        let parseing = jsonh.data[i].symbol;
        let parser2 = jsonh.data[i].name;
        if (text.includes(parseing) || text.includes(parser2)) {
          console.log("Yes, the text contains the word " + parseing);
          let xi = jsonh.data[i].quote.USD;
          let x2 = ((xi.price) + (xi.price * xi.percent_change_1h) / 100);
          let x3 = ((xi.price) + (xi.price * xi.percent_change_24h) / 100);
          let x4 = ((xi.price) + (xi.price * xi.percent_change_7d) / 100);
          let x5 = ((xi.price) + (xi.price * xi.percent_change_30d) / 100);
          let x6 = ((xi.price) + (xi.price * xi.percent_change_60d) / 100);
          let x7 = ((xi.price) + (xi.price * xi.percent_change_90d) / 100);
          const data = [
            {
              x: [0, 1, 2, 3, 4],
              y: [xi.price, Math.max(x2, x3, x4), Math.min(x2, x3, x4), Math.max(x5, x6, x7), Math.min(x5, x6, x7)],
              type: "scatter",
            },
          ];
          plot(data);
          break;
        }

      }
      resolve(jsonh);
    }
  })
};

plotting("Hello world, welcome to the Bitcoin");
