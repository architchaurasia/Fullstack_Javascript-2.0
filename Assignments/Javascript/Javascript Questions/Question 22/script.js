// Q.22. The following is an array of 10 students ages:
    // => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    // - Sort the array and find the min and max age
    // - Find the median age(one middle item or two middle items divided by two)
    // - Find the average age(all items divided by number of items)
    // - Find the range of the ages(max minus min)
    // - Compare the value of (min - average) and (max - average), use abs() method


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// - Sort the array and find the min and max age
const sortAges = ages.sort();
console.log(`Sorted Array : ${sortAges}`);

const minAges = Math.min(...ages);
console.log(`Min age : ${minAges}`);

const maxAges = Math.max(...ages);
console.log(`Max age : ${maxAges}`);

//- Find the median age(one middle item or two middle items divided by two)
const medianAge = (ages[ages.length / 2] + ages[(ages.length / 2) - 1]) / 2;
console.log(medianAge);

//- Find the average age(all items divided by number of items)
let items = 0;
ages.forEach(num => {
    items = num + items;
})

let averageAge = items/ages.length;
console.log(averageAge);

// - Find the range of the ages(max minus min)
const agesRange = maxAges - minAges;
console.log(`Range of the ages : ${agesRange}`);

// - Compare the value of (min - average) and (max - average), use abs() method
const minAverage = Math.abs(ages[0] - averageAge);
const maxAverage = Math.abs(ages[ages.length - 1] - averageAge);

if(minAverage > maxAverage){
    console.log("min-average is greater than max-average");
}
else if(minAverage < maxAverage){
    console.log("min-average is smaller than max-average");
}
else{
    console.log("min-average is equal to max-average");
}
