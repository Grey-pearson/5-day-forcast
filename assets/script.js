let apiKey = "abcc66694ca1018668923524441c6829"

// let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchTerm + "&appid=" + apiKey
let searchBar = $('#searchBar')
let content = $('button')
let city = ''

// fetch(queryURL)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// content.on('click', function(){
//     console.log('test')
//     console.log(searchBar.val())
//     city = searchBar.val()
//     fetch(queryURL)
//   .then((response) => response.json())
//   .then((data) => console.log(data));
// })


content.on('click', function(){
    const searchTerm = searchBar.value
    console.log(searchTerm)
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey
    fetch(queryURL).then((response) => response.json()).then((data) => console.log(data));
})