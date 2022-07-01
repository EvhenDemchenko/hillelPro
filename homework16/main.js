class WeatherApi {
    constructor() {
        this.wrapper = document.querySelector('.wrapper');
        this.formInput = document.querySelector('.input');
        this.btn1 = document.querySelector('.btn1');
        this.btn2 = document.querySelector('.btn2');
        this.state = [];

        this.btn1.addEventListener('click', (event) => {
            event.preventDefault();
            this.SendRequest(this.formInput.value)
        })
        this.btn2.addEventListener('click', (event) => {
            event.preventDefault();
            this.wrapper.innerHTML = '';
            this.UpdateData(this.state);
        })

        this.ClickHref();
        this.SendRequest('lviv');
    }

    ClickHref() {
        this.wrapper.addEventListener('click', (event) => {
            if (event.target.classList.contains('href')) {
                event.preventDefault();
                event.target.closest('.href').nextElementSibling.classList.toggle('closed');
            }
        });
    }

    UpdateData(state) {
        state.forEach(city => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`, {
                method: 'GET'
            }).then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    console.error(res.statusText);
                }
            }).then(res => {
                this.ReRenderHtml(res);
            })
        })
    }

    SendRequest(city) {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`, {
            method: 'GET'
        }).then(res => {
            if (res.ok) {
                return res.json();
            } else {
                console.error(res.statusText);
            }
        }).then(weatherData => {
            this.state.push(city);
            this.RenderTemplate(weatherData);
        })
    }


    RenderTemplate(data) {
        this.wrapper.insertAdjacentHTML('beforeend', `
             <div class="card col-1" style="width: 18rem;">
             <img class="card-img-top weather-img img-card" src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Card image cap">
             <div class="card-body">
                 <h5 class="card-title  weather-city"> Weather in ${data.name} </h5>
                 <p class="card-text weather-description"> ${data.weather[0].description}</p>
             </div>
             <ul class="list-group list-group-flush">
                 <li class="list-group-item"> Now tempreture : <b>${Math.round(data.main.temp)}&deg;</b> </li>
                 <li class="list-group-item"> Min temperature : <b>${Math.round(data.main.temp_min)}&deg;</b></li>
                 <li class="list-group-item"> Max temperature : <b>${Math.round(data.main.temp_max)}&deg;</b></li>
             </ul>
             <ul class="list-group">
                 <a class="href link-info" href="#"> more info </a>
                 <div class="inner closed">
                     <li class="list-group-item">Wind Speed : ${Math.round(data.wind.speed)} km/h</li>
                     <li class="list-group-item">Presure : ${data.main.pressure} hPa </li>
                     <li class="list-group-item">Humidity : ${data.main.humidity} %</li>
                 </div>
             </ul>
         </div>
        `)
    }

    ReRenderHtml(data) {
        this.wrapper.innerHTML += `
             <div class="card col-1" style="width: 18rem;">
             <img class="card-img-top weather-img img-card" src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Card image cap">
             <div class="card-body">
                 <h5 class="card-title  weather-city"> Weather in ${data.name} </h5>
                 <p class="card-text weather-description"> ${data.weather[0].description}</p>
             </div>
             <ul class="list-group list-group-flush">
                 <li class="list-group-item"> Now tempreture : <b>${Math.round(data.main.temp)}&deg;</b> </li>
                 <li class="list-group-item"> Min temperature : <b>${Math.round(data.main.temp_min)}&deg;</b></li>
                 <li class="list-group-item"> Max temperature : <b>${Math.round(data.main.temp_max)}&deg;</b></li>
             </ul>
             <ul class="list-group">
                 <a class="href link-info" href="#"> more info </a>
                 <div class="inner closed">
                     <li class="list-group-item">Wind Speed : ${Math.round(data.wind.speed)} km/h</li>
                     <li class="list-group-item">Presure : ${data.main.pressure} hPa </li>
                     <li class="list-group-item">Humidity : ${data.main.humidity} %</li>
                 </div>
             </ul>
         </div>
        `;
    }
}

new WeatherApi();
//sendRequest
//UpdateData
// function clickHref() {
//     wrapper.addEventListener('click', (event) => {
//         if (event.target.classList.contains('href')) {
//             event.preventDefault();
//             event.target.closest('.href').nextElementSibling.classList.toggle('closed');
//         }
//     });
// }

//function reRender(data) {
//     wrapper.innerHTML += `
//     <div class="card col-1" style="width: 18rem;">
//             <img class="card-img-top weather-img img-card" src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Card image cap">
//             <div class="card-body">
//                 <h5 class="card-title  weather-city"> Weather in ${data.name} </h5>
//                 <p class="card-text weather-description"> ${data.weather[0].description}</p>
//             </div>
//             <ul class="list-group list-group-flush">
//                 <li class="list-group-item"> Now tempreture : <b>${Math.round(data.main.temp)}&deg;</b> </li>
//                 <li class="list-group-item"> Min temperature : <b>${Math.round(data.main.temp_min)}&deg;</b></li>
//                 <li class="list-group-item"> Max temperature : <b>${Math.round(data.main.temp_max)}&deg;</b></li>
//             </ul>
//             <ul class="list-group">
//                 <a class="href link-info" href="#"> more info </a>
//                 <div class="inner closed">
//                     <li class="list-group-item">Wind Speed : ${Math.round(data.wind.speed)} km/h</li>
//                     <li class="list-group-item">Presure : ${data.main.pressure} hPa </li>
//                     <li class="list-group-item">Humidity : ${data.main.humidity} %</li>
//                 </div>
//             </ul>
//         </div>`;
// }
//function renderTemplate(data) {
//     wrapper.insertAdjacentHTML('beforeend', `
//     <div class="card col-1" style="width: 18rem;">
//             <img class="card-img-top weather-img img-card" src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Card image cap">
//             <div class="card-body">
//                 <h5 class="card-title  weather-city"> Weather in ${data.name} </h5>
//                 <p class="card-text weather-description"> ${data.weather[0].description}</p>
//             </div>
//             <ul class="list-group list-group-flush">
//                 <li class="list-group-item"> Now tempreture : <b>${Math.round(data.main.temp)}&deg;</b> </li>
//                 <li class="list-group-item"> Min temperature : <b>${Math.round(data.main.temp_min)}&deg;</b></li>
//                 <li class="list-group-item"> Max temperature : <b>${Math.round(data.main.temp_max)}&deg;</b></li>
//             </ul>
//             <ul class="list-group">
//                 <a class="href link-info" href="#"> more info </a>
//                 <div class="inner closed">
//                     <li class="list-group-item">Wind Speed : ${Math.round(data.wind.speed)} km/h</li>
//                     <li class="list-group-item">Presure : ${data.main.pressure} hPa </li>
//                     <li class="list-group-item">Humidity : ${data.main.humidity} %</li>
//                 </div>
//             </ul>
//         </div>`
//     )
// }