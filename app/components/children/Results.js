var React = require("react");

var Results = React.createClass({
  // getInitialState : function () {
  //   return { results: ""};
  // },

  // displayResults : function () {
  //   this.setState({ results: this.props.scrubbedArticles});
  // },

  // componentDidUpdate: function () {
  //   this.setState({ results: this.props.scrubbedArticles});
  // },

  render : function () {
    console.log(this.props.scrubbedArticles.status);
    if (this.props.scrubbedArticles.data == undefined) {
      return (
        <div>Search Articles</div>
      );
    } else if (this.props.scrubbedArticles.status != 200) {
      return (
        <h2>Error, Please try your search again.</h2>
      );


    } else {      
      return (<div>
        {this.props.scrubbedArticles.data.response.docs.map((article, index) => {
          return <div key={index} className="headlineHolder">
                    <h4 className="headline">{article.headline.main}</h4>
                    <span key={index} className="headlineButton">
                      <a key={index} href={article.web_url} rel="noopener noreferrer" target="_blank">
                        <button key={index} className="btn btn-default ">View Article</button>
                      </a>
                    </span>
                  </div>
        })}
      </div>);

      // });
    } // END IF/ELSE
  } // END RENDER


}); // END RESULTS CREATECLASS

module.exports = Results;
