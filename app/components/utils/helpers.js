var axios = require("axios");

var helper = {

  runQuery: function (term, limit, startYear, endYear) {
    console.log("Term: " + term);
    console.log("limit: " + limit);
    console.log("startYear: " + startYear);
    console.log("End Year: " + endYear);

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    var apiKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    url += '?api-key=' + apiKey + "&q=" + term + "&begin_date=" + startYear + "0101&end_date=" + endYear + "1231";

    return axios.get(url).then((response) => {
      // console.log(response);
      if (response.data.response.docs[0]) {
        return response;
      }

      return "Results could not be generated";
    });
  },

  getHistory: function () {
      return axios.get("/api");
  }


}; // END HELPER CLASS

module.exports = helper;
