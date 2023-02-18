let apiKey = ""
let search = document.getElementById('searchButton')
let day1 = document.querySelector('#day1')
let day2 = document.querySelector('#day2')
let day3 = document.querySelector('#day3')
let day4 = document.querySelector('#day4')
let day5 = document.querySelector('#day5')
// make var for each used element and have to do creating element funciton

// api reponse.list has 40 objects
// each usable object on api response.list[0, 8, 16, 34, 42]

search.on('click', function () {
    let city = document.getElementById("searchBar").value;
    let queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
    fetch(queryURL).then((response) => response.json()).then((data) => displayWeather(data, city));
    recordSearch(city)
})

// only appends data to html for weather
function displayWeather(data, city) {
    console.log(data)
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
    console.log('icon')
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
    console.log(data)
    let image
    switch (data) {
        case '01d':
            console.log(1)
            image = 'http://openweathermap.org/img/wn/01d@2x.png'
            break
        case '01n':
            console.log(1)
            image = 'http://openweathermap.org/img/wn/01d@2x.png'
            break
        case '02d':
            console.log(2)
            image = 'http://openweathermap.org/img/wn/02d@2x.png'
            break
        case '02n':
            console.log(2)
            image = 'http://openweathermap.org/img/wn/02d@2x.png'
            break
        case '03d':
            console.log(3)
            image = 'http://openweathermap.org/img/wn/03d@2x.png'
            break
        case '03n':
            console.log(3)
            image = 'http://openweathermap.org/img/wn/03d@2x.png'
            break
        case '04d':
            console.log(4)
            image = 'http://openweathermap.org/img/wn/04d@2x.png'
            break
        case '04n':
            console.log(4)
            image = 'http://openweathermap.org/img/wn/04d@2x.png'
            break
        case '09d':
            console.log(5)
            image = 'http://openweathermap.org/img/wn/09d@2x.png'
            break
        case '09n':
            console.log(5)
            image = 'http://openweathermap.org/img/wn/09d@2x.png'
            break
        case '10d':
            console.log(6)
            image = 'http://openweathermap.org/img/wn/10d@2x.png'
            break
        case '10n':
            console.log(6)
            image = 'http://openweathermap.org/img/wn/10d@2x.png'
            break
        case '11d':
            console.log(7)
            image = 'http://openweathermap.org/img/wn/11d@2x.png'
            break
        case '11n':
            console.log(7)
            image = 'http://openweathermap.org/img/wn/11d@2x.png'
            break
        case '13d':
            console.log(8)
            image = 'http://openweathermap.org/img/wn/13d@2x.png'
            break
        case '13n':
            console.log(8)
            image = 'http://openweathermap.org/img/wn/13d@2x.png'
            break
        case '50d':
            console.log(9)
            image = 'http://openweathermap.org/img/wn/50d@2x.png'
            break
        case '50n':
            console.log(9)
            image = 'http://openweathermap.org/img/wn/50d@2x.png'
            break
        default:
            console.log(10)
            image = ''
    }
    console.log(image)
    return image
}


// only to save searches and create the list elements
function recordSearch(city) {
    console.log(city)
    search
}