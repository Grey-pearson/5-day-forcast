let apiKey = "abcc66694ca1018668923524441c6829"
// let search = document.getElementById('search')
let day1 = document.querySelector('#day1')
let day2 = document.querySelector('#day2')
let day3 = document.querySelector('#day3')
let day4 = document.querySelector('#day4')
let day5 = document.querySelector('#day5')
let recall = document.querySelector('.recall')
// make var for each used element and have to do creating element funciton

// api reponse.list has 40 objects
// each usable object on api response.list[0, 8, 16, 34, 42]

function search(event) {
    event.preventDefault()
    let city = document.getElementById("searchBar").value;
    let queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
    fetch(queryURL).then((response) => response.json()).then((data) => displayWeather(data, city));
    recordSearch(city)
    return
}

function recallSearch(event, city) {
    event.preventDefault()
    let queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
    fetch(queryURL).then((response) => response.json()).then((data) => displayWeather(data, city));
    return
}

// only appends data to html for weather
function displayWeather(data, city) {
    // let day0 = data.list[0]
    // let day1 = data.list[8]
    // let day2 = data.list[16]
    // let day3 = data.list[34]
    // let day4 = data.list[39]

    //  day1
    day1.querySelector('.city').innerHTML = city
    day1.querySelector('.date').innerHTML = data.list[0].dt_txt
    day1.querySelector('.icon').src = icon(data.list[0].weather[0].icon)
    day1.querySelector('.temp').innerHTML = `${data.list[0].main.temp} K`
    day1.querySelector('.wind').innerHTML = `${data.list[0].wind.speed} m/s`
    day1.querySelector('.humidity').innerHTML = `${data.list[0].main.humidity} %`

    // day2
    day2.querySelector('.date').innerHTML = data.list[9].dt_txt
    day2.querySelector('.icon').src = icon(data.list[9].weather[0].icon)
    day2.querySelector('.temp').innerHTML = `${data.list[9].main.temp} K`
    day2.querySelector('.wind').innerHTML = `${data.list[9].wind.speed} m/s`
    day2.querySelector('.humidity').innerHTML = `${data.list[9].main.humidity} %`

    // day3
    day3.querySelector('.date').innerHTML = data.list[19].dt_txt
    day3.querySelector('.icon').src = icon(data.list[19].weather[0].icon)
    day3.querySelector('.temp').innerHTML = `${data.list[19].main.temp} K`
    day3.querySelector('.wind').innerHTML = `${data.list[19].wind.speed} m/s`
    day3.querySelector('.humidity').innerHTML = `${data.list[19].main.humidity} %`

    // day4
    day4.querySelector('.date').innerHTML = data.list[29].dt_txt
    day4.querySelector('.icon').src = icon(data.list[29].weather[0].icon)
    day4.querySelector('.temp').innerHTML = `${data.list[29].main.temp} K`
    day4.querySelector('.wind').innerHTML = `${data.list[29].wind.speed} m/s`
    day4.querySelector('.humidity').innerHTML = `${data.list[29].main.humidity} %`

    // day5
    day5.querySelector('.date').innerHTML = data.list[39].dt_txt
    day5.querySelector('.icon').src = icon(data.list[39].weather[0].icon)
    day5.querySelector('.temp').innerHTML = `${data.list[39].main.temp} K`
    day5.querySelector('.wind').innerHTML = `${data.list[39].wind.speed} m/s`
    day5.querySelector('.humidity').innerHTML = `${data.list[39].main.humidity} %`



}

function icon(data) {
    let image
    switch (data) {
        case '01d':
            image = 'http://openweathermap.org/img/wn/01d@2x.png'
            break
        case '01n':
            image = 'http://openweathermap.org/img/wn/01d@2x.png'
            break
        case '02d':
            image = 'http://openweathermap.org/img/wn/02d@2x.png'
            break
        case '02n':
            image = 'http://openweathermap.org/img/wn/02d@2x.png'
            break
        case '03d':
            image = 'http://openweathermap.org/img/wn/03d@2x.png'
            break
        case '03n':
            image = 'http://openweathermap.org/img/wn/03d@2x.png'
            break
        case '04d':
            image = 'http://openweathermap.org/img/wn/04d@2x.png'
            break
        case '04n':
            image = 'http://openweathermap.org/img/wn/04d@2x.png'
            break
        case '09d':
            image = 'http://openweathermap.org/img/wn/09d@2x.png'
            break
        case '09n':
            image = 'http://openweathermap.org/img/wn/09d@2x.png'
            break
        case '10d':
            image = 'http://openweathermap.org/img/wn/10d@2x.png'
            break
        case '10n':
            image = 'http://openweathermap.org/img/wn/10d@2x.png'
            break
        case '11d':
            image = 'http://openweathermap.org/img/wn/11d@2x.png'
            break
        case '11n':
            image = 'http://openweathermap.org/img/wn/11d@2x.png'
            break
        case '13d':
            image = 'http://openweathermap.org/img/wn/13d@2x.png'
            break
        case '13n':
            image = 'http://openweathermap.org/img/wn/13d@2x.png'
            break
        case '50d':
            image = 'http://openweathermap.org/img/wn/50d@2x.png'
            break
        case '50n':
            image = 'http://openweathermap.org/img/wn/50d@2x.png'
            break
        default:
            image = ''
    }
    return image
}


// only to save searches and create the list elements
function recordSearch(city) {
    const history = document.getElementById("searchHistory")
    const button = document.createElement("button")
    // const txt = createTextNode(city)
    button.classList.add("col-lg-11");
    button.classList.add("card");
    button.classList.add("m-3");
    button.classList.add("recall");
    button.setAttribute('onclick', `recallSearch(event, "${city}")`);
    button.innerHTML = city
    history.appendChild(button)
    window.localStorage.setItem('city', city)
    console.log(window.localStorage.getItem('city'))
    saveCity(city)
}

function loadSavedCity() {
    var city = localStorage.getItem('city');
    // if (city) {
    //     city = JSON.parse(city);
    // } else {
    //     city = [];
    // }
    // return city;
    // city.replace(/"|'/g, '') 
    // console.log(city.replace(/"|'/g, ''))
    recordSearch(city)

}


function saveCity(city) {
    localStorage.setItem('city', JSON.stringify(city));
}

loadSavedCity()