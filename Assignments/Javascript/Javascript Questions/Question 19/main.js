//Create a countries.js file and store the countries name into this file, create a file web_techs.js and store the popular web technology names into this file. Access both file in a third file named main.js

const countries = require('./countries');
const web_techs = require('./web_techs.js');


console.log(countries);
//Output
// countries: [
//     'Afghanistan',
//     'Albania',
//     'China',
//     'Pakistan',
//     'Russia',
//     'India',
//     'Mali'
//   ]

console.log(web_techs);
//Output
// web_tech: [
//     'Django',
//     'Motion UI',
//     'Blockchain',
//     'Laravel',
//     'Serverless Architecture',
//     'Angular',
//     'React JS'
//   ]
