
// Yelp API
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '48c1efcdf0mshbc4f579e09271eep1736d1jsn77c5309cc348',
		'X-RapidAPI-Host': 'yelp-com.p.rapidapi.com'
	}
};

// Example URL/Query
fetch('https://yelp-com.p.rapidapi.com/search/nearby/37.788719679657554/-122.40057774847898?radius=5&term=Restaurants&offset=0', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


// Google Maps API
const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '48c1efcdf0mshbc4f579e09271eep1736d1jsn77c5309cc348',
		'X-RapidAPI-Host': 'google-maps28.p.rapidapi.com'
	}
};

// Example URL/Query
fetch('https://google-maps28.p.rapidapi.com/maps/api/place/textsearch/json?query=White%20House&region=en&language=en', options2)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

