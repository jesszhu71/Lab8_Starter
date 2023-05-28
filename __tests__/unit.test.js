// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2


// isPhoneNumber Tests
test('isPhoneNumber 10-Digit + Dashes', () => {
    expect(functions.isPhoneNumber("408-268-1390")).toBe(true);
});

test('isPhoneNumber 11-Digit + Dashes', () => {
    expect(functions.isPhoneNumber("1(111)111-1111")).toBe(true);
});

test('isPhoneNumber 11-Digit', () => {
    expect(functions.isPhoneNumber("11234567890")).toBe(false);
});

test('isPhoneNumber 10-Digit', () => {
    expect(functions.isPhoneNumber("0000000000")).toBe(false);
});



// isEmail

test('isEmail Valid Email', () => {
    expect(functions.isEmail("jelzhu@ucsc.edu")).toBe(true);
});

test('isEmail ValidEmail UnderScores', () => {
    expect(functions.isEmail("is_this_valid@ucsd.edu")).toBe(true);
});

test('isEmail Missing Symbols', () => {
    expect(functions.isEmail("jez006ucsd.edu")).toBe(false);
});

test('isEmail Bad Symbols', () => {
    expect(functions.isEmail("..>?@ucsd.edu")).toBe(false);
});





// isStrongPassword



test('isStrongPassword all lower case', () => {
    expect(functions.isStrongPassword("password")).toBe(true);
});

test('isStrongPassword lower and upper"', () => {
    expect(functions.isStrongPassword("abcD")).toBe(true);
});


test('isStrongPassword includes invalid chars"', () => {
    expect(functions.isStrongPassword("this1$@R@ndomPW")).toBe(false);
});

test('isStrongPassword begins with non-letter', () => {
    expect(functions.isStrongPassword("1bcdABCD")).toBe(false);
});




// isDate

test('isDate todays xx/xx/xxxx', () => {
    expect(functions.isDate("05/28/2023")).toBe(true);
});

test('isDate todays x/x/xxxx', () => {
    expect(functions.isDate("5/8/2023")).toBe(true);
});

test('isDate todays xxxxxxxx', () => {
    expect(functions.isDate("05282023")).toBe(false);
});


test('isDate todays xx/xx/xx', () => {
    expect(functions.isDate("05/28/23")).toBe(false);
});



// isHexColor

test('isHexColor 3 char hex', () => {
    expect(functions.isHexColor("FFF")).toBe(true);
});


test('isHexColor 6 char hex', () => {
    expect(functions.isHexColor("FFFfff")).toBe(true);
});


test('isHexColor 5 char hex', () => {
    expect(functions.isHexColor("FFFff")).toBe(false);
});


test('isHexColor 6 char not-hex', () => {
    expect(functions.isHexColor("zzzzzz")).toBe(false);
});