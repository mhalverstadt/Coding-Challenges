// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

//Mine:
function removeUrlAnchor(url){
    return url.includes('#') ? url.slice(0, url.indexOf('#')) : url
}

//Top Solution:
function removeUrlAnchor(url){
    return url.split('#')[0];
  }

// Test:
console.log(removeUrlAnchor("www.codewars.com#about"))
console.log(removeUrlAnchor("www.codewars.com/about"))