const apiCall = require("./apicall");

test("fetching with axios from NASA Exoplanets API", () => {
  expect.assertions(1);
  // const url = "http://country.io/capital.json";
  const url =
    "https://api.nasa.gov/techtransfer/patent/?engine&api_key=DEMO_KEY";
  return apiCall(url).then((data) => {
    expect(data).toContain("error");
  });
});
