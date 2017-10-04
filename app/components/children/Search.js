var React = require("react");

var Search = React.createClass({

  getInitialState: function() {
    return { searchTerm: "", resultCount: "", startYear: "", endYear: "" };
  },

  handleTermChange: function(event) {
    this.setState({
      searchTerm: event.target.value
    });
  },

  handleCountChange: function(event) {
    this.setState({
      resultCount: event.target.value
    });
  },

  handleStartChange: function(event) {
    this.setState({
      startYear: event.target.value
    });
  },

  handleEndChange: function(event) {
    this.setState({
      endYear: event.target.value
    });
  },

  handleSubmit: function(event) {
    event.preventDefault();

    this.props.setTerm(this.state.searchTerm, this.state.resultCount, this.state.startYear, this.state.endYear);
    // this.props.setCount(this.state.resultCount);
    // this.props.setStartYear(this.state.startYear);
    // this.props.setEndYear(this.state.endYear);
    // this.setState({
    //   searchTerm: "",
    //   resultCount: "",
    //   startYear: "",
    //   endYear: ""
    // });
  },

  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Article Search</h3>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                <strong>Query</strong>
              </h4>

              <input
                value={this.state.searchTerm}
                type="text"
                className="form-control text-center"
                id="term"
                onChange={this.handleTermChange}
                placeholder="Search Term"
                required
              />

              <input
                value={this.state.resultCount}
                type="text"
                className="form-control text-center"
                id="term"
                onChange={this.handleCountChange}
                placeholder="Article Limit"
                required
              />

              <input
                value={this.state.startYear}
                type="text"
                className="form-control text-center"
                id="term"
                onChange={this.handleStartChange}
                placeholder="Start Year"
                required
              />

              <input
                value={this.state.endYear}
                type="text"
                className="form-control text-center"
                id="term"
                onChange={this.handleEndChange}
                placeholder="End Year"
                required
              />
              <br />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}); // END SEARCH CLASS

module.exports = Search;
