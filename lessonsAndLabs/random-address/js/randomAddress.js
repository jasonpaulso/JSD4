// Structure
// ------------------------------------------
var button    = document.querySelector('main button');
var addresses = document.querySelector('main .addresses');


// Events
// ------------------------------------------
button.addEventListener('click', generateAddress);


// Setup
// ------------------------------------------

// TODO: create your arrays here (street, city, state, etc)

var streetNumbers = [1234, 3456, 7891, 8910, 9999, 1020, 5060, 435, 211, 9, 24];
var streetNames = ["Market St", "Mission St", "Dolores St", "South Van Ness Ave", "Peoria Ave", "71st St", "Washington Ave", "Lincoln Rd"];
var cityNames = ["San Francisco", "Oakland", "Hayward", "San Jose", "Sacramento", "Miami", "Tulsa"];
var stateNames = ["CA", "OK", "FL", "PA"];
var postalCodes = [12345, 67890, 23456, 34567, 94108, 74066, 94108, 94110, 94103];

// Defined new property to access random element from any array
// ------------------------------------------

Object.defineProperty(Array.prototype, 'randomFromArray', {
  value: function() {
    return this[Math.floor((Math.random() * this.length))];
  },
  writable: false
});

// Defined function to create address from address arrays via .randomFromArray()
// ------------------------------------------

function generateAddress() {

  var streetNumber = streetNumbers.randomFromArray();
  var streetName = streetNames.randomFromArray();
  var cityName = cityNames.randomFromArray();
  var stateName = stateNames.randomFromArray();
  var postalCode = postalCodes.randomFromArray();

  var address = streetNumber + " " + streetName + ", " + cityName + ", " + stateName + " " + postalCode;

  addAddress(address);

}

// Update page functions
// ------------------------------------------

function addAddress(address) {
	var li = document.createElement('li');
	li.innerHTML = address;
	addresses.appendChild(li);
}



// Array.prototype.randomFromArray = function() {
//   return this[Math.floor((Math.random() * this.length))]
// }

// function generateAddress(e) {
//  // TODO: randomly select one item from each of these arrays 
//  //       and then use them to construct a random address

//   var streetNumber = streetNumbers[randomFromArray(streetNumbers.length)];
//   var streetName = streetNames[randomFromArray(streetNames.length)];
//   var cityName = cityNames[randomFromArray(cityNames.length)];
//   var stateName = stateNames[randomFromArray(stateNames.length)];
//   var postalCode = postalCodes[randomFromArray(postalCodes.length)];

//   var address = streetNumber + " " + streetName + " " + cityName + ", " + stateName + " " + postalCode;

//   addAddress(address);
// }

// function randomFromArray(arrayLength) {
//     return Math.floor((Math.random() * arrayLength));
// };




