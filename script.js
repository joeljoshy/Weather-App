var c_name = document.querySelector('#name')
var c_temp = document.querySelector('#temp')
var c_weath = document.querySelector('#weath')
var c_icon = document.querySelector('#icon')
var button = document.querySelector('#button')
var input = document.querySelector('.input')

button.addEventListener('click', function (name) {
  let cityname = input.value
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=c638ffb9bb3d3444c71cc6eb04f57f07&units=metric`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      var name = data['name']
      var temp = data['main']['temp']
      var weath = data['weather'][0]['main']
      var icon = data['weather'][0]['icon']

      body = `
              <h2 id="name">Weather in ${cityname}</h2>
              <p id="temp">${temp}°C</p>
              <div>
                <img src="https://openweathermap.org/img/wn/04n.png" alt="" id="icon" />
                <p id="weath">${weath}</p>
              </div>`
      document.querySelector('.body').innerHTML=body
    
      document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+cityname+"')"
      document.querySelector("#icon").src ="https://openweathermap.org/img/wn/" + icon + ".png";
    })

    .catch(error => alert("Invalid City name!!"))
})