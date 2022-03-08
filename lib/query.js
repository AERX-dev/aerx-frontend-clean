const axios = require("axios");

export const query = async (edp, body, contentType = "multipart/form-data") => {
  const api = "/api/crust" + edp;
  const res = await axios
    .post(api, body, {
      headers: {
        "Content-Type": contentType,
      },
    })
    .then((response) => {
      return response.data;
    });
  return res;
};
