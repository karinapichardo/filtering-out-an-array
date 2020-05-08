/* 
Create a function that filters out an array of state names into two categories based on the second parameter.

Abbreviations: abb
Full names: full

Examples: 
filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb") --> ["CA", "NY"]
filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full") --> ["Arizona", "Nevada"]
*/

function filterStateNames(arr, type) {
    if (type === 'abb') {
    	var abbreviated = arr.filter(abb => abb.length <= 2)
        return abbreviated;
    } else if (type === 'full') {
    	var fullName = arr.filter(full => full.length > 2) 
        return fullName;
  }
}

// testing our function by calling it 
console.log(filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb")) // --> ["CA", "NY"] 

console.log(filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full")) // --> ["Arizona", "Nevada"] 

console.log(filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "abb")) // --> ["MT", "NJ", "TX", "ID", "IL"] 

console.log(filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "full")) // --> []