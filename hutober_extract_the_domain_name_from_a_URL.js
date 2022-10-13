// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet

////////////////////

// input will always be a string in the form of a URL

//It will return a substring representing the domain name. 

function extractURL (urlString) {
    //take in a string and remove everthing before // or www.
    urlString = urlString.replace('http://', '')
    urlString = urlString.replace('https://', '')
    urlString = urlString.replace('www.', '')
    //remove everything after and return the substring
    return urlString.split('.')[0]
}

console.log(extractURL("https://www.cnet.com"))