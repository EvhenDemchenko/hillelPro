const wrapper = document.querySelector('.wrapper');
const input = document.querySelector('.input');
const requestBtn = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2')

const updateArray = [];

btn2.addEventListener('click', (e) => {
    wrapper.innerHTML = ``;
    UpdateData(e)
})

requestBtn.addEventListener('click', e => {
    e.preventDefault()
    sendRequest(input.value)
    input.value = '';
})

function sendRequest(city) {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`
    fetch(URL, {
        method: 'GET'
    }).then(res => {
        if (res.ok) {
            updateArray.push(city);
            return res.json();
        } else {
            console.log(res);
            console.error(res.statusText);
        }
    }).then(res => {
        renderTemplate(res);
    })
}

function UpdateData(event) {
    event.preventDefault();
    updateArray.forEach(item => {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${item}&units=metric&APPID=5d066958a60d315387d9492393935c19`
        fetch(URL, {
            method: 'GET'
        }).then(res => {
            return res.json()
        }).then(res => {
            reRender(res)
        })
    })
}

function clickHref() {
    wrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains('href')) {
            event.preventDefault();
            event.target.closest('.href').nextElementSibling.classList.toggle('closed');
        }
    });
}

clickHref()

function reRender(data) {
    wrapper.innerHTML += `
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
        </div>`;
}

function renderTemplate(data) {
    wrapper.insertAdjacentHTML('beforeend', `
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
        </div>`
    )
}

// http://openweathermap.org/img/w/10d.png
// 446b10dfb989cf80d41cbece28b61ade
// https://api.openweathermap.org/data/2.5/weather?
// q={city name}
// &appid={API key}