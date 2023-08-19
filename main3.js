  var input = document.querySelector('.input_text');
  var main = document.querySelector('#name');
  var temp = document.querySelector('.temp');
  // var desc = document.querySelector('.desc');
  // var clouds = document.querySelector('.clouds');
  var wind = document.querySelector('#windbhalue');
  var humidity = document.querySelector('#humiditybhalue');
  var button= document.querySelector('.submit');
  var button2 = document.querySelector('.location-button');
  var weatherval = document.querySelector('#weather-bhalue');
  var preci = document.querySelector('#precbhalue');

  const API_KEY ='49cc8c821cd2aff9af04c9f98c36eb74';


  input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
    
     document.querySelector('.submit').click();
    }
  });

    button.addEventListener('click', function(name){
      fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric'+'&appid=50a7aa80fa492fa92e874d23ad061374')
      .then(response => response.json())
      .then(data => {

        console.log(data);
       const latitude = data['coord']['lat'];
       const longitude = data['coord']['lon'];

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(dat => {

            console.log(dat);
            var precvalue = dat['daily'][0]['rain'];
            preci.innerHTML = precvalue + " %";

            var weatherforecast = document.getElementById("weatherforecast");
            var todaycast = document.querySelector('.imgtoday');

    let otherDayForcast = ''
    let todayforecast =''
    dat.daily.forEach((day, idx) => {
        
        if(idx != 0){
            otherDayForcast += `
            <li class="weathitem" >
            <img src="http://openweathermap.org/img/wn//${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon" height="50" width="50" >

                <span class="day"><h6> ${window.moment(day.dt*1000).format('ddd')}</h6></span>
                
                <span class="daytemp">${day.temp.day}&#176;C</span>
             </li>   
             
            
            `
           
            
            
        }
        else{
            todayforecast +=
          `<div class="imgtoday">
          <img src="http://openweathermap.org/img/wn//${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon" >
          </div>
          `
          
        }
           
        
    })
    weatherforecast.innerHTML = otherDayForcast;
    todaycast.innerHTML = todayforecast;
    // $("li").css("clear", "both");
    $(".info").css({"clear": "both",  "position":"relative", "background-image": "linear-gradient(to right bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12)", "padding-top": "75px", "border-radius": "25px", });
    $(".week").css({"display":"flex",  "justifyContent":"start",  "alignItems": "none", });
    $(".weather-side").css({"float":"none", "display":"block", "margin-left":"auto", "margin-right":"auto"});

    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var windValue = data['wind']['speed'];
    var humidityValue = data['main']['humidity'];
    var weathValue = data['weather'][0]['description'];

    main.innerHTML = nameValue;
    
    temp.innerHTML = Math.round(tempValue) + "<span>"+"&degC"+"</span>";
    wind.innerHTML = Math.round(windValue*3.6) + " km/h";
    humidity.innerHTML = humidityValue + " %";
    weatherval.innerHTML = weathValue;
                })


        
            })
      
      
    
      .catch(err => alert("Wrong city name!"));
    
    })

    button2.addEventListener('click', function(){
      input.value ="";
      
    })


//part2

// const API_KEY ='49cc8c821cd2aff9af04c9f98c36eb74';

// getWeatherData()
// button.addEventListener('click', function(name){
//     navigator.geolocation.getCurrentPosition((success) => {
        
//         let {latitude, longitude } = success.coords;

//         fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

//         console.log(data);
       
//         })

//     })
// });

  
    
    
    function myFunction() {
      var d = new Date();
      var date = d.getDate();
  
   
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let day = days[d.getDay()];
      document.getElementById("day").innerHTML = "<h3>" +day + "</h3>";
  
  
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
      
      
      let month = months[d.getMonth()];
      let year = d.getFullYear();
    
      // return `${date} ${month} ${year}`;
      document.getElementById("date").innerHTML =  date+ " "+ month+" "+year;
  
  
    }

    
    

