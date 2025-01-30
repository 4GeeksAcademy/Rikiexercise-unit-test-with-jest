test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("1.07 should be 156.5 yenes", function() {
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen (1.07);

     expect(yens).toBe(156.5);
})

test("156.5 should be 0.87 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound (156.5);
     expect(pounds).toBe(0.87);
})