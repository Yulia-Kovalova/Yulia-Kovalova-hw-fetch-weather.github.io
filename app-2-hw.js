function showIcon() {
    fetch("http://openweathermap.org/img/w/10d.png")
    .then((response) => response.json())
    .then(data => {
        let img = document.createElement("img");
        let icon = data;
        img.setAttribute(icon);
        document.body.section.div.div.div.prepend(img)
    })
}
let bnt = document.querySelector(".button");
bnt.addEventListener("click", showIcon)

class Weather {
    constructor(temp, pressure, description, humidity, speed, deg, icon, parent) {
        this.temp = temp;
        this.pressure = pressure;
        this.description = description;
        this.humidity = humidity;
        this.speed = speed;
        this.deg = deg;
        this.icon = icon;
        this.parent = document.querySelector(parent);
    }
    render() {
        let weather = document.createElement("weather");
        weather.classList.add("col-4");
        weather.innerHTML = `
            <div class="weather">
                <div class="weather-data">
                    <p>${this.temp}</p>
                    <p>${this.pressure}</p>
                    <p>${this.description}</p>
                    <p>${this.humidity}</p>
                    <p>${this.speed}</p>
                    <p>${this.deg}</p>
                </div>
                <div class="weather-icon">
                    <img src="${showIcon()}" alt="">
                </div>
            </div>
        `
        this.parent.append(weather)
    }
}

fetch("http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19")
.then(res => res.json())
.then(data => {
    data.map(item => (
        new Weather(
            item.temp,
            item.pressure,
            item.description,
            item.humidity,
            item.speed,
            item.deg,
            item.icon,
            item.parent
        ).render()
    ))
})

// fetch("http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19")
// .then(res => res.json())
// .then(data => console.log(data))