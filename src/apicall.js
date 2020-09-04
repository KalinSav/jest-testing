import axios from "axios";

const apiCall = async function (url) {
  axios
    .get(url)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => "error");
};

module.exports = apiCall;
