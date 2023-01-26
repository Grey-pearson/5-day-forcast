let apiKey = "abcc66694ca1018668923524441c6829"
let content = $('button')
// make var for each used element and have to do creating element funciton

// api reponse.list has 40 objects
// each usable object on api response.list[0, 5, 13, 21, 29]

content.on('click', function () {
    let searchBar = document.getElementById("searchBar").value;
    console.log(searchBar)
    let city = searchBar
    let queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
    fetch(queryURL).then((response) => response.json()).then((data) => displayWeather(data));
    recordSearch(city)
})

// only appends data to html for weather
function displayWeather(data) {

}

// only to save searches and create the list elements
function recordSearch(city) {

}