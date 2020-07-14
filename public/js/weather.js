$(document).ready(() => {
  //Put this is the .env file for security
  const APIKey = "969c89bca4e153f24fefd04611cdc292";

  function searchWeather(searchValue) {
    $.ajax({
      type: "GET",
      url:
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        searchValue +
        "&appid=" +
        APIKey +
        "&units=imperial",
      dataType: "json",
      success: function(data) {
        console.log(data);
        //const tempToday = data.main.temp;
      }
    });
  }

  searchWeather();
});
