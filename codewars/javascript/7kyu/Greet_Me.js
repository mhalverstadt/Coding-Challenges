


// //Mine:
var greet = function(name) {
    let formattedLetter = name.split('')[0].toUpperCase()
    return `Hello ${formattedLetter}${name.substring(1).toLowerCase()}!`
  };

// //Top Solution:
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

var greet = function(name) {
return "Hello " + name.capitalize() + "!";
};

// //Test:
console.log()