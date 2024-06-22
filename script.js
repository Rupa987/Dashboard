// The username and password
// DO NOT store credentials in your JS file like this
let username = 'coalition';
let password = 'skills-test';
let auth = btoa(`${username}:${password}`);

// Authenticate (dummy API)
fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
	headers: {
		'Authorization': `Basic ${auth}`
	}
}).then(function (response) {
	if (response.ok) {
		return response.json();
	}
    throw new Error('Network response was not ok.');
}).then(function (data) {
    // Filter data for Jessica Taylor
    let jessicaData = data.filter(function (person) {
        return person.name === 'Jessica Taylor';
    });

    // Display Jessica Taylor's information
    console.log(jessicaData);

}).catch(function (error) {
    console.warn('Fetch error:', error);
});