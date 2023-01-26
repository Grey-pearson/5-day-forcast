let apiKey = ""
let content = $('button')
// make var for each used element and have to do creating element funciton

// api reponse.list has 40 objects
// each usable object on api response.list[0, 5, 13, 21, 29]

content.on('click', function () {
    let city = document.getElementById("searchBar").value;
    let queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
    fetch(queryURL).then((response) => response.json()).then((data) => displayWeather(data));
    recordSearch(city)
})

// only appends data to html for weather
function displayWeather(data) {
    let day0 = data.list[0]
    let day1 = data.list[5]
    let day2 = data.list[13]
    let day3 = data.list[21]
    let day4 = data.list[29]
    console.log(day0)
    console.log(day1)
    console.log(day2)
    console.log(day3)
    console.log(day4)
}

// only to save searches and create the list elements
function recordSearch(city) {

}