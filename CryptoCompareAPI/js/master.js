let toSymbolBTC, toSymbolUSD, toSymbolEUR;
let dashChangeBTC, dashChangeUSD, dashChangeEUR, dashBTC, dashUSD, dashEUR;
let etcChangeBTC, etcChangeUSD, etcChangeEUR, etcBTC, etcUSD, etcEUR;
let ethChangeBTC, ethChangeUSD, ethChangeEUR, ethBTC, ethUSD, ethEUR;
let ltcChangeBTC, ltcChangeUSD, ltcChangeEUR, ltcBTC, ltcUSD, ltcEUR;
let xrpChangeBTC, xrpChangeUSD, xrpChangeEUR, xrpBTC, xrpUSD, xrpEUR;

function Update(){
fetch("https://min-api.cryptocompare.com/")
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
    console.log(data.AvailableCalls.Price);
    // do stuff with `data`, call second `fetch`
    return fetch("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH,LTC,DASH,XRP,ETC&tsyms=BTC,USD,EUR")
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    // do stuff with `data`
    toSymbolBTC = data.DISPLAY.DASH.BTC.TOSYMBOL;
    toSymbolUSD = data.DISPLAY.DASH.USD.TOSYMBOL;
    toSymbolEUR = data.DISPLAY.DASH.EUR.TOSYMBOL;
    // DASH
    dashChangeBTC = data.DISPLAY.DASH.BTC.CHANGEDAY;
    dashChangeUSD = data.DISPLAY.DASH.USD.CHANGEDAY;
    dashChangeEUR = data.DISPLAY.DASH.EUR.CHANGEDAY;
    dashBTC = data.RAW.DASH.BTC.PRICE;
    dashUSD = data.RAW.DASH.USD.PRICE;
    dashEUR = data.RAW.DASH.EUR.PRICE;

    $('#dashBTC').text(toSymbolBTC + ' ' + dashBTC);
    $('#dashUSD').text(toSymbolUSD + ' ' + dashUSD);
    $('#dashEUR').text(toSymbolEUR + ' ' + dashEUR);
    $('#dashChangeBTC').text(dashChangeBTC);
    $('#dashChangeUSD').text(dashChangeUSD);
    $('#dashChangeEUR').text(dashChangeEUR);

    // ETC
    etcChangeBTC = data.DISPLAY.ETC.BTC.CHANGEDAY;
    etcChangeUSD = data.DISPLAY.ETC.USD.CHANGEDAY;
    etcChangeEUR = data.DISPLAY.ETC.EUR.CHANGEDAY;
    etcBTC = data.RAW.ETC.BTC.PRICE;
    etcUSD = data.RAW.ETC.USD.PRICE;
    etcEUR = data.RAW.ETC.EUR.PRICE;

    $('#etcBTC').text(toSymbolBTC + ' ' + etcBTC);
    $('#etcUSD').text(toSymbolUSD + ' ' + etcUSD);
    $('#etcEUR').text(toSymbolEUR + ' ' + etcEUR);
    $('#etcChangeBTC').text(etcChangeBTC);
    $('#etcChangeUSD').text(etcChangeUSD);
    $('#etcChangeEUR').text(etcChangeEUR);

    // ETH
    ethChangeBTC = data.DISPLAY.ETH.BTC.CHANGEDAY;
    ethChangeUSD = data.DISPLAY.ETH.USD.CHANGEDAY;
    ethChangeEUR = data.DISPLAY.ETH.EUR.CHANGEDAY;
    ethBTC = data.RAW.ETH.BTC.PRICE;
    ethUSD = data.RAW.ETH.USD.PRICE;
    ethEUR = data.RAW.ETH.EUR.PRICE;

    $('#ethBTC').text(toSymbolBTC + ' ' + ethBTC);
    $('#ethUSD').text(toSymbolUSD + ' ' + ethUSD);
    $('#ethEUR').text(toSymbolEUR + ' ' + ethEUR);
    $('#ethChangeBTC').text(ethChangeBTC);
    $('#ethChangeUSD').text(ethChangeUSD);
    $('#ethChangeEUR').text(ethChangeEUR);

    // LTC
    ltcChangeBTC = data.DISPLAY.LTC.BTC.CHANGEDAY;
    ltcChangeUSD = data.DISPLAY.LTC.USD.CHANGEDAY;
    ltcChangeEUR = data.DISPLAY.LTC.EUR.CHANGEDAY;
    ltcBTC = data.RAW.LTC.BTC.PRICE;
    ltcUSD = data.RAW.LTC.USD.PRICE;
    ltcEUR = data.RAW.LTC.EUR.PRICE;

    $('#ltcBTC').text(toSymbolBTC + ' ' + ltcBTC);
    $('#ltcUSD').text(toSymbolUSD + ' ' + ltcUSD);
    $('#ltcEUR').text(toSymbolEUR + ' ' + ltcEUR);
    $('#ltcChangeBTC').text(ltcChangeBTC);
    $('#ltcChangeUSD').text(ltcChangeUSD);
    $('#ltcChangeEUR').text(ltcChangeEUR);

    // XRP
    xrpChangeBTC = data.DISPLAY.XRP.BTC.CHANGEDAY;
    xrpChangeUSD = data.DISPLAY.XRP.USD.CHANGEDAY;
    xrpChangeEUR = data.DISPLAY.XRP.EUR.CHANGEDAY;
    xrpBTC = data.RAW.XRP.BTC.PRICE;
    xrpUSD = data.RAW.XRP.USD.PRICE;
    xrpEUR = data.RAW.XRP.EUR.PRICE;

    $('#xrpBTC').text(toSymbolBTC + ' ' + xrpBTC);
    $('#xrpUSD').text(toSymbolUSD + ' ' + xrpUSD);
    $('#xrpEUR').text(toSymbolEUR + ' ' + xrpEUR);
    $('#xrpChangeBTC').text(xrpChangeBTC);
    $('#xrpChangeUSD').text(xrpChangeUSD);
    $('#xrpChangeEUR').text(xrpChangeEUR);

  })
  .catch(function(error) {
    console.log('Requestfailed', error)
  });
}
Update();
setInterval ( "Update()", 5000 );
