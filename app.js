let oneEuroIs = {
    JPY: 156.5, // japan yen
    USD: 1.07, // us dollar
    GBP: 0.87, // british pound
}
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollars) {
    let valueInEuro = valueInDollars / oneEuroIs.USD
    let valueInYen = valueInEuro * oneEuroIs.JPY
    return valueInYen
}
const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / oneEuroIs.JPY
    let valueInPound = valueInEuro * oneEuroIs.GBP
    return valueInPound
}
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };