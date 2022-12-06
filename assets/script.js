let apiKey = "abcc66694ca1018668923524441c6829"
let city = ''
let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey
let searchBar = $('#searchBar')
let content = $('button')

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
    city = searchBar.val()
    console.log(city)
    fetch(queryURL).then((response) => response.json()).then((data) => console.log(data));
})