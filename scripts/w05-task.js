/* W05: Programming Tasks */

/* Declare and initialize global variables */

// Declare a constant variable named templesElement that references
// the HTML div element that will be populated with temple data.
const templesElement = document.querySelector("div");

// Declare a global empty array variable to store
// a list of temples named templeList.
let templeList = [];

/* async displayTemples Function */

// Declare a function expression named displayTemples that
// accepts a list of temples as an array argument.
const displayTemples = (temples) => {
    // Process each temple in the temple array using forEach method.
    temples.forEach(temple => {
        // Create an HTML <article> element.
        const articleElement = document.createElement("article");

        // Create an HTML <h3> element and add the temple's templeName property.
        const headerThreeElement = document.createElement("h3");
        headerThreeElement.textContent = temple.templeName;

        // Create an HTML <img> element and add temple's imageUrl property to
        // src attribute and location property to alt attribute.
        const imageElement = document.createElement("img");
        imageElement.setAttribute("src", temple.imageUrl);
        imageElement.setAttribute("alt", temple.location);

        // Append the <h3> element and the <img> element to the <article>
        // element as children.
        articleElement.appendChild(headerThreeElement);
        articleElement.appendChild(imageElement);

        // Append the <article> element to the global templesElement variable.
        templesElement.appendChild(articleElement);
    });
}

/* async getTemples Function using fetch()*/

// Declare an async function expression named getTemples.
const getTemples = async () => {
    // Declare a const variable named response that awaits the fetch method to get temple data.
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    // Converts fetch response into javaScript object(.json).
    // Check to see if the fetch was successful
    if (response.ok) {
        // the API will send us JSON... but we have to convert the response before we can use it
        // .json() also returns a promise... so we await it as well.

        // Convert fetch response into JS object and assign it to the templeList global array variable.
        templeList = await response.json();

        // Call the displayTemples function and pass it the list of temples(templeList).
        displayTemples(templeList);
    }
}

/* reset Function */

// Declare a function expression named rest that clears all <article> elements from templeElement. 
const reset = () => {
    templesElement.innerHTML = "";
}

/* sortBy Function */

// Declare a function expression named sortBy that accepts a parameter named temples.
const sortBy = (temples) => {
    // Clear the output by calling the reset function
    reset();

    // Define a variable named filter that obtains the value of the HTML element with ID of sortBy.
    const filter = document.querySelector("#sortBy").value;

    // Use a switch statement to filter temples based on the selected option.
    switch (filter) {
        case "utah":
            // Filter for temples where the location contains "Utah" as a string.
            displayTemples(temples.filter(temple =>
                temple.location.includes("Utah")
            ));
            break;
        case "notutah":
            // Filter for temples where the location does not contain "Utah" as a string.
            displayTemples(temples.filter(temple => 
                !temple.location.includes("Utah")
            ));
            break;
        case "older":
            // Filter for temples where the dedicated date is before 1950.
            displayTemples(temples.filter(temple => 
                new Date(temple.dedicated) < new Date(1950, 0, 1)
            ));
            break;
        case "all":
            // No filter, use template as the argument.
            displayTemples(temples);
            break;
        default:
            //code to be executed if the expression dosent match any case
            console.log("invalid filter option");
            break;
    }
}

// Call the getTemples function to initiate fetching and displaying temple data.
getTemples();

/* Event Listener */

// Add a change event listener to the HTML element with an ID of sortBy.
// Call the sortBy function and pass templeList as the argument.
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });