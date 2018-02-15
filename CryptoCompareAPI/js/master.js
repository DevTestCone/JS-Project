fetch("https://min-api.cryptocompare.com/")
  .then(function(response) {
    console.log(response);
    return response.json()
  })
  .then(function(data) {
    console.log(data.AvailableCalls.Price);
    // do stuff with `data`, call second `fetch`
    return fetch("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH,LCT,DASH,XRP,ETC&tsyms=BTC,USD,EUR")
  })
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(function(data) {
    console.log(data.RAW);
    // do stuff with `data`
  })
  .catch(function(error) {
    console.log('Requestfailed', error)
  });
