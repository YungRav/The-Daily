//quote of the day API get call, passing the response with "quote"
$(document).ready(() => {
  app.get("https://quotes.rest/qod", (req, res) => {
    res.json({
      quote: res
    });
  });
});
