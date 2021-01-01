class Weather {
  constructor(city, state) {
    this.apiKey = "cb0946317ef5a3e34b6b427e79cffacf";
    this.city = city;
    this.state = state;
  }

  //Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state},US&appid=${this.apiKey}&units=imperial`
    );

    const responseData = response.json();

    return responseData;
  }

  //Change weather location{
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
