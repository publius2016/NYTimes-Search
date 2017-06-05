$(function () {


	$('#runSearch').on('click', function (event) {

		event.preventDefault();

		var search = $('#searchTerm').val().trim();
		var records = $('#recordCount').val();
		var startYear = $('#startYear').val().trim() + "0101";
		var endYear = $('#endYear').val().trim() + "1231";

		console.log(search);
		console.log(records);
		console.log(startYear);
		console.log(endYear);

		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		var apiKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
		url += '?' + $.param({
			'api-key': apiKey,
	  		'q': search,
	  		'begin_date': startYear,
	  		'end_date': endYear
		});

		$.ajax({
		  url: url,
		  method: 'GET',
		}).done(function(data) {
		  
		  console.log(data);

		  // var results = response.docs
		  var headline = $('<h3>');
		  var author = $('<p>');
		  var date = $('<p>');
		  var link = $('<a>');
		  var resultHolder = $('<div>');

		  if (records == 1) {


		  		$(headline).text(data.response.docs[0].headline.main);
		  		$(author).text(data.response.docs[0].byline.original);
		  		$(date).text(data.response.docs[0].pub_date);
		  		$(link).text(data.response.docs[0].web_url).attr('href', data.response.docs[0].web_url).attr('target', "_blank");

		  		resultHolder.append(headline, author, date, link);

		  		$('#resultsDisplay').append(resultHolder);

			}




		}).fail(function(err) {
		  throw err;
		}); // END AJAX




		


	}) // END RUNSEARCH CLICK



}); // END READY