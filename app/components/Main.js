var React = require("react");

var Search = require("./children/Search");
var Saved = require("./children/Saved");
var Results = require("./children/Results");

var helpers = require("./utils/helpers");

var Main = React.createClass({
  getInitialState: function () {
    return { searchTerm: "", resultCount: "", startYear: "", endYear: "", scrubResults: "", articlesSaved: [] };
  },

  componentDidMount: function () {
    // helpers.getHistory().then(function(response) {
    //   console.log(response);
    // }.bind(this));
  },

  componentDidUpdate: function () {

  },

  setTerm: function (term, count, startYearInput, endYearInput) {
    this.setState({ searchTerm: term, resultCount: count, startYear: startYearInput, endYear: endYearInput });
    helpers.runQuery(this.state.searchTerm, this.state.resultCount, this.state.startYear, this.state.endYear).then(function(data) {
      console.log(data);
      this.setState({ scrubResults: data });
      console.log(this.state.scrubResults);
    }.bind(this)); // END PROMISE FOR RUNQUERY FUNCTION
    // this.setState({ resultCount: count });
    // this.setState({ startYear: startYearInput });
    // this.setState({ endYear: endYearInput });
  },

  // setCount: function (count) {
  //   this.setState({ resultCount: count });
  // },
  //
  // setStartYear: function (startYearInput) {
  //   this.setState({ startYear: startYearInput });
  // },
  //
  // setEndYear: function (endYearInput) {
  //   this.setState({ endYear: endYearInput });
  // },

  setResults: function(results) {
    this.setState({ results: results });
  },

  render: function () {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">New York Times Scrubber</h2>
            <p className="text-center">
              <em>Enter an article search term</em>
            </p>
          </div>

          <div className="col-md-6">

            <Search
              setTerm={this.setTerm}
              // setCount={this.setCount}
              // setStartYear={this.setStartYear}
              // setEndYear={this.setEndYear}
            />

          </div>

          <div className="col-md-6">

            <Results scrubbedArticles={this.state.scrubResults} />

          </div>

        </div>

        <div className="row">

          {/* <Saved savedArticles={this.state.history} /> */}

        </div>

      </div>



    );
  }
}); // END MAIN CLASS

module.exports = Main;
