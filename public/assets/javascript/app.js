$(function () {


	$('#runSearch').on('click', function (event) {

		event.preventDefault();
		$('#resultsDisplay').empty();


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
		  		var pubDate = data.response.docs[0].pub_date;

				var pubDateParse = pubDate.substring(0, pubDate.indexOf('T'));

			  	$(date).text(pubDateParse);
		  		$(link).text(data.response.docs[0].web_url).attr('href', data.response.docs[0].web_url).attr('target', "_blank");

		  		resultHolder.append(headline, author, date, link).addClass('resultHolder');

		  		$('#resultsDisplay').append(resultHolder);

			} else if (records == 5) {

				for (var i = 0; i < 5; i++) {

					resultHolder = $('<div>');
					headline = $('<h3>');
		  			author = $('<p>');
		  			date = $('<p>');
		  			link = $('<a>');
					
					$(headline).text(data.response.docs[i].headline.main);
			  		$(author).text(data.response.docs[i].byline.original);
			  		var pubDate = data.response.docs[i].pub_date;

					var pubDateParse = pubDate.substring(0, pubDate.indexOf('T'));

			  		$(date).text(pubDateParse);
			  		$(link).text(data.response.docs[i].web_url).attr('href', data.response.docs[i].web_url).attr('target', "_blank");

			  		resultHolder.append(headline, author, date, link).addClass('resultHolder');

			  		$('#resultsDisplay').append(resultHolder);

				}

			} else if (records == 10) {

				for (var i = 0; i < 10; i++) {

					resultHolder = $('<div>');
					headline = $('<h3>');
		  			author = $('<p>');
		  			date = $('<p>');
		  			link = $('<a>');
					
					$(headline).text(data.response.docs[i].headline.main);
			  		$(author).text(data.response.docs[i].byline.original);

			  		var pubDate = data.response.docs[i].pub_date;

					var pubDateParse = pubDate.substring(0, pubDate.indexOf('T'));

			  		$(date).text(pubDateParse);
			  		$(link).text(data.response.docs[i].web_url).attr('href', data.response.docs[i].web_url).attr('target', "_blank");

			  		resultHolder.append(headline, author, date, link).addClass('resultHolder');

			  		$('#resultsDisplay').append(resultHolder);

				}

			} // END IF/ELSE

		}).fail(function(err) {
		  throw err;
		}); // END AJAX

	}) // END RUNSEARCH CLICK



}); // END READY