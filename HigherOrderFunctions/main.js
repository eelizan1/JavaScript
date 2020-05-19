const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
const strings = ['red', 'green', 'apple', 'blue', 'crayon'];

// forEach
// will NOT return a new array
ages.forEach((item, index) => console.log(index, item));
console.log('------------------------------');

// filter
const map = new Map();

ages.filter((age, index) => {
    if (age > 21) {
        map.set(index, age);
    }
});

// get all the companies that have the Retail property
const retail = companies.filter(company => {
    return company.category === 'Retail';
})

// get 80's companies
const eightiesCompanies = companies.filter (company => (company.start >= 1980 && company.start < 1990));


// map
// create array of company names and RETURNS the array unlike forEach
const companyNames =  companies.map(company => {
    return company.name;
})

const names = companies.map(company => {
    return company.name;
});

const testMap = companies.map((company) => {
    return `${company.name} [${company.start} - ${company.end}]`;
})

const agesSquares = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);

// Sort

// sort by start year
const sortedCompanies = companies.sort((a, b) => {
    return a.start > b.start;
});

// sort age ascending
const sortedAges = ages.sort((a, b) => {
    if (a > b) {
        return 1;
    } else {
        return -1;
    }
});

// sort strings in alphabetical order
const sortedStrings = strings.sort((s1, s2) => {
    return s1 > s2;
})
//console.log(sortedStrings);

const ageSum = ages.reduce((sum, item) => {
    return sum + item;
})

console.log(ageSum);

