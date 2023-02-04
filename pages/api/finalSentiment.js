const axios = require("axios");

axios
    .post("http://localhost:3000/api/emotion", {
        text: "This is a good news",
    })
    .then((response) => {
        console.log(response.data);
    });
